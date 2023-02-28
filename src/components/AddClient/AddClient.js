import { Modal } from "@mui/material";
import { FaPhone } from "react-icons/fa";

import React, { useState } from "react";
import user from "../../components/images/user.webp";
import { AiOutlineCamera } from "react-icons/ai";
import { useForm } from "react-hook-form";



const AddClient = ({ id, modalName }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [picture, setPicture] = useState(null);
    const [clientImg, setClientImg] = useState(user);


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
                setClientImg(reader.result);
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
                    AddClient
                </button>
                <Modal
                    open={modalOpen}
                    onClose={handleOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="bg-white  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 dark:bg-white-500 dark:text-white p-3 w-72 md:w-3/4 lg:w-[600px] lg:p-8 rounded-md">
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-black no-underline'>Add new Client part</h4>

                            <div className=' '>
                                <div className="relative w-28 h-28 mb-2">
                                    <img className="w-full h-full rounded-full " src={clientImg} />
                                    <input
                                        {...register("profile_photo_url", {
                                            required: {
                                                value: true,
                                                message: 'employee Image is Required'
                                            }
                                        })}
                                        onChange={(e) => onChangePicture(e)}
                                        type="file" multiple={true} className="opacity-0 absolute z-50 top-0 w-full h-full"
                                    />
                                    <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                                        <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                                    </div>
                                </div>
                                {errors.profile_photo_url?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.profile_photo_url.message}</span>}





                                <div className="">

                                    <input
                                        className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none"
                                        placeholder="Name"
                                        {...register("name", {
                                            required: true,
                                            message: 'Name is Required',
                                            type: "text"
                                        })}
                                    />
                                    {errors?.name?.type === "required" && <p>This field is required</p>}
                                </div>





                                <div>
                                    <textarea
                                        placeholder="Address"
                                        className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black"{...register("address",
                                            { required: true, max: 15, min: 5, maxLength: 100 })} />
                                    {errors?.address?.type === "required" && <p>This field is required</p>}
                                </div>
                                <div className="mb-4">
                                    {/* <label>Blood Group</label> */}
                                    <input className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>
                                <div className=" py-3 flex gap-12 w-full">


                                    {/* <input className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black" type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} /> */}


                                    <div className="flex py-3">
                                        <div className="flex items-center justify-center border  px-3 dark:text-black"> <select>      <option value="one">+88</option>



                                        </select></div>
                                        <input className="w-full border py-3  pl-3   p-2 focus:outline-none" type="number" placeholder="Mobile No" {...register("contact_number", { required: true, minLength: 8, maxLength: 11 })} />
                                    </div>
                                    {errors?.contact_number?.type === "required" && <p className="pt-4">This field is required</p>}



                                    <div>

                                        <input className="border py-3 w-full pl-3 mt-2 rounded-md focus:outline-none"
                                            type="number"
                                            min={1}
                                            defaultValue={1}
                                            placeholder="project_count" {...register("project_count",


                                                {
                                                    required: true,
                                                    pattern: {
                                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                                        message: "input will number"

                                                    },


                                                })} />


                                        {errors?.project_count?.type === "required" && <p>This field is required</p>}

                                    </div>
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

export default AddClient;