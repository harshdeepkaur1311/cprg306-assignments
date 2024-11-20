"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
   const[items, setItems] = useState(itemsData);
   const [selectedItemName , setSelectedItemName] = useState("");
   const { user } = useUserAuth();

   if (!user) {
    return (
        <main>
            <p>You must be logged in to  view this page.</p>
        </main>
    );
   }

   

   const handleAddItem = (newItem) => {
       setItems([...items, newItem]);
   }


   const handleItemSelect = (itemName) => {
      const cleanName = itemName
    //   .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[uD83C-\uDBFF\uDC00-\uDFFF])/g, '')
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g, '') // Remove emojis
      .replace(/,.*$/, '')
      .trim();

      setSelectedItemName(cleanName);
   }
    return (
        <div className="flex">
            <h1 className="font-bold text-3xl m-5 flex">Shopping List</h1>
           <div className="flex">
           <NewItem  onAddItem={handleAddItem} />
           <ItemList  items={items} onItemSelect={handleItemSelect}/>
           </div>
            <div>
            <MealIdeas ingredient={selectedItemName}/>
            </div>
           


        </div>
    );
}       