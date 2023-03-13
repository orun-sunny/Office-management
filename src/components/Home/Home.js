import React from 'react'
import { ImSpinner2, ImSpinner3, ImSpinner7 } from 'react-icons/im'
import { RiLoader2Fill, RiLoaderFill } from 'react-icons/ri'
import { FiLoader} from 'react-icons/fi'
import { GiGraspingClaws} from 'react-icons/gi'

function Home() {
  return (
    <>
      <h1 className=' bg-slate-700 decoration-gray-50'>this is home</h1>

      <section className='mx-auto bg-slate-300 h-screen'>
        <h1 className='text-4xl font-bold mx-auto text-white p-10'>spinner....</h1>
        <ImSpinner2 className='h-10 w-10 mx-auto animate-spin' />
        <h4 className='text-xl text-gray-500 mx-auto p-5 text-center'>Loading..</h4>

        <div class="h-screen ">
          <div class="flex justify-center items-center h-full">
            <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
          </div>
        </div>


      </section>
    </>
  )
}

export default Home