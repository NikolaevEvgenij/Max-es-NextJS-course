"use client";
import { useParams } from "next/navigation";

const MealItem = () => {
   const { slug } = useParams();
   return <h1>Meal Item {slug}</h1>;
};

export default MealItem;
