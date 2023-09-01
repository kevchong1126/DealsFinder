import React from 'react'
import styles from './MnCarCards.module.scss';
import MnCarCard from './MnCarCard';

const MnCarCards = ({ data }) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            {
                data.map((el, idx) => {
                    return (
                        <MnCarCard data={el} key={idx}/>
                    )
                })
            }
        </div>  
    </div>
  )
}

export default MnCarCards