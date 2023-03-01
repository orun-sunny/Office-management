
import { Controller, useForm } from 'react-hook-form';
import React, { useState } from "react";


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

        <div className="w-full p-4 sm:w-full md:w-full lg:w-full justify-center" >



            <h4 className='font-bold text-center'>  Provident Profile</h4>




            <div className=" w-28 h-28 mb-2">
                <img className="w-full h-full " src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-tilted-double-love-heart-clipart-png-image_5565492.jpg" />


            </div>

            <div className="w-full h-9 bg-gray-100 mt-4 bottom-0 right-2  justify-center items-center">
                <p>Hiiiiiii use me as a name</p>

            </div>

            <div className='w-full bg-gray-100 rounded-full mt-4  bottom-0 right-2 '>
                <p>Phone Number</p>

            </div>

            <div className='w-full bg-gray-100 rounded-full mt-4  bottom-0 right-2 '>
                <p>Office Id</p>

            </div>


            {/* Extra */}



            {/* <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5 w-full mb-3">

                <div>
                    <div className="flex">
                        <div className="flex items-center justify-center border rounded-l-md px-3 dark:text-black">
                            <select>
                                <option value="one">+88</option>
                            </select>
                        </div>
                        <div

                            className="w-full border py-3 pl-3 rounded-r-md p-2 focus:outline-none"
                            type="number"
                            placeholder="Contact Number"
                            {...register("contact_number", {
                                required: true,
                                minLength: 8,
                                maxLength: 11,
                            })}
                        />
                    </div>
                    {errors?.contact_number?.type === "required" && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>

                <div>
                    <input
                        className="border py-3 w-48 pl-3 rounded-md focus:outline-none"
                        type="number"
                        min={1}
                        defaultValue={1}
                        placeholder="Project Count"
                        {...register(
                            "project_count",

                            {
                                required: true,
                                pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message: "input will number",
                                },
                            }
                        )}
                    />



                    {errors?.project_count?.type === "required" && (
                        <p className="text-red-500">This field is required</p>
                    )}
                </div>





            </div> */}


















            {/* 
            <input
                className="bg-blue-600 text-white font-semibold text-center p-3 rounded-md "
                type="submit"
            /> */}


            <div className="flex">
                <div
                    name=" grey window"
                    className="h-screen  "
                ><h4 className='font-bold border'>Hello</h4></div>
            </div>
        </div>
    )
}

export default ProvidentProfile