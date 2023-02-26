
import { Modal } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useFieldArray, Controller, useForm } from "react-hook-form";
// import Select, { SelectChangeEvent } from '@mui/material/Select';


const Provident = ({ id, modalName }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [age, setAge] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value);
    //   };

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
    const onSubmit = (data) => console.log(data);

    return (
        <div className="bg-white absolute dark:text-white p-3 lg:p-8 rounded-md  justify-center">
            <h1>Provident fund</h1>
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
                            {/* <h1 className='text-black no-underline'>notice board part-Role-hr </h1> */}

                            <div className=' '>

                                {/* <input ref={register} type="file" name="picture" /> */}


                                {/* <div>
                                    <textarea
                                        placeholder="Notice-details"
                                        className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none dark:text-black"{...register("Notice",
                                            { required: true, max: 15, min: 5, maxLength: 100 })} />
                                    {errors?.Notice?.type === "required" && <p>This field is required</p>}
                                </div> */}
                                <div className="">

                                <select name="part"
                                        className="border w-full bg-white rounded-md p-2  text-gray-900 placeholder-transparent focus:outline-none"
                                        placeholder="part"

                                        {...register("part", {

                                            required: {
                                                message: 'Class is Required'
                                            }
                                        })}>
                                        {errors?.part?.type === "required" && <p>This field is required</p>}

                                        <option value="one">Urgent</option>
                                        <option value="two">General</option>


                                    </select>
                                </div>
                                <div className="mb-4">
                                    {/* <label>Blood Group</label> */}
                                    <select name="part"
                                        className="border w-full bg-white rounded-md p-2  text-gray-900 placeholder-transparent focus:outline-none"
                                        placeholder="part"

                                        {...register("part", {

                                            required: {
                                                message: 'Class is Required'
                                            }
                                        })}>
                                        {errors?.part?.type === "required" && <p>This field is required</p>}

                                        <option value="one">Urgent</option>
                                        <option value="two">General</option>


                                    </select>
                                </div>
                                <div className="mb-4">

                                    <select name="class"
                                        className="border w-full bg-white rounded-md p-2  text-gray-900 placeholder-transparent focus:outline-none"
                                        placeholder="dropdown"

                                        {...register("class", {

                                            required: {
                                                message: 'Class is Required'
                                            }
                                        })}>
                                        {errors?.class?.type === "required" && <p>This field is required</p>}

                                        <option value="one">A</option>
                                        <option value="two">B</option>


                                    </select>
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
    )
}

export default Provident