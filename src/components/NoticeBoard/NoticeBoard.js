import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import user from "../../components/images/user.webp";
import { AiOutlineCamera } from "react-icons/ai";

    
function NoticeBoard() {
    const [employeeImage, setEmployeeImage] = useState(user)
    const {
        register,
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

    // const onSubmit = data => {
    //     console.log("DATA", data);

    // }


    const onSubmit = (data) => console.log(data);
    return (
        <form className='w-96' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 gap-2'>
            <div className="relative w-28 h-28">
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
                        <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                            <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                        </div>
                    </div>
                    {errors.profile_photo_url?.type === 'required' &&
                        <span className="label-text-alt text-xs text-red-600">{errors.profile_photo_url.message}</span>}
            <div>
                    <label>Blood Group</label>
                    <select name="class"
                        className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                        {...register("class", {
                            required: {
                                message: 'Class is Required'
                            }
                        })}>

                        <option value="one">Urgent</option>
                        <option value="two">General</option>
                       

                    </select>
                </div>
                <div>
                    <label>Notice HeadLine</label>
                    <input
                    className='focus:outline-none'
                        {...register("Address", {
                            required: true,
                            type:"text"
                        })}
                    />
                </div>

             
                <div>
                    <label>Notice Details</label>
                    <input
                    className='h-24 focus:outline-none'
                        {...register("Present-Address", {
                            required: true,
                            type:"text",
                        })}
                    />
                </div>
                <div>
                    <label>Permanent Address</label>
                    <input
                    className='focus:outline-none'
                        {...register("Permanent-Address", {
                            required: true,
                        })}
                    />
                </div>
            </div>
            <div className=' w-56  items-center'>
                <input className='w-56 ' type="submit" />
            </div>
        </form>
    )
}

export default NoticeBoard