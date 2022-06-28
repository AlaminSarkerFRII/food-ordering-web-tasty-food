import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            width="32"
            height="32"
            alt="phone logo"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now </div>
          <div className={styles.text}> 1740051568 </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Products</li>
          <Image src="/img/logo.png" width="160px" height="69px" alt="logo" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blogs</li>
          <li className={styles.listItem}>Blogs</li>
        </ul>
      </div>
      {/*== cart ====*/}
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" width="30px" height="30px" alt="cart" />
          <div className={styles.counter}> 2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
