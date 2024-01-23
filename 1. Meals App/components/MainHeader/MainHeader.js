import styles from "./MainHeader.module.css";

import logoImg from "@/assets/logo.png";

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./MainHeaderBackground/MainHeaderBackground";
import NavLink from "./NavLink/NavLink";

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
                     <NavLink href='/meals'>
                        Browse Meals
                     </NavLink>
                  </li>
                  <li>
                     <NavLink href='/community'>
                        Community
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
};

export default MainHeader;
