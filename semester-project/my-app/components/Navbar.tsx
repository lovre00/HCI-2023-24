import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              <h2 className={styles.navLink}>Home</h2>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">
              <h2 className={styles.navLink}>Blog</h2>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <h2 className={styles.navLink}>About</h2>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <h2 className={styles.navLink}>Contact</h2>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
export default Navbar;