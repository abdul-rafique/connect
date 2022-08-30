import React from "react";
import { Link } from "react-router-dom";

function SecondaryButton(props) {
  const { as, children, link } = props;

  switch (as) {
    case "submit":
      return (
        <button
          type="submit"
          className="px-4 py-1.5 bg-white text-primary font-semibold border-primary rounded border-2 hover:bg-primary hover:text-white transition-colors duration-200"
          {...props}
        >
          {children}
        </button>
      );

    case "link":
      return (
        <Link
          to={link || "/"}
          className="px-4 py-1.5 bg-white text-primary font-semibold border-primary rounded border-2 hover:bg-primary hover:text-white transition-colors duration-200"
          {...props}
        >
          {children}
        </Link>
      );

    default:
      return (
        <button
          type="button"
          className="px-4 py-1.5 bg-white text-primary font-semibold border-primary rounded border-2 hover:bg-primary hover:text-white transition-colors duration-200"
          {...props}
        >
          {children}
        </button>
      );
  }
}

export default SecondaryButton;
