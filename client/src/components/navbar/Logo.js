import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to='/'>
        <h1 className={styles.title}>
            Dealsfinder
        </h1>
    </Link>
  )
}

export default Logo