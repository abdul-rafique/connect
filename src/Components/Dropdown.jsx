import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoCaretDown } from "react-icons/io5";

function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`rounded px-3 py-1.5 w-full flex items-center gap-1 hover:bg-accent/30 focus:ring-2 focus:ring-primary`}
        >
          Options
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y bg-white rounded shadow-lg ring-1 ring-dark/30">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-accent/30 text-primary" : "text-gray"
                  } group flex w-full items-center rounded px-3 py-1.5 text-sm`}
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

export default Dropdown;
