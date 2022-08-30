import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../Components/FormField";
import FormPasswordField from "../Components/FormPasswordField";
import PrimaryButton from "../Components/PrimaryButton";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleFieldChange = (e) => {
    switch (e.target.name) {
      case "username":
        console.log(e.target.value);
        break;
      case "email":
        console.log(e.target.value);
        break;
      case "pass":
        console.log(e.target.value);
        break;
      case "confirmPass":
        console.log(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="min-w-fit max-w-sm mx-auto my-10 p-8 border border-primary rounded shadow-md shadow-accent/50">
      <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
        Sign Up
      </h2>
      <form action="" className="w-80">
        <div className="mb-3">
          <FormField
            label="Username"
            name="username"
            type="text"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3">
          <FormField
            label="Email"
            name="email"
            type="email"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3">
          <FormPasswordField
            label="Password"
            name="pass"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3">
          <FormPasswordField
            label="Confirm Password"
            name="confirmPass"
            onChange={handleFieldChange}
          />
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
