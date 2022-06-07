import { Link } from "react-router-dom";

import FormField from "../Components/FormField";
import FormPasswordField from "../Components/FormPasswordField";

export default function Login() {
  return (
    <div className="min-w-fit max-w-sm mx-auto my-10 p-5 border border-primary rounded shadow-md shadow-accent/50">
      <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
        Login
      </h2>
      <form action="">
        <div className="mb-3">
          <FormField label="Username or Email" type="text" />
        </div>
        <div className="mb-3">
          <FormPasswordField />
        </div>

        <div className="mb-3 flex justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-2 rounded text-primary focus:outline-primary"
            />
            <label htmlFor="">Remember me</label>
          </div>

          <Link
            to="/forgot-password"
            className="text-accent hover:text-primary"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full p-2.5 my-3 bg-primary text-white font-semibold rounded"
        >
          Login
        </button>
      </form>
      <hr className="my-3 border-t-dark/20" />

      <p className="text-dark/40 text-center">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-accent hover:text-primary transition-colors"
        >
          Signup Now
        </Link>
      </p>
    </div>
  );
}
