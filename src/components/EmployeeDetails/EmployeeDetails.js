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

                    <div>
                        <label>First Name</label>
                        <input
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
                        <label>Last Name</label>
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        {errors?.lastName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                        )}
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-4'>


                    <div>
                        <label>Designation</label>
                        <input
                            {...register("Designation", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label>Office Id</label>
                        <input
                            {...register("id", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
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

                        <label>Age</label>
                        <input {...register("age", { min: 18, max: 99 })} />
                        {errors.age && (
                            <p>You Must be older then 18 and younger then 99 years old</p>
                        )}
                    </div>
                </div>





                {/* Emergency part is here */}
                <h1>Emergency Contact</h1>

                <div className='grid grid-cols-4 gap-2' >

                    <div>


                        <label>Contact Name</label>
                        <input
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
                        <label>Relationship</label>
                        <input
                            {...register("relationship", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label>Phone No</label>
                        <input
                            {...register("Phone-No", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label>Emergency Email</label>
                        <input
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
                        <label>Address</label>
                        <input
                            {...register("Address", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <label>Blood Group</label>
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
                    </div>
                    <div>
                        <label>Present Address</label>
                        <input
                            {...register("Present-Address", {
                                required: true,
                            })}
                        />
                    </div>
                    <div>
                        <label>Permanent Address</label>
                        <input
                            {...register("Permanent-Address", {
                                required: true,
                            })}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <div>
                        <label>NID No</label>
                        <input
                            {...register("NID-No", {
                                required: true,
                            })}
                        />
                    </div>

                    <div>


                        <label>Fathers Name</label>
                        <input
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


                        <label>Mothers Name</label>
                        <input
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


                        <label>Spouse Name</label>
                        <input
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
                        <label>SpousePhone No</label>
                        <input
                            {...register("Phone-No", {
                                required: true,
                            })}
                        />
                    </div>


                    <div>
                        <label>spouse Email</label>
                        <input
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
                        <label>Bank Account</label>
                        <input
                            {...register("Bank-Account", {
                                required: true,
                            })}
                        />
                    </div>


                    <div>
                        <label>TIN</label>
                        <input
                            {...register("TIM", {
                                required: true,
                            
                            })}
                        />

                   
                    </div>

                </div>
                <input type="submit" />




            </form>

        </>
    )
}
