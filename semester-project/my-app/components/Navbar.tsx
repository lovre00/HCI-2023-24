import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/">
            <a className={styles.navLink}>
              <button className={styles.navButton}>Home</button>
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/blog">
            <a className={styles.navLink}>
              <button className={styles.navButton}>Blog</button>
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/about">
            <a className={styles.navLink}>
              <button className={styles.navButton}>About</button>
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/contact">
            <a className={styles.navLink}>
              <button className={styles.navButton}>Contact</button>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
