import React from 'react';
import { useForm, useFieldArray } from "react-hook-form";

export default function Recruitment() {
  const { register, control, handleSubmit } = useForm();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "employees"
  });
  // const subs = [
  //   { name: "Math", price: 20 },
  //   { name: "English", price: 70 }
  // ];
  const registerSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='h-[800px] flex justify-center items-center bg-zinc-300  '>
      <form className='w-96 p-2' onSubmit={handleSubmit(registerSubmit)}>
        <select className='w-full pb-2' {...register("Department", { required: true })}>
          <option value="select">Select Dept</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
        </select>
        <br />
        <label htmlFor="Deadline">DeadLine</label>
        <input
          className='w-full p-2'
          {...register("Start-date")}
          placeholder="YY-MM-DD"
          type="text"
        />
        <br />
        {/* <input {...register("city")}
     className='w-96 p-2'
      placeholder="city" type="text" />
    <br /> */}
        {/* <input {...register("address")}
     className='w-96 p-2'
     placeholder="address" type="text" />
    <br />
    <input {...register("email")}
     className='w-96 p-2'
     placeholder="email" type="email" />
    <br /> */}

        <button className='border-2 p-1 mb-1' type="button" onClick={() => append({})}>
          Position of Vacancy
        </button>
        {fields.map(({ id, name, vacancy, details, user_img }, index) => (
          <div key={id}>
            {/* <input
          {...register(`students[${index}].name`)}
          placeholder="name"
          defaultValue={name}
          type="text"
        />
        <br /> */}
            <input
              {...register(`employees[${index}].vacancy`)}
              placeholder="count-vacancy"
              className='w-96 p-2'
              defaultValue={vacancy}
              type="text"
            />
            <br />
            <input
              {...register(`employees[${index}].details`)}
              placeholder="paragraph"
              className='w-96 p-2 border-2'
              defaultValue={details}
              type="text"
            />
            <br />
            <span>Dept of Vacancy</span>
            <br />

            <>
              <select className='w-full' {...register("Department", { required: true })}>
                <option value="select">Vacancy Dept</option>
                <option value="Engineering">Frontend</option>
                <option value="Engineering">Backend</option>
                <option value="Sales">Intern</option>
              </select>
              {/* {sub.name} */}
            </>

            <button type="button" className='border-2 p-1 mb-1 w-24' onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        {/* <button className='pl-2' type="button" onClick={() => append({})}>
      Position of Vacancy
    </button> */}
        <button className='border-2 p-1 mb-1 w-24' type="submit">Submit</button>
      </form>
    </div>
  )
}

// export default Recruitment