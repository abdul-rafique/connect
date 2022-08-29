import React from "react";
import { Outlet } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import UserAvatar from "../../Components/UserAvatar";
import UserInfoMenu from "../../Components/UserInfoMenu";

function User() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col w-full rounded-lg bg-white shadow">
        <div className="min-h-[4rem] max-h-56 flex items-center justify-center overflow-hidden rounded-t-lg">
          <img
            src={
              false
                ? "https://picsum.photos/id/1002/800"
                : "http://placehold.jp/32/d6fff1/309975/800x400.jpg?text=Cover%20Image"
            }
            alt="cover_image"
            className="shrink-0 max-h-full max-w-full"
          />
        </div>
        <div className="relative">
          <div className="absolute -bottom-20 flex items-end justify-start gap-5 p-5">
            <UserAvatar size={72} color="primary" padding={5} />
            <div className="">
              <span className="block lg:text-2xl font-semibold">Username</span>
              <span className="flex items-center text-sm">
                <IoLocationOutline /> Karachi, Pakistan
              </span>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden px-2.5 py-4 mt-16">
          <hr className="mb-3 border-t-gray/30" />
          <UserInfoMenu />
        </div>
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default User;
