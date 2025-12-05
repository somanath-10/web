import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function EmployeeForm() {
    const navigate=useNavigate();
    const[formData,setFromData]=useState({
        name:"",
        email:"",
        title:"",
        department:"",
        role:""
    });
    function changehandler(event) {
        const{name,value}=event.target;
        setFromData((prevData)=>{

            return({
                ...prevData,
                [name]:value
            })
            

        })
      }

      const submithandler = async (e) => {
        e.preventDefault();
    
        try {
          const savedUserResponse = await fetch(
            `${process.env.REACT_APP_BASE_URL}/createuser`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            }
          );
    
          if (!savedUserResponse.ok) {
            throw new Error('Failed to create user');
          }
    
          console.log('FORM RESPONSE......', savedUserResponse);
    
          navigate('/');
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };
  return (
    <form className='' onSubmit={submithandler}>
        <label className=' text-white'>
            Employee Name
            </label>
            <input 
            type='text'
            name='name'
            placeholder='Enter Your Name'
            onChange={changehandler}
            value={formData.name}/>
        
        <br/>
        <label className=' text-white'>
            Employee email id
            </label>
            <input type='email'
            name='email'
            placeholder='Enter Your email'
            onChange={changehandler}
            value={formData.email}/>
        
        <br/>
        <label className=' text-white'>
            Employee title
            </label>
            <input type='text'
            name='title'
            placeholder='Enter Your title'
            onChange={changehandler}
            value={formData.title}/>
        
        <br/>
        <label className=' text-white'>
            Employee department
            </label>
            <input type='text'
            name='department'
            placeholder='Enter Your department'
            onChange={changehandler}
            value={formData.department}/>
        
        <br/>
        <label className=' text-white'>
            Employee role
            </label>
            <input type='text'
            name='role'
            placeholder='Enter Your role'
            onChange={changehandler}
            value={formData.role}/>
       
        <br/>

        <input type="submit" value="Submit" className=' text-white' />
    </form>
  )
}

export default EmployeeForm