import React from "react";

function FormField({ label, type, placeholder, id }) {
  return (
    <>
      <label htmlFor={`#${id}`}>{label}</label>
      <input
        type={type}
        className="block w-full rounded border-gray focus:border-primary focus:ring-primary"
        placeholder={placeholder}
        id={id}
      />
    </>
  );
}

export default FormField;
