import React from 'react'
import styles from './MnHouseCards.module.scss';
import MnHouseCard from './MnHouseCard';

const MnHouseCards = ({data}) => {
  return (
    <div className={styles.container}>
        {
            data.map((el, idx) => {
                return (
                    <MnHouseCard data={el} key={idx}/>
                )
            })
        }

    </div>
  )
}

export default MnHouseCards