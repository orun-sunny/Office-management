import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Demo() {
    const [demos,setDemos] =useState([]);
    // fetch('https://polls.apiblueprint.org/api/department')
    // TouchEvent(res =>res.json())
    // .then(data =>{})
console.log(demos)
    useEffect (()=>{
        axios.get('https://private-155d5-officemanager.apiary-mock.com/api/department')
        .then(data =>{
            const demos = data.data.data[0].sub_departments;
            console.log(demos)
            // setDemos(demos)
            // const departmentLoaded = demos.map(demo=>{
            

            // })
        });

    },[])
  return (
    <div>Demo</div>
  )
}

export default Demo