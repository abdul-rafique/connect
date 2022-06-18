import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { IoCaretDown } from "react-icons/io5";
import UserAvatar from "./UserAvatar";

function UserMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`rounded-md px-3 py-1.5 w-full flex items-center gap-2`}
        >
          <UserAvatar color="primary" size={28} />
          <IoCaretDown size={20} />
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
        <Menu.Items className="absolute right-0 mt-1 min-w-[8rem] origin-top-right bg-white rounded-md shadow-md ring-1 ring-gray/30">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`${
                    active ? "bg-accent/30 text-primary" : "text-gray"
                  } group flex w-full items-center rounded-md p-2 text-sm`}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`${
                    active ? "bg-accent/30 text-primary" : "text-gray"
                  } group flex w-full items-center rounded-md p-2 text-sm`}
                >
                  My Posts
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`${
                    active ? "bg-accent/30 text-primary" : "text-gray"
                  } group flex w-full items-center rounded-md p-2 text-sm`}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`${
                    active ? "bg-accent/30 text-primary" : "text-gray"
                  } group flex w-full items-center rounded-md p-2 text-sm`}
                >
                  Logout
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
