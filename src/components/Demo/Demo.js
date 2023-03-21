import React, { useEffect, useState } from 'react'
import axios from 'axios';
import pro from "../../components/images/aaDone.jpg"
import { Button } from '@mui/material';

function Demo() {

  return (
    <>
      <div className="w-full  bg-gray-200  dark:bg-gray-800 m-4  grid items-center  justify-items-center  ">
        {/* <div className="container lg:w-full  sm:w-full md:w-full    bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div className=" h-32 overflow-hidden" >
            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
          </div>
          <div className="flex  px-5  -mt-12">
            <img className="h-32 w-32 bg-white p-2 rounded-full   " src={pro} alt="" />

          </div>
          <div className="h-full ">
            <div className=" px-4">
              <h2 className="text-gray-800 text-3xl font-bold">Amazing</h2>
              <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com" target="BLANK()">i am habib</a>
              <p className="mt-2 text-gray-500 text-sm">email:here</p>
              <p><span className="font-semibold"> phone: </span> Facebook</p>
              <p><span className="font-semibold"> office-id: </span> Facebook</p>
            </div>
            <hr className="mt-6" />

          </div>
        </div> */}
      </div>


      <hr />

      {/* 38  items-center justify-center */}
      <div className="mt-8 ">
        <div className="bg-gray-200  md:w-full lg:w-full mt-8 rounded-lg">
          <div className="grid lg:justify-items-center  md:grid-cols-2 xs:grid-cols-1 gap-8 md:justify-items-start xs:justify-items-start lg:grid-cols-2 ">
            <div className="m-4 ">
              <img src={pro} className=" lg:w-full  rounded-lg" />
            </div>
            <div></div>

{/* 
            <div className='  mt-4   '>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Name: </p>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Office_id: </p>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Phone-Number: </p>



            </div> */}
            <div className=" mt-4 ">
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Name: </p>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Office-id</p>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Phone_number</p>
            </div>


          </div>

          <div className="flex justify-center">
            <hr className='border-dotted border-2 w-72  border-neutral-300' />
          </div>






          <div className="grid  lg:grid-cols-2  gap-4 mt-2 lg:justify-items-center md:justify-items-center xs:justify-items-start  md:grid-cols-2 xs:grid-cols-1">

            <div className=" mt-4 ">
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Employee Amount</p>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>Total Amount</p>
              <p className='text-gray-800 font-semibold text-xl mb-4 '>withdrawable</p>
            </div>


            <div className='mt-4  '>
              <div>
                <p className='text-gray-800 font-semibold text-xl mb-4 '>Eligibility</p>
                <p className='text-gray-800 font-semibold text-xl mb-4 '>Company amount</p>
                <p className='text-gray-800 font-semibold text-xl mb-4 '>Opening date</p>
              </div>



            </div>
          </div>
















          <div className="flex items-center justify-center mt-3 mb-8 flex-col">
            <h1 className="text-xs text-gray-500">Get Connected</h1>

          </div>
        </div>

      </div>


    </>
  )
}

export default Demo