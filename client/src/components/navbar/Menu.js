import React from 'react'
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className={styles.menu}>
        <li className={styles.item}><Link to='/houses/sydney-nsw-2000'>Real Estate</Link></li>
        <li className={styles.item}><Link to='/cars/'>Cars</Link></li>
        <li className={styles.item}><Link to='/fashion/shirts'>Fashion</Link></li>
    </ul>
  )
}

export default Menu