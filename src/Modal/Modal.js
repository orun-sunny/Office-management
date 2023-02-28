import { Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import user from "../../src/components/images/user.webp";
import { AiOutlineCamera } from "react-icons/ai";
import { useFieldArray, Controller, useForm } from "react-hook-form";


const useModal = ({ id, modalName }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);


    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const handleOpen = () => {
        setModalOpen(!modalOpen);
    };
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
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
                            <h4 className='text-black no-underline'>notice board part-Role-hr </h4>

                            <div className=' '>





                                <div className="">

                                    <input
                                        className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none"
                                        placeholder="Notice-Headline"
                                        {...register("notice", {
                                            required: true,
                                            message: 'notice headline is Required',
                                            type: "text"
                                        })}
                                    />
                                    {errors?.notice?.type === "required" && <p>This field is required</p>}
                                </div>

                                {/* <input ref={register} type="file" name="picture" /> */}


                                <div>
                                    <textarea
                                        placeholder="Notice-details"
                                        className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black"{...register("Notice",
                                            { required: true, max: 15, min: 5, maxLength: 100 })} />
                                    {errors?.Notice?.type === "required" && <p>This field is required</p>}
                                </div>
                                <div className="mb-4">
                                    {/* <label>Blood Group</label> */}
                                    <select name="class"
                                        className="border w-full bg-white rounded-md p-2  text-gray-900 placeholder-transparent focus:outline-none"
                                        placeholder="Blood Group"

                                        {...register("class", {

                                            required: {
                                                message: 'Class is Required'
                                            }
                                        })}>
                                        {errors?.class?.type === "required" && <p>This field is required</p>}

                                        <option value="one">Urgent</option>
                                        <option value="two">General</option>


                                    </select>
                                </div>
                                <div className="mb-2">
                                    <div className="register_profile_image w-24">
                                        <input id="profilePic " type="file" onChange={onChangePicture} />
                                    </div>
                                    <div className="previewProfilePic w-24">
                                        <img className="playerProfilePic_home_tile" src={imgData} />
                                    </div>
                                    {/* <input {...register('file', { required: true })} type="file" name='image' />
                                    {errors?.file?.type === "required" && <p>This field is required</p>} */}
                                    {/* <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                                        




                                    </div> */}



                                </div>
                            </div>
                            <div className=' w-56 '>
                                <input className='bg-blue-600 text-white font-semibold text-center p-3 rounded-md ' type="submit" />
                                {/* <Button variant="contained">Contained</Button> */}
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default useModal;