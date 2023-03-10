
import { Modal } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useFieldArray, Controller, useForm } from "react-hook-form";
// import Select, { SelectChangeEvent } from '@mui/material/Select';


const EmployeeProvident = ({ id, modalName }) => {
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
                    Paycheck
                </button>
                <Modal
                    open={modalOpen}
                    onClose={handleOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="bg-white  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 dark:bg-white-500 dark:text-white p-3 w-72 md:w-3/4 lg:w-[600px] lg:p-8 rounded-md">

                        <h6 className='text-center font-semibold'>recheck</h6>
                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            {/* <h1 className='text-black no-underline'>notice board part
                            
                            
                            </h1> */}

                            <div className=' '>





                                <div>
                                    <div className="mb-4">
                                        {/* <label>Blood Group</label> */}
                                        <input className="border py-3 w-full pl-3  rounded-md mb-3 focus:outline-none" 
                                        type="number"
                                        placeholder="amount" {...register("amount", {})} />
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
    )
}

export default EmployeeProvident