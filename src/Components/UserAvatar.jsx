import React from "react";
import { IoPerson } from "react-icons/io5";

function UserAvatar({ color, size }) {
  return (
    <span className={`block p-2 rounded-full ring-2 ring-${color}`}>
      <IoPerson size={size} className={`text-${color}`} />
    </span>
  );
}

export default UserAvatar;
