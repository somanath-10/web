import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'

function Verifyemail() {
    const{signupData} = useSelector((state)=>state.auth);
    const{email,name,password} = signupData;
    const{register,handleSubmit} = useForm();
    
    const submit = async(data)=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/verify-opt`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body : JSON.stringify(data),
        })
        
        const data1 =await response.json();

        if(data1.success){
            const response1 =await fetch(`${process.env.REACT_APP_BASE_URL}/signup`,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify({name:name,email:email,password:password}),
            })
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>

        <input type='text' {...register("otp")}>

        </input>
        <button type='submit'>
            submit
        </button>
        </form>
    </div>
  )
}

export default Verifyemail