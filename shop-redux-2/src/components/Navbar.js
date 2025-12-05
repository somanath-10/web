import React from 'react'

import { IoCartSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className=' flex flex-row justify-between'>

            <NavLink to={"/"}>
            
            <div>
                <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2F'/>

            </div>
            
            </NavLink>

            
        </div>
        <div>


            <NavLink to={"/"}>

            <p>Home</p>


            </NavLink>


            <NavLink to={"/cart"}>

                <div>

                <IoCartSharp/>

                </div>
            </NavLink>

            

           

        </div>
    </div>
  )
}
