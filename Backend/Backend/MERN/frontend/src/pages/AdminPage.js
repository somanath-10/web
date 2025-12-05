import React from 'react'
import { useForm } from 'react-hook-form'

function AdminPage() {
    const{register,handleSubmit} = useForm();
    const usersubmit = async(data)=>{
        data = {...data,count:0};
        console.log(data);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/createuser`,{
            method:"POST",
            headers:{
                "content-type":"application/json",

            },
            body : JSON.stringify(data),
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit(usersubmit)}>
            <label>
                enter name
            </label>
            <input
                type='text'
                {...register("name")}            >

            </input>

            <label>
                Role
            </label>

            <select
                {...register("role")}
            >
                <option value="President">President</option>
                <option value="Vice-President">Vice-President</option>
                <option value="Treasure">Treasure</option>
            </select>

            <button type='submit' className='text-white'>
                    Submit
            </button>
            
        </form>
    </div>
  )
}

export default AdminPage