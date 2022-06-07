import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { IoCaretDown, IoPerson } from "react-icons/io5";

export default function Navbar(props) {
  return (
    <div className="bg-primary text-white px-10 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-semibold">
        Logo
      </Link>

      {props.isUser === true ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className={`rounded-md px-3 py-1.5 w-full flex items-center gap-2`}
            >
              <span className="p-2 rounded-full ring-2 ring-white">
                <IoPerson size={28} className="text-white" />
              </span>
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
      ) : (
        // <div className="relative" onClick={handleDropdown}>
        //   <div className="flex items-center gap-1">
        //     <img
        //       src={process.env.PUBLIC_URL + "/user-light.png"}
        //       alt="user_avatar"
        //       className="w-8 rounded-full ring ring-primary ring-offset-2"
        //     />
        //     <div className="p-1.5 rounded-full ring-2 ring-white">
        //       <IoPerson size={24} />
        //     </div>
        //     <IoCaretDown size={20} />
        //   </div>

        //   {dropActive && (
        //     <div className="w-32 min-w-fit absolute top-full right-0 p-1.5 mt-1 bg-white shadow shadow-dark/20 text-dark rounded">
        //       <Link
        //         to="/profile"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         Profile
        //       </Link>
        //       <hr className="my-1 border-t-dark/20" />
        //       <Link
        //         to="/posts"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         My Posts
        //       </Link>
        //       <Link
        //         to="/settings"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         Settings
        //       </Link>
        //       <hr className="my-1 border-t-dark/20" />
        //       <Link
        //         to="/logout"
        //         className="block px-3 py-1 rounded hover:bg-accent/30 hover:text-primary"
        //       >
        //         Logout
        //       </Link>
        //     </div>
        //   )}
        // </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-3 py-1.5 border-2 border-white text-white font-semibold rounded-md transition-colors duration-300 hover:bg-white hover:text-primary  hover:border-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1.5 border-2 border-white text-white  font-semibold rounded-md transition-colors duration-300 hover:bg-white hover:text-primary hover:border-2"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}
