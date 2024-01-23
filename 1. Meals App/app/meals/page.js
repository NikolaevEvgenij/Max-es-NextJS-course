import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid/MealsGrid";
import { getMeals } from "@/lib/meals";

const Meals = async () => {
   const meals = await getMeals();
   return (
      <>
         <header className={styles.header}>
            <h1>
               Delicious meals, created{" "}
               <span className={styles.highlight}>
                  by you
               </span>
            </h1>
            <p>Choose your favourite recipe!</p>
            <p className={styles.cta}>
               <Link href='/meals/share'>
                  Share Your Favourite Recipe
               </Link>
            </p>
         </header>
         <main className={styles.main}>
            <MealsGrid meals={meals} />
         </main>
      </>
   );
};

export default Meals;
