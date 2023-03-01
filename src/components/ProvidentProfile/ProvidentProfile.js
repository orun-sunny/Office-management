
import { Controller, useForm } from 'react-hook-form';
import React, { useState } from "react";
import pro from "../../components/images/pro.png"


function ProvidentProfile() {
    const [picture, setPicture] = useState(null);

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();



    const onSubmit = (data) => console.log(data);
    return (

        <div>
      <div className="w-full  bg-gray-200  dark:bg-gray-800   flex  items-center  justify-center  ">
            <div className=" lg:w-full  sm:w-full md:w-full    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div className=" h-32 " >
                
                </div>
                <div className="flex  px-5  -mt-12">
                    <img className="h-32 w-32 bg-white p-2 rounded-full   " src={pro} alt="" />

                </div>
                <div className=" min-h-full">
                    <div className=" px-8 pb-4">
                        <h2 className="text-gray-800 text-3xl font-bold">Amazing</h2>
                        <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com" target="BLANK()">i am habib</a>
                        <p className="mt-4 text-gray-500 text-sm pb-4">email:here</p>
                        <p><span className="font-semibold pb-4"> phone: </span> Facebook</p>
                        <p><span className="font-semibold pb-4"> office-id: </span> Facebook</p>
                        <p><span className="font-semibold pb-4"> phone: </span> Facebook</p>
                        <p><span className="font-semibold"> office-id: </span> Facebook</p>
                    </div>
                    {/* <hr className="mt-6" /> */}
                    {/* <div className="flex  bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span className="font-semibold"> phone: </span> Facebook</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span className="font-semibold">office_id:</span> Linkedin</p>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProvidentProfile