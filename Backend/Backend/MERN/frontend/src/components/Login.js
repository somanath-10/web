import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Login() {
    const [form,setForm] = useState({
        name:"",
        password:"",
    });
    const submit = async(form)=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body :JSON.stringify(form),
        })

        const data1 =await response.json();

        console.log("response",data1);
        console.log(data1.token);
        localStorage.setItem("token",data1.token);
    }

    const handlechanghe = (e)=>{
        setForm(
            {...form,[e.target.name]:e.target.value}
        )
    }

  return (
    <div>
        <form onSubmit={submit}>
        <input
                type='text' id='nametag' name='name' value={form.name} onChange={handlechanghe}
        >
        
        </input>

        <button type='submit' id='button1' className='text-white'>
            submit
        </button>
        </form>

    </div>
  )
}

export default Login