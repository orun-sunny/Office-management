import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import user from "../../../components/images/user.webp";
import { AiOutlineCamera } from "react-icons/ai";
import { Button } from '@mui/material';


function CreateBonus() {
    const [employeeImage, setEmployeeImage] = useState(user)
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();



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

    // const ParseTextarea = ({ value = [], onChange }) => {
    //     const [text, setText] = React.useState<string>(value.join("\n"));
    // }

    // const { control, handleSubmit } = useForm<{
    //     emails: string[];
    //     number: number;
    //     ReactSelect: string;
    //   }>({
    //     defaultValues: {
    //       emails: ["react@hook-form.com", "info@example.com"],
    //       number: 0,
    //       ReactSelect: "chocolate"
    //     }
    //   });

    // const onSubmit = data => {
    //     console.log("DATA", data);

    // }


    const onSubmit = (data) => console.log(data);
    return (

        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-black no-underline'>create Bonus Policy </h1>
            <div className=''>
                <div className="relative w-28 h-28">
                    <img className="w- h-full rounded-full" src={employeeImage} />
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
                    <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                        <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                    </div>
                </div>
                {errors.profile_photo_url?.type === 'required' &&
                    <span className="label-text-alt text-xs text-red-600">{errors.profile_photo_url.message}</span>}



                {/* <div>
                    <label>Blood Group</label>
                    <select name="class"
                        className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                        {...register("class", {
                            required: {
                                message: 'Class is Required'
                            }
                        })}>

                        <option value="one">Urgent</option>
                        <option value="t
                        


                    </select>
                </div> */}












                <div>

                    <input
                        className=' border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black'
                        type="Number"
                        placeholder="Bonus_ID"
                        {...register("bonus_type_id", {
                            required: {
                                value: true,
                                message: 'this field required',
                                minLength: 8, maxLength: 11
                            }

                        })}
                    />
                    {errors.percentage?.type === 'required' &&
                        <span className="label-text-alt text-xs text-red-600">{errors.percentage.message}</span>}




                </div>

                    <div className=" py-3 flex gap-12 w-full">





                                    <div className="flex py-3">
                                        <div className="flex items-center justify-center border  px-3 dark:text-black">

                                            <select>
                                                <option value="one">+88</option>



                                            </select>
                                        </div>
                                        <input className="w-full border py-3  pl-3   p-2 focus:outline-none"
                                            type="tel"
                                            placeholder="Mobile No"
                                            {...register("contact_number", { required: true, minLength: 8, maxLength: 11 })} />
                                    </div>
                                    {errors?.contact_number?.type === "required" && <p className="pt-4 text-xs text-red-600">This field is required</p>}



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


                                        {errors?.project_count?.type === "required" && <p className="text-xs text-red-600">This field is required</p>}

                                    </div>
                                </div>



                <div>

                    <input
                        className=' border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black'
                        placeholder="Percentage"
                        {...register("percentage", {
                            required: {
                                value: true,
                                message: 'this field required',
                            }
                        })}
                    />
                </div>
                {errors.percentage?.type === 'required' &&
                    <span className="label-text-alt text-xs text-red-600">{errors.percentage.message}</span>}
            </div>
            <div className=' w-56 '>
                <input className='bg-blue-600 text-white font-semibold text-center p-3 rounded-md ' type="submit" />
                {/* <Button variant="contained">Contained</Button> */}
            </div>
        </form>
    )
}

export default CreateBonus