import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(["access_token"]); // Import useCookies from 'react-cookie'
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setCookie("access_token", response.data.token); // Set cookie using setCookie function
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="  pt-[15%] mt-[8rem] sm:mt-[2rem] text-center flex justify-center items-center  ">
        <form className=" flex  flex-col  gap-3 " onSubmit={onSubmit}>
          <h1 className=" text-2xl font-semibold "> Login </h1>
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
            Login{" "}
          </button>

          <div className="text-left">
            Don't have an account?{" "}
            <Link to={"/register"} className=" text-[blue] ">
              {" "}
              Sign Up{" "}
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
