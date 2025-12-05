import { baseUrl } from "../blogUrl";
import React, { createContext, useState } from 'react';


export const AppContext=createContext();

export default function AppContextProvider({children}) {


    const[loading,setLoading]=useState(false);
    const[posts,setposts]=useState([]);
    const[page,setpage]=useState(1);
    const[totalpages,settotalpages]=useState(null);
    
    async function fetchData(page=1){

        let url=`${baseUrl}?page=${page}`;
        setLoading(true);
        try{

        let output=await fetch(url);
        let data=await output.json();
        
        console.log(data);

        setpage(data.page);
        setposts(data.posts);
        settotalpages(data.totalPages);
        }catch(err){
            console.log("error");
        }
        
        setLoading(false);
    }

    function handlePagechanger(page) { 
        fetchData(page);
        setpage(page);

     }

    const value={
        loading,setLoading,posts,setpage,page,setposts,totalpages,settotalpages,fetchData,handlePagechanger
    }
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

