import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoEllipsisHorizontal } from "react-icons/io5";

function PostMenu() {
  return (
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
  );
}

export default PostMenu;
