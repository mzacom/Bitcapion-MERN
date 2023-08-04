import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      console.log("Registered");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className=" pt-[15%] text-center flex justify-center items-center  ">
        <form className=" flex  flex-col  gap-3 " onSubmit={onSubmit}>
          <h1 className=" text-2xl font-semibold "> Register </h1>
          <div>
            <label htmlFor="username"> </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
          </div>

          <div>
            <label htmlFor="password"> </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-[blue] p-[10px] rounded-[10px] text-white "
          >
            {" "}
            Register{" "}
          </button>

          <div className="text-left">
            Have an account?{" "}
            <Link to={"/login"} className=" text-[blue] ">
              {" "}
              Login here{" "}
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
