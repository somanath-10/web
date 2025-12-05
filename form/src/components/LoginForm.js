
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginForm=({setIsloggedin})=>{
    const[formData,setformData]=useState({
        email:'',
        password:''
    });


    const navigate=useNavigate();


    // const[password,setpassword]=useState(false);
    function changeHandler(event){
        setformData((prevData)=>({
            
            
                    ...prevData,
                    [event.target.name]:event.target.value

            
            
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsloggedin(true);

        toast.success("logged In Successfully");
        navigate("/dashboard");

        const acc={
            ...formData
        };
        console.log("printing acc data");
        console.log(acc);
    }
    
    return(
        <form onSubmit={submitHandler} className=" flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className=" text-pink-200">*</sup></p>

                <input className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            required
            name="email"
            
            type="email"
            value={formData.email}
            placeholder="Enter Email Id"
            
            onChange={changeHandler}/>
            </label>

            

            <label  className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password<sup className=" text-pink-200">*</sup>
            <input className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            required
            type="password"
            onChange={changeHandler}
            name="password"
            placeholder="Password"
            value={formData.password}/>
            </label>

            


            <Link to="#"><p className=" text-xs mt-1 text-blue-500 ml-auto max-w-max">ForgetPassword?</p></Link>


            <button className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Signin</button>

            
        </form>
    );
}

export default LoginForm;