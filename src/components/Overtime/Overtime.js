import { Modal } from "@mui/material";

import React, {  useState } from "react";

import {  useForm } from "react-hook-form";


const Overtime = ({ }) => {
    const [modalOpen, setModalOpen] = useState(false);

    // const [imgData, setImgData] = useState(null);


    const {
        register,

        handleSubmit,
        formState: { errors },

    } = useForm();

    const handleOpen = () => {
        setModalOpen(!modalOpen);
    };

    const onSubmit = (data) => console.log(data);




    return (
        <div className="bg-white absolute dark:text-white p-3 lg:p-8 rounded-md  justify-center">
            <h1>Hello</h1>
            <div className="justify-center">
                <button
                    className="p-2 rounded text-white bg-black font-semibold"
                    onClick={() => {
                        handleOpen();

                    }}
                >
                    Update
                </button>
                <Modal
                    open={modalOpen}
                    onClose={handleOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="bg-white  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 dark:bg-white-500 dark:text-white p-3 w-72 md:w-3/4 lg:w-[600px] lg:p-8 rounded-md">
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-black no-underline text-center'>office hour </h4>

                            <div className=' '>





                                <div className="">
                                <label className="mb-2 font-semibold text-gray-700">Start-Time</label>

                                    <input
                                        type="time" className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none focus:outline-none py-4 mb-3"

                                        placeholder="start-time"
                                        {...register("startTime", {
                                            required: true,
                                            message: 'overtime required',

                                        })}
                                    />
                                    {errors?.startTime?.type === "required" && <p className="text-red-500">This field is required</p>}
                                </div>

                       


                                <div className="">
                                <label className="mb-2 font-semibold text-gray-700">Delay-Time</label>

                                    <input
                                        type="time" className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none focus:outline-none py-4 mb-3"

                                        placeholder="start_delay"
                                        {...register("start_delay", {
                                            required: true,
                                            message: 'overtime required',

                                        })}
                                    />
                                    {errors?.start_delay?.type === "required" && <p className="text-red-500">This field is required</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="mb-2 font-semibold text-gray-700">End-Time</label>

                                    <input
                                        type="time" className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none focus:outline-none py-4 mb-3"

                                        placeholder="End_time"
                                        {...register("End_time", {
                                            required: true,
                                            message: 'End_time required',

                                        })}
                                    />
                                    {errors?.End_time?.type === "required" && <p className="text-red-500">This field is required</p>}
                                </div>
                          



                            </div>

                            <div className=' w-56 '>
                                <input className='bg-blue-600 text-white font-semibold text-center p-3 rounded-md ' type="submit" />
                   
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Overtime;