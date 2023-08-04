import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const Navbar = () => {
  // Side navbar
  const [openSideNav, setOpenSideNav] = useState(false);
  const [closeNav, setOpenNav] = useState(false);

  // Overlay
  const overLay = () => {
    setOpenNav(false);
  };

  return (
    <>
      <nav>
        {/* Top nav  */}
        <div className=" z-[100]  fixed blurry w-full h-[50px] sm:h-[60px] bg-black items-center flex justify-between ">
          {/* Bitcion and Logo */}
          <div className=" flex items-center gap-2 ">
            {/*Bitcion Icon  */}
            <i class="fa-brands fa-btc fa-flip text-[#ffa033] text-2xl ml-4 "></i>

            {/* Logo */}
            <h1 className=" text-2xl text-black font-bold ">
              Bit<span className=" text-[blue] ">cap</span>ion
            </h1>

            <i
              class={`fa-solid hidden sm:block text-lg ${
                openSideNav ? " fa-bars-progress" : "fa-bars-progress"
              } `}
              onClick={() => setOpenSideNav(!openSideNav)}
            ></i>

            {/* Start a plan */}
            <Link
              to={"/plans"}
              className={`${
                !openSideNav ? "hidden sm:flex" : "hidden"
              } flex  w-[130px] gap-2 p-2 bg-[#ffa033] rounded-lg shadow-lg  ml-3 items-center text-white `}
            >
              <i className=" fa-solid fa-plus fa-fade "></i> Start a Plan
            </Link>
          </div>

          {/* Display Area */}
          <div className=" flex  items-center mr-[1.5rem] gap-5  ">
            {/* Notification */}
            <i class={` text-xl fa-solid fa-bell `}></i>

            {/* Message */}
            <i class=" text-xl fa-solid fa-comment-dots"></i>

            {/* Mobile side nav bar toggle */}
            <i
              className={` text-2xl sm:hidden fa-solid ${
                closeNav ? "fa-xmark" : "fa-bars-progress"
              } `}
              onClick={() => setOpenNav((prev) => !prev)}
            ></i>
          </div>
        </div>
      </nav>

      <nav>
        {/* Side nav bar */}
        <div
          className={`sm:flex hidden fixed flex-col ${
            openSideNav ? "w-[160px] pl-2 gap-3 " : "w-[60px] flex pl-2 gap-3 "
          }  h-[100%] blurry bottom-0 pt-[5rem] z-[1]  `}
        >
          {/* Start a plan */}
          <Link
            to={"/plans"}
            className={`${
              openSideNav ? "flex" : "hidden"
            } w-[130px] gap-2 p-2 bg-[#ffa033] rounded-lg shadow-lg  flex items-center text-white `}
          >
            <i className=" fa-solid fa-plus fa-fade "></i> Start a Plan
          </Link>

          {/* Links */}

          {/* Dashboard */}
          <div className=" flex  items-center justify-start ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? " flex   p-2  text-white  rounded-lg bg-[blue] gap-3 "
                  : "flex w-[full]  p-2 rounded-lg  gap-4  "
              }
            >
              {" "}
              <MdSpaceDashboard size={22} className=" rounded-lg " />{" "}
              <span className={`${openSideNav ? "flex" : "hidden"}`}>
                Dashboard{" "}
              </span>{" "}
            </NavLink>
          </div>

          {/*Stats  */}
          <div className=" flex  items-center justify-start  ">
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive
                  ? " flex w-[full]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                  : "flex w-[full]  p-2 rounded-lg  gap-3 "
              }
            >
              {" "}
              <FaChartLine size={22} className=" rounded-md  " />{" "}
              <span className={`${openSideNav ? "flex" : "hidden"}`}>
                Stats{" "}
              </span>{" "}
            </NavLink>
          </div>

          {/* Plans */}
          <div className=" flex  items-center justify-start  ">
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                isActive
                  ? " flex w-[full]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                  : "flex w-[full]  p-2 rounded-lg  gap-3 "
              }
            >
              {" "}
              <BiSolidSpreadsheet size={22} className=" rounded-lg  " />{" "}
              <span className={`${openSideNav ? "flex" : "hidden"}`}>
                Plans{" "}
              </span>{" "}
            </NavLink>
          </div>

          {/* Deposit */}
          <div className=" flex  items-center justify-start  ">
            <NavLink
              to="/deposit"
              className={({ isActive }) =>
                isActive
                  ? " flex w-[full]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                  : "flex w-[full]  p-2 rounded-lg  gap-3 "
              }
            >
              {" "}
              <RiLuggageDepositFill size={22} className=" rounded-lg  " />{" "}
              <span className={`${openSideNav ? "flex" : "hidden"}`}>
                Finance{" "}
              </span>{" "}
            </NavLink>
          </div>

          {/* Loans */}
          <div className=" flex  items-center justify-start  ">
            <NavLink
              to="/loans"
              className={({ isActive }) =>
                isActive
                  ? " flex w-[full]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                  : "flex w-[full]  p-2 rounded-lg  gap-3 "
              }
            >
              {" "}
              <GiReceiveMoney size={22} className=" rounded-lg  " />{" "}
              <span className={`${openSideNav ? "flex" : "hidden"}`}>
                {" "}
                Loans{" "}
              </span>{" "}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Nav Bar for Mobile */}
      <nav
        className={` z-10 sm:hidden sidebar w-[200px] pl-[0.9rem] h-[100%] fixed blurry right-0 ${
          closeNav ? "flex flex-col justify-start pt-[6rem] " : "hidden"
        }`}
      >
        {/* Links */}

        {/* Dashboard */}
        <div className=" flex flex-col  ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " flex w-[180px]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                : "flex w-[full]  p-2 rounded-lg  gap-3 "
            }
          >
            {" "}
            <MdSpaceDashboard size={22} className=" rounded-md  " />{" "}
            <span className={``}>Dashboard </span>{" "}
          </NavLink>
        </div>

        {/*Stats  */}
        <div className=" flex flex-col  ">
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? " flex w-[180px]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                : "flex w-[full]  p-2 rounded-lg  gap-3 "
            }
          >
            {" "}
            <FaChartLine size={22} className=" rounded-md  " />{" "}
            <span className={``}>Stats </span>{" "}
          </NavLink>
        </div>

        {/* Plans */}
        <div className=" flex  ">
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              isActive
                ? " flex w-[180px]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                : "flex w-[full]  p-2 rounded-lg  gap-3 "
            }
          >
            {" "}
            <BiSolidSpreadsheet size={22} className=" rounded-md  " />{" "}
            <span className={``}>Plans </span>{" "}
          </NavLink>
        </div>

        {/* Deposit */}
        <div className=" flex  items-center justify-start  ">
          <NavLink
            to="/deposit"
            className={({ isActive }) =>
              isActive
                ? " flex w-[180px]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                : "flex w-[full]  p-2 rounded-lg  gap-3 "
            }
          >
            {" "}
            <RiLuggageDepositFill size={22} className=" rounded-md  " />{" "}
            <span className={``}>Finace </span>{" "}
          </NavLink>
        </div>

        {/* Loans */}
        <div className=" flex  items-center justify-start  ">
          <NavLink
            to="/loans"
            className={({ isActive }) =>
              isActive
                ? " flex w-[180px]  p-2  text-white  rounded-lg bg-[blue] gap-4 "
                : "flex w-[full]  p-2 rounded-lg  gap-3 "
            }
          >
            {" "}
            <GiReceiveMoney size={22} className=" rounded-md  " />{" "}
            <span className={``}>Loans </span>{" "}
          </NavLink>
        </div>
      </nav>

      {/* OverLay */}
      <section
        className={` ${
          closeNav ? "block" : "hidden"
        } fixed w-full h-[100%] bg-none `}
        onPointerEnter={overLay}
      ></section>
    </>
  );
};

export default Navbar;
