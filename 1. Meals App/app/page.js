import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
   return (
      <>
         <header className={styles.header}>
            <div className={styles.slideshow}></div>
            <div>
               <div className={styles.hero}>
                  <h1>Next level food experience!</h1>
                  <p>
                     Taste and share food all over the
                     world!
                  </p>
               </div>
               <div className={styles.cta}>
                  <Link href='/community'>
                     Join the Community
                  </Link>
                  <Link href='/meals'>Explore Meals</Link>
               </div>
            </div>
         </header>
         <main>
            <section className={styles.section}>
               <h2>How it works</h2>
               <p>
                  NextLevel Food is a platform for foodies
                  to share their favorite recipes with the
                  world. It&apos;s a place to discover new
                  dishes, and to connect with other food
                  lovers.
               </p>
               <p>
                  NextLevel Food is a place to discover new
                  dishes, and to connect with other food
                  lovers.
               </p>
            </section>

            <section className={styles.section}>
               <h2>Why NextLevel Food?</h2>
               <p>
                  NextLevel Food is a platform for foodies
                  to share their favorite recipes with the
                  world. It&apos;s a place to discover new
                  dishes, and to connect with other food
                  lovers.
               </p>
               <p>
                  NextLevel Food is a place to discover new
                  dishes, and to connect with other food
                  lovers.
               </p>
            </section>
         </main>
      </>
   );
}
