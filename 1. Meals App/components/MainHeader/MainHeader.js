import styles from "./MainHeader.module.css";

import logoImg from "@/assets/logo.png";

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./MainHeaderBackground/MainHeaderBackground";

const MainHeader = () => {
   return (
      <>
         <MainHeaderBackground />
         <header className={styles.header}>
            <Link href='/' className={styles.logo}>
               <Image
                  width={"5rem"}
                  height={"5rem"}
                  src={logoImg}
                  alt='A table full of dishes logo'
                  priority
               />
               NextJS Food App
            </Link>
            <nav className={styles.nav}>
               <ul>
                  <li>
                     <Link href='/meals'>Browse Meals</Link>
                  </li>
                  <li>
                     <Link href='/community'>
                        Community
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
};

export default MainHeader;
