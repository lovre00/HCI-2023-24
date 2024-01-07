import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="https://i.postimg.cc/Sxf7r8Hr/logo.png" width="32"/>
        </div>
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
                <button className={styles.navButton}>Documentation</button>
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
        <div className={styles.signIn}>
          {/* Placeholder for Sign In */}
          Sign In
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
