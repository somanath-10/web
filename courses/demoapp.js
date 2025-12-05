import Demonavbar from './demonavbar';
import Demofilter from './demofilter';
import Democards from './democards';
import { apiUrl,filterData } from './src/data';
import { useEffect, useState } from 'react';
import Demospinner from './demospinner';


const app=()=>{

    const[courses,setCourses]=useState([]);
    const[loading,setLoading]=useState(true);

    async function fetchData(){
        setLoading(true);
        try{

            let res=await fetch(apiUrl);
            let data=await res.json();

            setCourses(data);

        }catch(e){

        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    function setid(){
        
    }


    return(
        <div>

        <div>
            <Demonavbar/>
        </div>
        <div>
        <Demofilter filterData={filterData}/>
        </div>
        <div>
        {
            loading?<Demospinner/>:<Democards courses={courses} />
        }
        </div>


        </div>
    );
}
export default app;