import React from 'react'
import styles from './Car.module.scss';
import InputSearch from '../components/search/InputSearch';
import CarList from '../components/lists/CarList';

const Car = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <InputSearch placeholder={'Enter make and model, e.g, "Toyota Yaris" "Honda Civic"'}/>
            <CarList />
        </div>
    </div>
  )
}

export default Car