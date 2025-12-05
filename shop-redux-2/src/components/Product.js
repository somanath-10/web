import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';


import { remove,add } from '../redux/slices/Cartslice';

export default function Product({post}) {

    const {cart}=useSelector((state)=>state);

    const dispatch=useDispatch();

    const addCart=()=>{
        dispatch(add(post));
        toast.success("Item added to cart");
    }

    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.warning("removed from cart");
    }

  return (
    <div>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>

        <div>
            <img src={post.image}/>
        </div>
        <div>
            <p>{post.price}</p>
        </div>

        {
            cart.some((p)=>p.id===post.id)?(<button onClick={removeFromCart}>RemoveItem</button>):(
                <button onClick={addCart}>Add to Cart</button>
            )
        }
        
    </div>
  )
}
