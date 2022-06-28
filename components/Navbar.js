import Image from 'next/image';
import React from 'react';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" width="32" height="32" alt="phone logo"/>
                </div>
                <div className={styles.texts}>
                <div className={styles.text}>Order Now </div>
                <div className={styles.text}> 1740051568 </div>
                </div>
            </div>
            <div className={styles.item}>Center</div>
            <div className={styles.item}>Right</div>
        </div>
    );
};

export default Navbar;