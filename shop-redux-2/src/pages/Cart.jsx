import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
export default function Cart() {

    const {cart}=useSelector((state)=>state);

    const [totalAmount,setTotalamount]=useState(0);


    useEffect(()=>{
        setTotalamount(cart.reduce((acc,current) => acc+current.price,0));
    },[cart])

  return (
    <div>
        {
            cart.length>0?(<div>

                <div>
                    {
                        cart.map((item,index)=>{
                            return(<CartItem key={item.id} item={item} itemIndex={index}/>)
                        })
                    }
                </div>

                <div>
                    <div>Your Cart</div>
                    <div>Summary</div>

                    <p>
                        <span>Total Items :{cart.length}</span>
                    </p>
                </div>

                <div>
                    <p>total amount : {totalAmount}</p>

                    <button>
                        Check Out
                    </button>
                </div>
            </div>):(
                <div>
                    <h1>Cart is Empty</h1>

                    <NavLink to={"/"}>
                        <button>Shop Now</button>
                    </NavLink>
                </div>
            )
        }
    </div>
  )
}
