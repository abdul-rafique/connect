import React from "react";
import PostActionButton from "./PostActionButton";
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoShareSocialOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

function PostActions() {
  return (
    <div className="flex justify-between gap-3 my-1">
      <PostActionButton
        text="120k Likes"
        leadingIcon={<IoHeartOutline size={20} />}
      />
      <PostActionButton
        text="25 Comments"
        leadingIcon={<IoChatboxOutline size={20} />}
      />
      <PostActionButton
        text="231 Shares"
        leadingIcon={<IoShareSocialOutline size={20} />}
      />
      <PostActionButton
        text="12 Saved"
        leadingIcon={<IoBookmarkOutline size={20} />}
      />
    </div>
  );
}

export default PostActions;
