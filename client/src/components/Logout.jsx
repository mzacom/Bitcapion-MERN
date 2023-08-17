import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth")
  };

  return (
    <>
    <div className=" gap-3 flex items-center " >

   
      {!cookies.access_token ? (
        <Link to="/auth"> Login/Register </Link>
      ) : (
        <button onClick={logout} > Logout </button> 
      )}
      
      </div>
    </>
  );
};

export default Logout;
