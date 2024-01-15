'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="https://i.postimg.cc/Sxf7r8Hr/logo.png" alt="logo" width="32"/>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
          {/* Navigation Items */}
          <li className={styles.navItem}><Link href="/" legacyBehavior><a className={styles.navLink}><button className={styles.navButton}>Home</button></a></Link></li>
          <li className={styles.navItem}><Link href="/documentation" legacyBehavior><a className={styles.navLink}><button className={styles.navButton}>Documentation</button></a></Link></li>
          <li className={styles.navItem}><Link href="/blog" legacyBehavior><a className={styles.navLink}><button className={styles.navButton}>Blog</button></a></Link></li>
          <li className={styles.navItem}><Link href="/about" legacyBehavior><a className={styles.navLink}><button className={styles.navButton}>About</button></a></Link></li>
          <li className={styles.navItem}><Link href="/contact" legacyBehavior><a className={styles.navLink}><button className={styles.navButton}>Contact</button></a></Link></li>
          {/* Sign-In Button */}
          <li className={styles.navItem}><div className={styles.signIn}>Sign In</div></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;