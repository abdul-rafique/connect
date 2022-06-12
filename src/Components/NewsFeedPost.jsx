import React, { useState } from "react";
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

import PostUser from "./PostUser";
import PostActionButton from "./PostActionButton";
import NewComment from "./NewComment";
import PostDetailsDialog from "./PostDetailsDialog";

function NewsFeedPost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col gap-3 p-5 rounded-lg shadow bg-white">
      {/* NewsFeedPost Topbar */}
      <div className="flex justify-between items-start">
        <PostUser />
      </div>

      {/* NewsFeedPost Content */}
      <div className="flex flex-col gap-3">
        <p className=" leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime
          eligendi exercitationem fuga corporis delectus nulla, labore dolore
          numquam possimus quos laborum iste maiores laudantium. Rem quia
          assumenda architecto voluptates!
        </p>

        <div className="relative max-h-64 lg:max-h-96 grid grid-rows-2 grid-cols-2 gap-3">
          <div className="row-span-2 flex justify-center items-center overflow-hidden rounded-lg">
            <img
              src={process.env.PUBLIC_URL + "./dummy-1.jpg"}
              alt=""
              className="shrink-0 min-w-full min-h-full"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden rounded-lg">
            <img
              src={process.env.PUBLIC_URL + "./dummy-2.jpg"}
              alt=""
              className="shrink-0 min-w-full min-h-full"
            />
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={process.env.PUBLIC_URL + "./dummy-3.jpg"}
              alt=""
              className="shrink-0 min-w-full min-h-full"
            />
            <div className="absolute inset-0 bg-dark/80 flex items-center justify-center">
              <span className="text-xl text-white font-semibold">10+ More</span>
            </div>
          </div>
          <span
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <PostDetailsDialog isOpen={isModalOpen} closeModal={closeModal} />

      <div>
        <hr className="border-t-gray" />

        {/* NewsFeedPost Actions (Likes, Comments, Shares, Saved) */}
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
        </div>

        <hr className="border-t-gray" />
      </div>
      {/* NewsFeedPost Direct Comment */}
      <NewComment />
    </div>
  );
}

export default NewsFeedPost;
