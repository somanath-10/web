import React, { useState } from 'react'
import { useEffect } from 'react';
function Sort() {
    const [response,setResonse] = useState();
    const [Pre,SetPre] = useState({count:0,name:""});
    const fetchDetails = async()=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/fetchadmin`,{
                method:"GET",
                headers:{
                    "content-type":"application/json",
                },
            })
            const data = await response.json();
            console.log("in fect",data);
            setResonse(data?.response);
        }
        console.log("In SOur",response);
    
        useEffect(()=>{
            fetchDetails();
        },[])


        useEffect(()=>{
            {
                response && response.map((data)=>{
                    if(data.role==="President"){
                        if(Pre.count <= data.count){
                            SetPre({"count":data.count,"name":data.name});
                        }
                    }
                })
            }
        },[response])
  return (
    <div>
        <h1>President</h1>
 
        <h1>{Pre.count}</h1>
        <h1>{Pre.name}</h1>
    </div>
  )
}

export default Sort