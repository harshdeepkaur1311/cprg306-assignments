"use client";
import { useState } from "react";



export default function NewItem({onAddItem}){

    const[quantity, setQuantity] = useState(1);
    const[name, setName] = useState("");
    const[category, setCategory] = useState("Produce");


    const handleSubmit = (event) =>{
        event.preventDefault();
        const id = Math.random().toString(36).substring(2, 20);
        let item={id, name,quantity,category};
        console.log(item);
        // alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category); 
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("Produce");

    }

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const increment = () => {
        if(quantity < 100){
            setQuantity(quantity + 1);
        }
    
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
        
    }




    return(
        <div className="flex justify-center mt-4"> 
            <form onSubmit={handleSubmit} className="bg-slate-900">
                <div className="m-4">
                 <input type="text" placeholder="Item name" className="text-black rounded-lg p-3 w-full" value={name} onChange={(event) => handleNameChange(event)} required/>
                 </div>
                 <div className=" flex justify-between mx-3">
                <div className="bg-white  w-4/6 mr-20  flex flex-column rounded-lg">
                  <h2 className="text-gray-950 pt-5 pl-2 flex-1">{quantity}</h2>
                  <button className="flex-1  mx-3 my-5 px-4 rounded  hover:bg-blue-700 bg-blue-500 disabled:bg-slate-500" type="button" onClick={decrement} disabled= {quantity===1}>-</button>
                  <button className="flex-1  mx-3 my-5 px-4 rounded  hover:bg-blue-700 bg-blue-500  disabled:bg-slate-500" type="button" onClick={increment} disabled= {quantity===99} >+</button>
                 </div>
                 <select className="text-black rounded-lg p-3" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen foods">Frozen foods</option>
                    <option value="Canned goods">Canned goods</option>
                    <option value="Dry goods">Dry goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                 </select>
                 </div>
                 <div className="m-4">
                 <button className="text-white bg-blue-700  px-4 w-full  py-2 rounded-md" type="submit" >+</button>
                 </div>
            </form>
        </div>
    );
}