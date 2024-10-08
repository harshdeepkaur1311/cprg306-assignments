"use client";
import { useState } from "react";



export default function NewItem(){

    const[quantity, setQuantity] = useState(1);

    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1);
        }
    
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
        
    }




    return(
        <div className="bg-white mx-auto w-1/6  flex flex-column mt-4">
            <h2 className="text-gray-950 pt-5 pl-2 flex-1">{quantity}</h2>
            <button className="flex-1 h-50 mx-3 my-5 px-7 rounded  hover:bg-blue-700 bg-blue-500  disabled:bg-slate-500" onClick={decrement} disabled= {quantity===1}>-</button>
            <button className="flex-1 h-50 mx-3 my-5 px-7  rounded  hover:bg-blue-700 bg-blue-500  disabled:bg-slate-500" onClick={increment} disabled= {quantity===20} >+</button>
            
        </div>
    );
}