import './app.css';

import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';

function App() {

  const{fetchData}=useContext(AppContext);

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className=' w-full h-full flex flex-col gap-y-1 justify-center items-center'>


      <Header/>
      <Blog/>
      <Pagination/>
      
    </div>
  );
}

export default App;
