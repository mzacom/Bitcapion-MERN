import React from "react";
import { Navbar } from "../../components";
import InvestmentChart from "../../components/InvestmentChart";

const Stats = () => {
  return (
    <>
    {/* Navbar */}
      <Navbar />
      {/* overview */}
      <h1 className="pt-[5rem] font-semibold text-2xl text-center mb-5  " >
        Overview
       </h1>
      <section className=" flex flex-col md:flex md:flex-row justify-center pl-[rem] gap-5 " >
        {/* Charts */}
        <InvestmentChart/>

      </section>
      
    









      {/*  */}
    </>
  );
};

export default Stats;
