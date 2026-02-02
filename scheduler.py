import datetime
import os
from typing import Any, Dict, Optional

import requests
from pydantic import BaseModel

# Constants
API_URL = "https://api.typefully.com/v1/drafts/"

def _build_headers() -> Optional[Dict[str, str]]:
    api_key = os.getenv("TYPEFULLY_API_KEY")
    if not api_key:
        print("Error: TYPEFULLY_API_KEY environment variable is not set.")
        return None
    return {"X-API-KEY": f"Bearer {api_key}"}

def json_to_typefully_content(thread_json: Dict[str, Any]) -> str:
    """Convert JSON thread format to Typefully's format with 4 newlines between tweets."""
    tweets = thread_json.get("tweets")
    if not isinstance(tweets, list) or not tweets:
        raise ValueError("Invalid thread JSON: 'tweets' must be a non-empty list.")
    formatted_tweets = []
    for tweet in tweets:
        tweet_text = tweet.get("content")
        if not tweet_text:
            raise ValueError("Invalid tweet JSON: 'content' is required.")
        media_urls = tweet.get("media_urls") or []
        if media_urls:
            tweet_text += f"\n{media_urls[0]}"
        formatted_tweets.append(tweet_text)
    
    return "\n\n\n\n".join(formatted_tweets)

def json_to_linkedin_content(thread_json: Dict[str, Any]) -> str:
    """Convert JSON thread format to a LinkedIn post format."""
    content = thread_json.get("content")
    if not content:
        raise ValueError("Invalid LinkedIn JSON: 'content' is required.")
    url = thread_json.get("url")
    if url:
        content += f"\n{url}"
    return content

def schedule_thread(
    content: str,
    schedule_date: str = "next-free-slot",
    threadify: bool = False,
    share: bool = False,
    auto_retweet_enabled: bool = False,
    auto_plug_enabled: bool = False
) -> Optional[Dict[str, Any]]:
    """Schedule a thread on Typefully."""
    headers = _build_headers()
    if headers is None:
        return None

    payload = {
        "content": content,
        "schedule-date": schedule_date,
        "threadify": threadify,
        "share": share,
        "auto_retweet_enabled": auto_retweet_enabled,
        "auto_plug_enabled": auto_plug_enabled
    }
    
    payload = {key: value for key, value in payload.items() if value is not None}

    try:
        response = requests.post(API_URL, json=payload, headers=headers, timeout=30)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

def schedule(
    thread_model: BaseModel,
    hours_from_now: int = 1,
    threadify: bool = False,
    share: bool = True,
    post_type: str = "twitter"
) -> Optional[Dict[str, Any]]:
    """
    Schedule a thread from a Pydantic model.
    
    Args:
        thread_model: Pydantic model containing thread data
        hours_from_now: Hours from now to schedule the thread (default: 1)
        threadify: Whether to let Typefully split the content (default: False)
        share: Whether to get a share URL in response (default: True)
    
    Returns:
        API response dictionary or None if failed
    """
    try:
        # Convert Pydantic model to dict
        if hasattr(thread_model, "model_dump"):
            thread_json = thread_model.model_dump()
        else:
            thread_json = thread_model.dict()
        print("######## Thread JSON: ", thread_json)
        # Convert to Typefully format
        if post_type == "twitter":
            thread_content = json_to_typefully_content(thread_json)
        elif post_type == "linkedin":
            thread_content = json_to_linkedin_content(thread_json)
        else:
            raise ValueError("Invalid post_type. Expected 'twitter' or 'linkedin'.")

        if hours_from_now < 0:
            raise ValueError("hours_from_now must be >= 0.")
        
        # Calculate schedule time
        schedule_date = (
            datetime.datetime.now(datetime.timezone.utc)
            + datetime.timedelta(hours=hours_from_now)
        ).isoformat().replace("+00:00", "Z")
        
        # Schedule the thread
        response = schedule_thread(
            content=thread_content,
            schedule_date=schedule_date,
            threadify=threadify,
            share=share
        )
        
        if response:
            print("Thread scheduled successfully!")
            return response
        else:
            print("Failed to schedule the thread.")
            return None
            
    except Exception as e:
        print(f"Error: {str(e)}")
        return None
