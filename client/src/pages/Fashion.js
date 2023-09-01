import React from 'react'
import styles from './Fashion.module.scss';
import InputSearch from '../components/search/InputSearch';
import FashionList from  '../components/lists/FashionList';

const Fashion = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <InputSearch placeholder={'Type : Shirts, Nike, Caps...'} />
            <FashionList />
        </div>
    </div>
  )
}

export default Fashion