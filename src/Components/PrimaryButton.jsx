import React from "react";

function PrimaryButton({ text, className }) {
  return (
    <button
      type="submit"
      className={`p-2.5 my-3 bg-primary text-white font-semibold rounded ${className}`}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
