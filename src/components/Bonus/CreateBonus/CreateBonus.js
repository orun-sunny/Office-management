import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';

function CreateBonus() {

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => console.log(data);
    return (

        <form className="w-96 p-4 sm:w-full md:w-full lg:w-full justify-center" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="border py-3 mt-4 pl-3 w-full  rounded-md focus:outline-none"
                type="number"
                min={1}
                placeholder="Percentage"
             
                {...register("percentage", {
                    required: true,
                    message: "notice headline is Required",
                    type: "number",
                })}
            />
            {errors?.percentage?.type === "required" && (
                <p className="text-red-500 mt-1 ">This field is required</p>
            )}

      



            <select
                name="class"
                className="border w-full bg-white rounded-md py-2 mt-3 relative my-3  text-gray-900 placeholder-transparent focus:outline-none"
                placeholder="Bonus_type_id"
                {...register("bonus_type_id")}
            >
                <option value={1}>General</option>
                <option value={2}>Urgent</option>
            </select>
            {/* {errors?.notice_type_id.message && (
            <p>This field is required</p>
          )} */}
     

            <input
                className="bg-blue-600 text-white font-semibold text-center p-3 rounded-md "
                type="submit"
            />
        </form>
    )
}

export default CreateBonus