import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

function FormPasswordField({ label, id }) {
  const [showPass, setShowPass] = useState(false);

  const handlePassPrivacy = () => {
    return showPass ? setShowPass(false) : setShowPass(true);
  };
  return (
    <>
      <label htmlFor={`#${id}`}>{label || "Password"}</label>
      <div className="flex">
        <input
          type={showPass ? "text" : "password"}
          className="block w-full rounded-l border-gray focus:border-primary focus:ring-primary"
          id={id}
        />
        <button
          type="button"
          className="px-3 text-primary bg-accent/30 border-r border-y border-gray rounded-r"
          onClick={handlePassPrivacy}
        >
          {showPass ? (
            <IoEyeOutline size={20} />
          ) : (
            <IoEyeOffOutline size={20} />
          )}
        </button>
      </div>
    </>
  );
}

export default FormPasswordField;
