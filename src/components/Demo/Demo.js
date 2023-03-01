import React, { useEffect, useState } from 'react'
import axios from 'axios';
import pro from "../../components/images/pro.png"

function Demo() {

  return (
    <>
      <div className="w-full  bg-gray-200  dark:bg-gray-800   flex  items-center  justify-center  ">
        <div className="container lg:w-full  sm:w-full md:w-full    bg-white  shadow-lg    transform   duration-200 easy-in-out">
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
        </div>
      </div>


      <hr />


      <div className="flex items-center justify-center pb-4">
        <div className="bg-gray-200  w-full mt-10 rounded-lg">
          <div className="flex items-center justify-center pt-10 flex-col">
            <img src={pro} className="rounded-full w-32" />
            <h1 className="text-gray-800 font-semibold text-xl mt-5">Habib Bhaiii</h1>
            {/* <h1 className="text-gray-500 text-sm">Seoul, South Korea</h> */}
            <h1 className="text-gray-500 text-sm p-4 text-center">
            office-id:12345
            </h1>
            <h1 className="text-gray-500 text-sm p-4 text-center">
            Phone:12345
            </h1>
          </div>
          <div className="flex justify-between p-4">
         
            {/* <div>
              <button className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">Renew</button>
            </div> */}
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