import React from "react";
import Post from "../../Components/Post";

function Posts() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg bg-white shadow overflow-hidden px-5 py-3">
        <h5 className="text-lg font-semibold">Posts</h5>
      </div>

      <Post imgId={2} />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
