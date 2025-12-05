import React from 'react'
import { useForm } from 'react-hook-form'
function CreateEmployeePage() {

  const {register,handleSubmit} = useForm();


  const createUser = async(data)=>{
    try{
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/signup`,

        {
          method:"POST",
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(data),
        },
      )
    }
    catch(err){
      console.log(err.message);
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit(createUser)}>
      <label htmlFor='name'>
        Enter Name
      </label>
      <input
        type='text'
        {...register("name")}
        placeholder='Enter Name'
      >
      </input>
      <label htmlFor='email'>
        Enter email
      </label>
      <input
        type='text'
        {...register("email")}
        placeholder='Enter Email'
      >
      </input>      <label htmlFor='password'>
        Enter password
      </label>
      <input
        type='text'
        {...register("password")}
        placeholder='enter Password'
      >
      </input>

      <button type='submit'>
        adduser
      </button>
      </form>


    </div>
  )
}

export default CreateEmployeePage