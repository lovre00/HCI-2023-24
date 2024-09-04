'use client';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaSearch, FaHome, FaBook, FaRss, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons
import logo from '../assets/logo.png';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const statuses: string[] = ["ok", "warning", "critical"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filteredSuggestions = statuses.filter(status =>
        status.includes(query)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string): void => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    navigateToFile(suggestion);
  };

  const navigateToFile = (status: string): void => {
    if (status) {
      window.location.href = `/file/${status}`;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && searchQuery) {
      navigateToFile(searchQuery);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}><Image src={logo.src} width={32} height={32} alt="Excalibur"/></Link>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className={styles.searchInput}
            placeholder="Search..."
          />
          {suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map(suggestion => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={styles.suggestionItem}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <ul className={`${styles.navList} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              <FaHome className={styles.icon} />
              <span className={styles.text}>Home</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/documentation" className={styles.navLink}>
              <FaBook className={styles.icon} />
              <span className={styles.text}>Blog</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              <FaEnvelope className={styles.icon} />
              <span className={styles.text}>Contact</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              <FaInfoCircle className={styles.icon} />
              <span className={styles.text}>About</span>
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
