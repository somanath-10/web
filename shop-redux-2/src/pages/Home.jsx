import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Product from '../components/Product';
export default function Home() {

    const API_URL = "https://fakestoreapi.com/products";

    const[loading,setLoading]=useState(true);

    const [posts,setPosts]=useState([]);

    async function fetchproductdata(){
        setLoading(true);

        try{

            const res=await fetch(API_URL);
            const data=await res.json();
            setPosts(data);

        }catch(err){

        }
        setLoading(false);
    }


    useEffect(()=>{
        fetchproductdata();
    },[]);

  return (
    <div>


        {
            loading?(Spinner):posts.length>0?(
                <div>
                    
                    {
                        posts.map((post)=>(
                            <Product key={post.id} post={post}/>
                        ))
                    }
                </div>
            ):<div><p>No data found</p></div>
        }


    </div>
  )
}
