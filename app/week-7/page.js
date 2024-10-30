"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import { useState } from "react";

export default function Page() {
   const[items, setItems] = useState(itemsData);
   

   const handleAddItem = (newItem) => {
       setItems([...items, newItem]);
   }
    return (
        <div>
            <h1 className="font-bold text-3xl m-5">Shopping List</h1>
            <NewItem  onAddItem={handleAddItem} />
            <ItemList  items={items} />


        </div>
    );
}       