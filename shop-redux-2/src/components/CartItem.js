import React from 'react'

import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Cartslice';
import { toast } from 'react-hot-toast';

export default function CartItem({item,itemIndex}) {

    const dispatch=useDispatch();

    const removeFromCart=()=>{

        dispatch(remove(item.id))
        toast.warning("item removed from card");

    }
  return (
    <div>

        <div>
            <div>
                <img src={item.image}/>
            </div>

            <div>
                <h1>{item.title}</h1>

                <h1>{item.description}</h1>

                <div>
                    <p>{item.price}</p>
                    <div onClick={removeFromCart}>
                        <RiDeleteBin5Fill/>
                    </div>
                </div>

                
            </div>
        </div>

    </div>
  )
}
