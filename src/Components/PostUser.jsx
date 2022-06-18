import React from "react";
import { Link } from "react-router-dom";

function PostUser({ extraCssClasses }) {
  return (
    <div className={`relative flex items-center gap-3 ${extraCssClasses}`}>
      <img
        src={process.env.PUBLIC_URL + "./user-dark.png"}
        alt="post_user_avatar"
        className="w-10 max-w-[2.5rem] opacity-40"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-dark/80 leading-none">
          Post User
        </span>
        <small className="text-gray">07 June at 10:33 AM</small>
      </div>
      <Link to="/" className="absolute inset-0" />
    </div>
  );
}

export default PostUser;
