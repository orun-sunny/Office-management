import React from 'react'
import{ImSpinner2} from 'react-icons/im'

function Home() {
  return (
    <>
        <h1 className=' bg-slate-700 decoration-gray-50'>this is home</h1>

        <section className='mx-auto bg-slate-300 h-screen'>
            <h1 className='text-4xl font-bold mx-auto text-white p-10'>spinner....</h1>
            <ImSpinner2 className='h-20 w-20 mx-auto animate-spin'/>
            <h4 className='text-xl text-gray-500 mx-auto p-5 text-center'>Loading..</h4>

        </section>
    </>
  )
}

export default Home