"use client";
import { useState } from "react";
import Item from "./item";
// import itemsJson from "./items.json";   
export default  function ItemList({items, onItemSelect}){
    const[setSort, setSortBy] = useState("name");


    


    let sortedItems = [...items];
    if(setSort === "name"){
        sortedItems.sort((a,b) => a.name.localeCompare(b.name));
        console.log(sortedItems);
    }
    else if(setSort === "category"){
        sortedItems.sort((a,b) => a.category.localeCompare(b.category));
    }
    
      return(
        <div>
            <div className="flex m-4 my-8 ">
            <p>Sort by: </p>
             <button onClick={()=> setSortBy("name")} className={`mx-3 px-8 py-1 ${setSort=="name" ? "bg-orange-500" : "bg-orange-700"}`} >Name</button>
             <button onClick={()=> setSortBy("category")} className={`mx-3 px-8   ${setSort == "category" ? "bg-orange-500" : "bg-orange-700"}`}  >Category</button>
             </div>
            <ul className="my-6">
                {sortedItems.map((item) => (
                    
                    <li onSelect={onItemSelect} key={item.id}>
                        <Item name={item.name} quantity={item.quantity} category={item.category}/>

                    </li>
                ))}
            </ul>
        </div>
        );
    }