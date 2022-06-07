import React from "react";
import NewPost from "../Components/NewPost";
import Post from "../Components/Post";

function NewsFeed() {
  return (
    <div className="md:w-2/3 lg:w-1/2 min-w-min mx-auto my-3 p-3 flex flex-col gap-3">
      <NewPost />
      <Post />
    </div>
  );
}

export default NewsFeed;
