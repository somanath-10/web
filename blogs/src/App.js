import React, { useContext, useEffect } from 'react'

import { Appcontext } from './context/Appcontext';

import {Routes,Route, useSearchParams, useLocation} from "react-router-dom";

import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";




export const App = () => {
  const {fetchBlogPosts} = useContext(Appcontext);

  const[searchParams,SetSearchParama]=useSearchParams();
  const location=useLocation();

  useEffect(() => {

    const page=searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
    
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }

    else if(location.pathname.includes("categories")){
    
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }

    else{
      fetchBlogPosts(Number(page))
    }

  }, [location.pathname,location.search])

  
  
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:categoty' element={<CategoryPage/>}/>


    </Routes>
  )
}

export default App