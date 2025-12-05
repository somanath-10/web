import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm=({setIsloggedin})=>{
    let navigate=useNavigate();
    const[formData,setformData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpass:''
    })
    function changeHandler(event){
        setformData((prevData)=>({
            
            
                    ...prevData,
                    [event.target.name]:event.target.value

            
            
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsloggedin(true);
        toast.success("logged in Successfully");
        navigate("/dashboard");
        const acc={
            ...formData
        };
        console.log("printing acc data");
        console.log(acc);

        
    }

    const[accountType,setAccounttype]=useState("student");

    return(
        <div>
            <div className=" flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button onClick={()=>setAccounttype('student')} className={`${accountType==='student'?" bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
                <button onClick={()=>{setAccounttype('instructor')}} className={`${accountType==='instructor'?" bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-5"} py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
            </div>

            <form onSubmit={submitHandler} className=" flex gap-y-4 flex-col">
                <div className=" flex gap-x-4">
                    <label  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        <p>First Name<sup className=" text-pink-200">*</sup></p>
                        <input className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        required
                        type="text"
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter Firstname"
                        value={formData.value}/>
                    </label>
                    <label  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        <p>Last Name<sup className=" text-pink-200">*</sup></p>
                        <input className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter lastname"
                        value={formData.value}/>
                    </label>
                </div>

                <label  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    <p>Email Address<sup className=" text-pink-200">*</sup></p>
                    <input className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Your Email"
                    value={formData.value}/>
                </label>
                <div className=" flex gap-x-4">
                <label  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    
                    <p>Password<sup className=" text-pink-200">*</sup></p>
                    <input className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    required
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.value}/>
                </label>
                <label  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    <p>Confirm Password<sup className=" text-pink-200">*</sup></p>
                    <input className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    required
                    type="password"
                    name="confirmpass"
                    onChange={changeHandler}
                    placeholder="Enter confirm PAssword"
                    value={formData.value}/>
                </label>
                </div>


                <button className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]"><p>Create Account</p></button>
            </form>
        </div>
    );
}

export default SignupForm;