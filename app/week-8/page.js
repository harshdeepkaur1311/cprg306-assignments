"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; 
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
   const[items, setItems] = useState(itemsData);
   const [selectedItemName , setSelectedItemName] = useState("");

   

   const handleAddItem = (newItem) => {
       setItems([...items, newItem]);
   }

   const cleanIngredient = (name) => {
    return  name
    .replace(/,.*$/g, "") // Remove size or additional details after a comma
    .replace(/[^\w\s]/gi, "") // Remove emojis and special characters
    .trim();
   }

   const handleItemSelect = (itemName) => {
      const cleanName = cleanIngredient(itemName);
      setSelectedItemName(cleanName);
   }
    return (
        <div>
            <h1 className="font-bold text-3xl m-5">Shopping List</h1>
            <NewItem  onAddItem={handleAddItem} />
            <ItemList  items={items} onItemSelect={handleItemSelect}/>
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}


        </div>
    );
}       