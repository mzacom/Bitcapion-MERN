import React from 'react'
import {BiSolidSpreadsheet} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MainDashboard = () => {
  return (
    <>
    {/* Dashboard */}
    <section className='flex flex-col items-center justify-center pt-[4rem] ' >

      {/* Head text */}
      <div className=' text-2xl flex  gap-2 pt-4  items-center font-semibold ' >   
          <BiSolidSpreadsheet size={24} className=' rounded-lg '   /> The best investment plan

      </div> 

      <p className='text-center text-[15px] font-[400] text-slate-600  ' >
            Make your finance move with Bitcapion

      </p>

      {/* Plans */}
      {/* Container */}
      <div className=' flex flex-col sm:flex-row justify-center sm:gap-[40px]  w-full  ' >

        {/* Item 1 (5%) */}
        <div className=' w-[310px]  h-[350px] rounded-lg sm:ml-0 sm:mr-0   bg-white ml-auto mr-auto mt-[2rem] bod ' >

          {/* Percent */}
          <p className=' p-3 text-xl mt-5 ml-3 ' >
            <span className=' text-[blue] text-[50px] font-semibold '  >
             5%
            </span> Daily

            <br/><br/>
            <span className=' text-3xl font-medium '  >
              10 Days
            </span>

            <br/><br/>

            <span  className=' text-slate-600 ' >
            Minimam Invest : $100

            <br/>
            Maximam Invest : $1000

            <br/>
            Avarage Monthly : 50%

            </span>

            <br/><br/>
            
            <div className=' bg-[blue] text-white rounded-lg w-[150px] text-center p-3   ' >
              <Link to={'/deposit'} >
               Deposit
              </Link>
            </div>

          </p>
            
        </div>
      


        {/* Item 2 (15%) */}
        <div className=' w-[310px]  h-[350px] rounded-lg  bg-white sm:ml-0 sm:mr-0  ml-auto mr-auto mt-[2rem] bod ' >

          {/* Percent */}
          <p className=' p-3 text-xl mt-5 ml-3 ' >
            <span className=' text-[blue] text-[50px] font-semibold '  >
             15%
            </span> Daily

            <br/><br/>
            <span className=' text-3xl font-medium '  >
              30 Days
            </span>

            <br/><br/>

            <span  className=' text-slate-600 ' >
            Minimam Invest : $1000

            <br/>
            Maximam Invest : $10000

            <br/>
            Avarage Monthly : 100%

            </span>

            <br/><br/>
            
            <div className=' bg-[blue] text-white rounded-lg w-[150px] text-center p-3   ' >
              <Link to={'/deposit'} >
               Deposit
              </Link>
            </div>

          </p>
            
        </div>
      


        {/* Item 3 (50%) */}
        <div className=' w-[310px]  h-[350px] rounded-lg  sm:ml-0 sm:mr-0  bg-white ml-auto mr-auto mt-[2rem] bod ' >

          {/* Percent */}
          <p className=' p-3 text-xl mt-5 ml-3 ' >
            <span className=' text-[blue] text-[50px] font-semibold '  >
             50%
            </span> Daily

            <br/><br/>
            <span className=' text-3xl font-medium '  >
              45 Days
            </span>

            <br/><br/>

            <span  className=' text-slate-600 ' >
            Minimam Invest : $1000

            <br/>
            Maximam Invest : $50000

            <br/>
            Avarage Monthly : 200%

            </span>

            <br/><br/>
            
            <div className=' bg-[blue] text-white rounded-lg w-[150px] text-center p-3   ' >
              <Link to={'/deposit'} >
               Deposit
              </Link>
            </div>

          </p>
            
        </div>

      
      </div>

      {/* Plans 2 */}
      {/* Container */}
      <div className=' flex flex-col sm:flex-row justify-center sm:gap-[40px] mb-[4rem] w-full  ' >

        {/* Item 4 (100%) */}
        <div className=' w-[310px]  h-[350px] rounded-lg  sm:ml-0 sm:mr-0  bg-white ml-auto mr-auto mt-[2rem] bod ' >

          {/* Percent */}
          <p className=' p-3 text-xl mt-5 ml-3 ' >
             <span className=' text-[blue] text-[50px] font-semibold '  >
               100%
             </span> Daily
            
             <br/><br/>
             <span className=' text-3xl font-medium '  >
               60 Days
             </span>
            
             <br/><br/>
            
             <span  className=' text-slate-600 ' >
               Minimam Invest : $1000
            
             <br/>
               Maximam Invest : $50000
            
             <br/>
               Avarage Monthly : 250%
            
             </span>
            
             <br/><br/>
             
             <div className=' bg-[blue] text-white rounded-lg w-[150px] text-center p-3   ' >
               <Link to={'/deposit'} >
                Deposit
               </Link>
             </div>

          </p>
  
        </div>


      </div>


    </section>
    </>
  )
}

export default MainDashboard