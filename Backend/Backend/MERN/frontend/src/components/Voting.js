import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';



function Voting() {
    const token = localStorage.getItem("token");
    const{register,handleSubmit} = useForm();
    
    const [response,setResonse] = useState();

    const fetchDetails = async()=>{
        console.log(token);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/fetchadmin`,{
            method:"GET",
            headers:{
                "content-type":"application/json",
                "Authorization":`Brerer ${token}`,
            },
        })
        const data = await response.json();
        console.log(data);
        setResonse(data?.response);
    }
    console.log(response);

    useEffect(()=>{
        fetchDetails();
    },[])

    const submit = async(data)=>{
        console.log(data)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/sub`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body : JSON.stringify(data),
        })
console.log(response)
        const response1 =await response.json();

        console.log(response1.success);


    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <label>
                President
            </label>
            <select {...register("President")}>
            <option value="">-- Select President --</option>

                {response &&
                    response.map((data)=>{
                        if(data.role === "President"){
                            return(
                            <option value={data._id}>
                                {data.name}
                            </option>
                            )
                        }
                    })
                }
            </select>
            <label>
                Vice-President
            </label>
            <select {...register("Vice_President")}>
            <option value="">-- Select President --</option>

                {response&&
                    response.map((data)=>{
                        if(data.role === "Vice-President"){
                            return(
                                <option value={data._id}>
                                    {data.name}
                                </option>
                                )
                        }
                    })
                }
            </select>            <label>
                Treasure
            </label>
            <select {...register("Treasure")}>
            <option value="">-- Select President --</option>

                {response&&
                    response.map((data)=>{
                        if(data.role === "Treasure"){
                            return(
                                <option value={data._id}>
                                    {data.name}
                                </option>
                                )
                        }
                    })
                }
            </select>

            <button type='submit' className='text-white'>
                SUBMIT
            </button>
        </form>
    </div>
  )
}

export default Voting