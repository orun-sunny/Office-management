import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

// import './AdmissionForm.css'
import user from "../../components/images/user.webp";
import { AiOutlineCamera } from "react-icons/ai";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchOrders} from "../../../Slices/exSlice";
const AdmissionForm = () => {
    const [employeeImage, setEmployeeImage] = useState(user)
    const [fatherImage, setFatherImage] = useState(user)
    const [motherImage, setMotherImage] = useState(user)
    const [localGuardianImage, setLocalGuardianImage] = useState(user)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const ex = useSelector((state) => state.orders);
    // console.log(ex.orders);

    // const dispatch = useDispatch();

    // useEffect(() =>{
    //     dispatch(fetchOrders());

    // }, [dispatch])


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

    const onSubmit = data => {
        console.log("DATA", data);

    }



    return (

        <div class="w-full xl:w-10/12 2xl:w-3/4 mx-auto">
            <p className="text-2xl text-center font-semibold text-gray-700">Personal Information Form</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="bg-white rounded-lg mx-auto overflow-hidden shadow-sm shadow-gray-400 p-5 mb-5">
                    <p className="font-semibold text-lg text-teal-600 my-2">Employee Information</p>
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

                    <div className="flex items-center w-full gap-8">
                        <div class="my-4 relative w-full py-2">
                            <input type="text" name="name"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-12 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Employee Name"  {...register("employee_name", {
                                    required: {
                                        value: true,
                                        message: 'employee Name is Required'
                                    }
                                })} />
                            <label htmlFor="employee_name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Employe Name</label>
                            {errors.employee_name?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.employee_name.message}</span>}
                        </div>

                        {/* <div class="relative w-full my-6">
                            <input type="text" name="name"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Employee Name"  {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Employee Name is Required'
                                    }
                                })} />
                            <label htmlFor="student_name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Employee Name</label>
                            {errors.name?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.name.message}</span>}
                        </div> */}

                        <div class="my-4 relative w-full py-2">
                            <input type="email" name="email"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-12 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Email"  {...register("employee_email", {
                                    required: {
                                        message: 'Employee Email is Required'
                                    }
                                })} />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Employee Email</label>

                            {errors.employee_email?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.employee_email.message}</span>}
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-8">
                        <div class="relative w-full py-2">
                            <input type="id" name="name"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-12 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Student Name"  {...register("office-id", {
                                    required: {
                                        value: true,
                                        message: 'Id is Required'
                                    }
                                })} />
                            <label htmlFor="office_id" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Office ID</label>
                            {errors.office_id?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.office_id.message}</span>}
                        </div>

                        <div class="my-8 relative w-full">
                            <input type="number" name="age"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-12 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Email"  {...register("age", {
                                    required: {
                                        value: true,
                                        message: 'Age is Required'
                                    }
                                })} />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Age</label>

                            {errors.age?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.age.message}</span>}
                        </div>
                    </div>

                    <div className="flex items-center w-full gap-8">
                        <div class="my-6 relative w-full">
                            <select name="gender"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                {...register("gender", {
                                    required: {
                                        message: 'Gender is Required'
                                    }
                                })}>

                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>

                            </select>

                            <label htmlFor="Birth_Date" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Gender</label>
                            {errors.gender?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.gender.message}</span>}
                        </div>

                        <div class="my-6 relative w-full">
                            <select name="religion"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                {...register("religion", {
                                    required: {
                                        message: 'Religion is Required'
                                    }
                                })}>

                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Christians">Christians</option>
                                <option value="Buddhists">Buddhists</option>
                                <option value="others">Others</option>

                            </select>
                            <label htmlFor="religion" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Religion</label>

                            {errors.religion?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.religion.message}</span>}
                        </div>

                        <div class="my-6 relative w-full">
                            <input type="text"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Nationality"  {...register("nationality", {
                                    required: {
                                        value: true,
                                        message: 'Nationality is Required'
                                    }
                                })} />
                            <label htmlFor="nationality" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nationality</label>

                            {errors.nationality?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.nationality.message}</span>}
                        </div>
                    </div>

                    <div className="flex items-center w-full gap-8">
                        <div class="my-6 relative w-full">
                            <input type="text"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Student Name"  {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })} />
                            <label htmlFor="address" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Address</label>
                            {errors.address?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.address.message}</span>}
                        </div>

                        <div class="my-6 relative w-full">
                            <input type="number" name="age"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                placeholder="Phone Number"  {...register("emergency_phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })} />
                            <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Emergency Phone Number</label>

                            {errors.emergency_phone?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.emergency_phone.message}</span>}
                        </div>
                    </div>

                    <div className="flex items-center w-full gap-8">
                        <div class="my-6 relative w-full">
                            <select name="branch"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                {...register("branch", {
                                    required: {
                                        message: 'Branch is Required'
                                    }
                                })}>

                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>

                            <label htmlFor="branch" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Branch</label>
                            {errors.branch?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.branch.message}</span>}
                        </div>

                        <div class="my-6 relative w-full">
                            <select name="class"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                {...register("class", {
                                    required: {
                                        message: 'Class is Required'
                                    }
                                })}>

                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                                <option value="five">Five</option>

                            </select>
                            <label htmlFor="class" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Class</label>

                            {errors.class?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.class.message}</span>}
                        </div>

                        <div class="my-6 relative w-full">
                            <select name="section"
                                className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                {...register("section", {
                                    required: {
                                        message: 'Section is Required'
                                    }
                                })}>

                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                                <option value="d">D</option>


                            </select>
                            <label htmlFor="section" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Section</label>

                            {errors.section?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.section.message}</span>}
                        </div>

                    </div>
                    <div>

                    </div>





                </div>

                <div className="bg-white rounded-lg mx-auto overflow-hidden shadow-sm shadow-gray-400 p-5 my-8">
                    <p className="font-semibold text-lg text-teal-600 my-2">Parents Information</p>

                    <div className="flex items-center">
                        <div className="w-full pr-4">
                            <p className="text-md text-gray-600">Father:</p>
                            {/* <div className="relative w-28 h-28">
                                <img className="w-full h-full rounded-full" src={fatherImage} />
                                <input
                                    {...register("father_photo_url", {
                                        required: {
                                            value: true,
                                            message: 'Father Image is Required'
                                        }
                                    })}
                                    onChange={(e) => handleFatherImage(e)}
                                    type="file" multiple={true} className="opacity-0 absolute z-50 top-0 w-full h-full"
                                />
                                <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                                    <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                                </div>
                            </div> */}

                            {errors.father_photo_url?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.father_photo_url.message}</span>}


                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="name"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Student Name"  {...register("father_name", {
                                        required: {
                                            value: true,
                                            message: 'Father Name is Required'
                                        }
                                    })} />
                                <label htmlFor="father_name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Father Name</label>
                                {errors.father_name?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.father_name.message}</span>}
                            </div>

                            <div class="my-4 relative w-full py-2">
                                <input type="email" name="email"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Email"  {...register("father_email", {
                                        required: {
                                            message: 'Father Email is Required'
                                        }
                                    })} />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Father Email</label>

                                {errors.father_email?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.father_email.message}</span>}
                            </div>

                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="nid"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Father NID"  {...register("father_nid", {
                                        required: {
                                            value: true,
                                            message: 'Father NID is Required'
                                        }
                                    })} />
                                <label htmlFor="father_nid" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Father NID</label>
                                {errors.father_nid?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.father_nid.message}</span>}
                            </div>
                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="name"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Father phone"  {...register("father_phone", {
                                        required: {
                                            value: true,
                                            message: 'Father Phone is Required'
                                        }
                                    })} />
                                <label htmlFor="father_phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Father Phone</label>
                                {errors.father_phone?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.father_phone.message}</span>}
                            </div>
                        </div>



                        <div className="w-full border-l-2 pl-4">
                            <p className="text-gray-600 text-md">Mother:</p>
                            {/* <div className="relative w-28 h-28">
                                <img className="w-full h-full rounded-full" src={motherImage} />
                                <input
                                    {...register("mother_photo_url", {
                                        required: {
                                            value: true,
                                            message: 'Mother Image is Required'
                                        }
                                    })}
                                    onChange={(e) => handleMotherImage(e)}
                                    type="file" multiple={true} className="opacity-0 absolute z-50 top-0 w-full h-full"
                                />
                                <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                                    <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                                </div>
                            </div> */}
                            {errors.mother_photo_url?.type === 'required' &&
                                <span className="label-text-alt text-xs text-red-600">{errors.mother_photo_url.message}</span>}


                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="name"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Mother Name"  {...register("mother_name", {
                                        required: {
                                            value: true,
                                            message: 'Mother Name is Required'
                                        }
                                    })} />
                                <label htmlFor="mother_name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mother Name</label>
                                {errors.mother_name?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.mother_name.message}</span>}
                            </div>

                            <div class="my-4 relative w-full py-2">
                                <input type="email" name="email"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Email"  {...register("mother_email", {
                                        required: {
                                            message: 'Mother Email is Required'
                                        }
                                    })} />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mother Email</label>

                                {errors.mother_email?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.mother_email.message}</span>}
                            </div>

                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="nid"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Father NID"  {...register("mother_nid", {
                                        required: {
                                            value: true,
                                            message: 'MOther NID is Required'
                                        }
                                    })} />
                                <label htmlFor="father_nid" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mother NID</label>
                                {errors.mother_nid?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.mother_nid.message}</span>}
                            </div>
                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="name"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Mother phone"  {...register("mother_phone", {
                                        required: {
                                            value: true,
                                            message: 'Mother Phone is Required'
                                        }
                                    })} />
                                <label htmlFor="father_phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mother Phone</label>
                                {errors.mother_phone?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.mother_phone.message}</span>}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-white rounded-lg mx-auto overflow-hidden shadow-sm shadow-gray-400 p-5">
                    <p className="font-semibold text-lg text-teal-600 my-2">Local Guardians Information</p>


                    <div className="w-full pr-4">
                        {/* <div className="relative w-28 h-28">
                            <img className="w-full h-full rounded-full" src={localGuardianImage} />
                            <input
                                {...register("local_parent_photo_url", {
                                    required: {
                                        value: true,
                                        message: 'Local Guardian Image is Required'
                                    }
                                })}
                                onChange={(e) => handleLocalGuardianImage(e)}
                                type="file" multiple={true} className="opacity-0 absolute z-50 top-0 w-full h-full"
                            />
                            <div className="w-9 h-9 bg-gray-100 rounded-full absolute bottom-0 right-2 flex justify-center items-center">
                                <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                            </div>
                        </div> */}

                        {errors.local_parent_photo_url?.type === 'required' &&
                            <span className="label-text-alt text-xs text-red-600">{errors.local_parent_photo_url.message}</span>}
                        <div className="flex items-center gap-6">
                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="name"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Local Parent Name"  {...register("local_parent_name", {
                                        required: {
                                            value: true,
                                            message: 'Local Guardian Name is Required'
                                        }
                                    })} />
                                <label htmlFor="father_name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                {errors.local_parent_name?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.local_parent_name.message}</span>}
                            </div>

                            <div class="my-4 relative w-full py-2">
                                <input type="email" name="email"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Email"  {...register("local_parent_email", {
                                        required: {
                                            message: 'Local Guardian Email is Required'
                                        }
                                    })} />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>

                                {errors.local_parent_email?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.local_parent_email.message}</span>}
                            </div>
                        </div>


                        <div className="flex items-center gap-6">
                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="nid"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Local Guardian NID"  {...register("local_parent_nid", {
                                        required: {
                                            value: true,
                                            message: 'Local Guardian NID is Required'
                                        }
                                    })} />
                                <label htmlFor="father_nid" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">NID</label>
                                {errors.local_parent_nid?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.local_parent_nid.message}</span>}
                            </div>
                            <div class="my-4 relative w-full py-2">
                                <input type="text" name="name"
                                    className="shadow_0 peer  border-b-2 border-gray-400 outline-1 focus:shadow-gray-50 h-10 w-full border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-300"
                                    placeholder="Local Guardian phone"  {...register("local_parent_phone", {
                                        required: {
                                            value: true,
                                            message: 'Local Guardian Phone is Required'
                                        }
                                    })} />
                                <label htmlFor="local_parent_phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number</label>
                                {errors.local_parent_phone?.type === 'required' &&
                                    <span className="label-text-alt text-xs text-red-600">{errors.local_parent_phone.message}</span>}
                            </div>
                        </div>

                    </div>






                </div>

                <button type="submit" className="px-10 py-2 bg-teal-500 rounded-md text-white my-5">Submit
                </button>
            </form>




        </div>











    );
};

export default AdmissionForm;