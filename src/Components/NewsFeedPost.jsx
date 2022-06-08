import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoEllipsisHorizontal,
  IoHeartOutline,
  IoChatboxOutline,
  IoShareSocialOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

import PostUser from "./PostUser";
import PostActionButton from "./PostActionButton";
import NewComment from "./NewComment";

function NewsFeedPost() {
  return (
    <div className="w-full flex flex-col gap-3 p-5 rounded-lg shadow bg-white">
      {/* NewsFeedPost Topbar */}
      <div className="flex justify-between items-start">
        <PostUser />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className={`rounded-full p-2 text-dark/80 focus:ring-2 focus:ring-primary hover:text-primary focus:text-primary`}
            >
              <IoEllipsisHorizontal size={20} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration 100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-1 w-48 origin-top-right divide-y bg-white rounded-md shadow-md ring-1 ring-gray/30">
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-accent/30 text-primary" : "text-gray"
                      } group flex w-full items-center rounded-md p-2 text-sm`}
                    >
                      Option 1
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
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
          <Link to="/single_post" className="absolute inset-0"></Link>
        </div>
      </div>
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
          <PostActionButton
            text="12 Saved"
            leadingIcon={<IoBookmarkOutline size={20} />}
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
