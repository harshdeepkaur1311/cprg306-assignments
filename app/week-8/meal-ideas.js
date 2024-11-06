"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
        
    };

    const loadMealIdeas = async () => {
     const mealData = await fetchMealIdeas(ingredient);    
     setMeals(mealData);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);
    
    return (
        <div>
            <h2>Meal Ideas for  "{ingredient}"</h2>

                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            {meal.strMeal}

                    </li>
                    ))}
                </ul>
        </div>
    );
}