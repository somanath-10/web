import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import {apiUrl,filterData} from './data';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';

function App() {


  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
    
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
          // console.log(data);
        setCourses(output.data);
        //save data into variable
      }catch(e){

      }
      setLoading(false);
    
  }

  useEffect(()=>{
    
    fetchData();
  },[]);
  
  return (
    <div className='flex flex-col min-h-screen'>
      <div>
      <Navbar/>
      </div>

      <div className=' bg-blue-800 bg-opacity-55'>
      <div>
      <Filter
      filterData={filterData}
      category={category}
      setCategory={setCategory}
       
      />
      
      </div>

      
      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap'>
        {
          loading ?(<Spinner/>):(      <Cards courses={courses} category={category}/>
        )
        }
      </div>      
      
    </div>
      </div>
      
      
  );
}

export default App;
