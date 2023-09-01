import React from 'react'
import styles from './NormalHouseCards.module.scss';
import NormalHouseCard from './NormalHouseCard';

const NormalHouseCards = ({data}) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
            { 
                data.map( (el, idx) => {
                    return (
                        <NormalHouseCard el={el} key={idx}/>
                    )
                })
            }
      </div>
    </div>
  )
}

export default NormalHouseCards