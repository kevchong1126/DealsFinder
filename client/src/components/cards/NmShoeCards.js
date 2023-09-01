import React from 'react'
import styles from './NmShoeCards.module.scss';
import NmShoeCard from './NmShoeCard';

const NmShoeCards = ({data}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            {   
                data.map( (el, idx) => {
                    return (
                        <NmShoeCard data={el} key={idx}/>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default NmShoeCards