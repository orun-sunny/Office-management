import React from 'react'
import { useForm } from 'react-hook-form';
import './EmployeeDetails.css';

export const EmployeeDetails = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);
    // your form submit function which will invoke after successful validation

    //   console.log(watch("example"));
    return (
        <>
            <h1>Personal information</h1>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                {/* <h1>Personal information</h1> */}

                <div className='grid grid-cols-2 gap-4'>

                    <div >
                        <label className='text-black'>First Name</label>
                        <input
                        className='form-input'
                            {...register("firstName", {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.firstName?.type === "required" && <p>This field is required</p>}
                        {errors?.firstName?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>
                    <div>
                        <label className='text-black'>Last Name</label>
                        <input
                          className='form-input'
                         {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        {errors?.lastName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-4'>


                    <div>
                        <label className='text-black'>Designation</label>
                        <input
                          className='form-input'
                            {...register("Designation", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label className='text-black'>Office Id</label>
                        <input
                           className='form-input'
                            {...register("id", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label className='text-black'>Email</label>
                        <input
                           className='form-input'
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        />

                        {errors?.email?.type === "required" && <p>Wrong in this field</p>}
                    </div>


                    <div>

                        <label className='text-black'>Age</label>
                        <input    className='form-input'
                        {...register("age", { min: 18, max: 99 })} />
                        {errors.age && (
                            <p>You Must be older then 18 and younger then 99 years old</p>
                        )}
                    </div>
                </div>





                {/* Emergency part is here */}
                <h1 className='text-black'>Emergency Contact</h1>

                <div className='grid grid-cols-4 gap-2' >

                    <div>


                        <label className='text-black'>Contact Name</label>
                        <input
                           className='form-input'
                            {...register("Name", {
                              
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.Name?.type === "required" && <p>This field is required</p>}
                        {errors?.Name?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                        )}
                        {errors?.Name?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>
                    <div>
                        <label className='text-black'>Relationship</label>
                        <input
                           className='form-input'
                            {...register("relationship", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label className='text-black'>Phone No</label>
                        <input
                           className='form-input'
                            {...register("Phone-No", {
                                required: true,
                                type:"tel" ,
                            })}
                        />
                    </div>
                    <div>
                        <label className='text-black'>Emergency Email</label>
                        <input
                           className='form-input'
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        />

                        {errors?.email?.type === "required" && <p>Wrong in this field</p>}
                    </div>
                </div>
                <hr />

                {/* <div>
                    <label>Parent Occupation</label>
                    <input
                        {...register("Occupation", {
                            required: true,
                        })}
                    />
                </div> */}

                <div className='grid grid-cols-4 gap-2'>
                    <div>
                        <label className='text-black'>Address</label>
                        <input
                           className='form-input'
                            {...register("Address", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label className='text-black'>Blood Group</label>
                        <select name="class"
                            className="shadow_0 peer   border-b-2 border-gray-400 outline-1  text-gray-900  form-input"
                            
                            {...register("class", {
                              
                                required: {
                                    message: 'Class is Required'
                                }
                            })}>

                            <option value="one">A+</option>
                            <option value="two">B+</option>
                            <option value="three">O+</option>
                            <option value="four">A-</option>
                            <option value="five">B-</option>
                            <option value="six">AB</option>

                        </select>
                    </div>
                    <div>
                        <label className='text-black'>Present Address</label>
                        <input
                           className='form-input'
                            {...register("Present-Address", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label className='text-black'>Permanent Address</label>
                        <input
                           className='form-input'
                            {...register("Permanent-Address", {
                                required: true,
                            })}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <div>
                        <label className='text-black'>NID No</label>
                        <input
                           className='form-input'
                            {...register("NID-No", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>


                        <label className='text-black'>Fathers Name</label>
                        <input
                           className='form-input'
                            {...register("FathersName", {
                                required: true,

                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.FathersName?.type === "required" && <p>This field is required</p>}
                        {errors?.FathersName?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                        )}
                        {errors?.FathersName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>
                    <div>


                        <label className='text-black'>Mothers Name</label>
                        <input
                           className='form-input'
                            {...register("MothersName", {
                                required: true,

                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.MothersName?.type === "required" && <p>This field is required</p>}
                        {errors?.MothersName?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                        )}
                        {errors?.MothersName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-2'>

                    <div>


                        <label className='text-black'>Spouse Name</label>
                        <input
                           className='form-input'
                            {...register("Name", {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                        {errors?.Name?.type === "required" && <p>This field is required</p>}
                        {errors?.Name?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                        )}
                        {errors?.Name?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>

                    <div>
                        <label className='text-black'>SpousePhone No</label>
                        <input
                           className='form-input'
                            {...register("Phone-No", {
                                required: true,

                            })}
                        />
                    </div>


                    <div>
                        <label className='text-black'>spouse Email</label>
                        <input
                           className='form-input'
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        />

                        {errors?.email?.type === "required" && <p>Wrong in this field</p>}
                    </div>

                </div>

                <div className='grid grid-cols-2 gap-2'>



                    <div>
                        <label className='text-black'>Bank Account</label>
                        <input
                           className='form-input'
                            {...register("Bank-Account", {
                                required: true,
                            })}
                        />
                    </div>


                    <div>
                        <label className='text-black'>TIN</label>
                        <input
                           className='form-input'
                            {...register("TIN", {
                                required: true,

                            })}
                        />


                    </div>

                </div>
                <div className=' w-56  items-center'>
                <input className='bg-blue-600 text-white font-semibold text-center p-3 rounded-md ' type="submit" />
                </div>




            </form>

        </>
    )
}
