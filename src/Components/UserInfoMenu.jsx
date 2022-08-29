import React from "react";
import { Link } from "react-router-dom";

function UserInfoMenu() {
  const items = [
    { itemName: "Posts", url: "/user" },
    { itemName: "About", url: "about" },
    { itemName: "Friends", url: "friends" },
  ];
  return (
    <ul className="flex items-center gap-2">
      {items.map((item) => (
        <li className="">
          <Link
            to={item.url}
            className="font-semibold text-dark/60 px-3 py-2 border-b-2 border-transparent hover:border-primary hover:text-dark/80"
          >
            {item.itemName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserInfoMenu;
