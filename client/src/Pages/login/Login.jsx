import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>

<section className="  pt-[15%] text-center flex justify-center items-center  ">
        <form className=" flex  flex-col  gap-3 ">
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

          <div className="text-left" >
            Don't have an account? <Link to={"/register"} className=" text-[blue] "  > Sign Up </Link>
          </div>
        </form>
      </section>
    
    
    
    </>
  )
}

export default Login