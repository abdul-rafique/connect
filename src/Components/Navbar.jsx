import React from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

export default function Navbar(props) {
  return (
    <div className="fixed top-0 inset-x-0 z-20 px-10 py-4 flex justify-between items-center bg-white/90 text-primary shadow backdrop-filter backdrop-blur">
      <Link to="/" className="text-2xl font-semibold">
        Logo
      </Link>

      {props.isUser === true ? (
        <UserMenu />
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
