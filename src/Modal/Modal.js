import { Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import user from "../../src/components/images/user.webp";
import { AiOutlineCamera } from "react-icons/ai";
import { useFieldArray, Controller, useForm } from "react-hook-form";


const useModal = ({ id, modalName }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [employeeImage, setEmployeeImage] = useState(user)
    //   const dispatch = useDispatch();
    //   const { isLoading, isError, error, singleDept } = useSelector(
    //     (state) => state.department
    //   );

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
    const handleEmployeeImage = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        const fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setEmployeeImage(fileReader.result);
            }
        }

    }
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
                    <div className="bg-white  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 dark:bg-slate-500 dark:text-white p-3 w-72 md:w-3/4 lg:w-[600px] lg:p-8 rounded-md">
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            {/* <h1 className='text-black no-underline'>notice board part-Role-hr </h1> */}
                            <div className=' '>
                                {/* <div className="relative md:w-2/4 lg:w-48">
                                    <img className="w-full h-full rounded-full" src={employeeImage} />
                                    <input
                                        {...register("profile_photo_url", {
                                            required: {
                                                value: true,
                                                message: 'employee Image is Required'
                                            }
                                        })}
                                        onChange={(e) => handleEmployeeImage(e)}
                                        type="file" multiple={true} className="opacity-0 absolute z-50 top-0 w-full h-full"
                                    />
                                      {errors?.Name?.type === "required" && <p>This field is required</p>}
                                    <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                                       
                                    </div>
                                </div> */}
                                {/* {errors.profile_photo_url?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.profile_photo_url.message}</span>} */}
                                
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

                                        className="shadow_0 peer   border-b-2 border-gray-400 outline-1 focus:shadow-white-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
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
                                    <input {...register('file', { required: true })} type="file" name='image' />
                                    {errors?.file?.type === "required" && <p>This field is required</p>}
                                    <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center"></div>
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