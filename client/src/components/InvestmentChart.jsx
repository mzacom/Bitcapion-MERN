import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const InvestmentLineChart = () => {
  const [investmentData, setInvestmentData] = useState([
    { x: "Day 0", y: 100 },
  ]);
  const [investmentStarted, setInvestmentStarted] = useState(false);
  const targetAmount = 1000; // Target investment amount ($1000)
  const daysToReachTarget = 10;
  const initialDeposit = 100; // Initial deposit amount ($100)

  useEffect(() => {
    const investmentState = JSON.parse(localStorage.getItem("investmentState"));

    if (investmentState && investmentState.investmentStarted) {
      setInvestmentStarted(true);
      setInvestmentData(investmentState.investmentData);
    }
  }, []);

  useEffect(() => {
    const handleInvestment = () => {
      if (investmentStarted) {
        const dailyIncrement =
          (targetAmount - initialDeposit) / daysToReachTarget; // Increment amount per day
        let currentInvestment =
          investmentData.length > 0
            ? investmentData[investmentData.length - 1].y
            : initialDeposit;
        const data =
          investmentData.length > 0
            ? [...investmentData]
            : [{ x: "Day 0", y: initialDeposit }];

        const interval = setInterval(() => {
          if (currentInvestment < targetAmount) {
            currentInvestment = Math.min(
              currentInvestment + dailyIncrement,
              targetAmount
            );
            data.push({ x: `Day ${data.length}`, y: currentInvestment });
            setInvestmentData([...data]);
          } else {
            clearInterval(interval);
          }
        }, 86400000); // 86400000 milliseconds = 1 day

        return () => clearInterval(interval);
      }
    };

    handleInvestment();
  }, [
    investmentStarted,
    initialDeposit,
    targetAmount,
    daysToReachTarget,
    investmentData,
  ]);

  useEffect(() => {
    const investmentState = { investmentStarted, investmentData };
    localStorage.setItem("investmentState", JSON.stringify(investmentState));
  }, [investmentStarted, investmentData]);

  const handleStartInvestment = () => {
    setInvestmentStarted(true);
  };

  const handleStopInvestment = () => {
    setInvestmentStarted(false);
  };

  const chartOptions = {
    chart: {
      id: "investment-chart",
      animations: {
        enabled: true,
        easing: "easeinout",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value}`, // Format the y-axis labels as currency
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  };

  const chartSeries = [
    {
      name: "Investment Balance",
      data: investmentData,
    },
  ];

  return (
    <>
   
    <div className=" blurry rounded-lg w-[50%] relative p-2 shadow-lg ">
      <h2>Investment Line Chart</h2>
     
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={400}
      />
     
    </div>

    
        {/* Balance */}
        <div className=" flex flex-col justify-between " >
          {/* Current balance */}
        <div className=" w-[400px] bg-[#ffa033] h-[150px] rounded-2xl shadow-lg  " >
          
        <div>
        <strong>Current Investment Balance:</strong> $
        {investmentData.length > 0
          ? investmentData[investmentData.length - 1].y
          : 0}
      </div>

      {investmentStarted ? (
        <button onClick={handleStopInvestment}>Stop Investment</button>
      ) : (
        <button onClick={handleStartInvestment}>Start Investment</button>
      )}
 
        </div>

        <div className=" w-[400px] bg-[blue] h-[300px] rounded-2xl shadow-lg  " >
 
        </div>

        </div>
    </>
  );
};

export default InvestmentLineChart;

{
  /* <section className=" blurry rounded-lg w-[50%] relative p-2 shadow-lg "></section> */
}
