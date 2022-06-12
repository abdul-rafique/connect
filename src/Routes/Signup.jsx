import React from "react";
import { Link } from "react-router-dom";

import FormField from "../Components/FormField";
import FormPasswordField from "../Components/FormPasswordField";
import PrimaryButton from "../Components/PrimaryButton";

export default function SignUp() {
  return (
    <div className="min-w-fit max-w-sm mx-auto my-10 p-5 border border-primary rounded shadow-md shadow-accent/50">
      <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
        Sign Up
      </h2>
      <form action="">
        <div className="mb-3">
          <FormField label="Username" type="text" />
        </div>

        <div className="mb-3">
          <FormField label="Email" type="email" />
        </div>

        <div className="mb-3">
          <FormPasswordField label="Password" />
        </div>

        <div className="mb-3">
          <FormPasswordField label="Confirm Password" />
        </div>

        <PrimaryButton text="Sign Up" className="w-full" />
      </form>

      <hr className="my-3 border-t-dark/20" />

      <p className="text-gray text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-accent hover:text-primary transition-colors"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
