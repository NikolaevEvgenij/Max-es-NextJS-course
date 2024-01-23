"use client";
import { useParams } from "next/navigation";

const MealItem = () => {
   const { mealSlug } = useParams();
   return <h1>Meal Item {mealSlug}</h1>;
};

export default MealItem;
