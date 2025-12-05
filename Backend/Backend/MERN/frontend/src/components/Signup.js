import React from 'react'
import { useForm } from 'react-hook-form'
import {useNavigation} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { setSighupData } from '../slices/authSlice';
function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigation();
    const {register,handleSubmit} = useForm();
    const submit = async(data)=>{
      dispatch(setSighupData(data.email,data.password,data.name));
      const response = 
      navigate("/verify-otp");
    }
  return (
    <div>Signup</div>
  )
}

export default Signup