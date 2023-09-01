import React from 'react'
import styles from './NormalHouseSkeleton.module.scss';

const NormalHouseSkeleton = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.imgContainer}> </div>

            <div className={styles.contentInfo}>
                <div className={styles.price}> </div>
                <div className={styles.location}></div>

                <ul className={styles.misc}>
                    <li className={styles.item}></li>
                    <li className={styles.item}></li>
                    <li className={styles.item}></li>
                    <li className={styles.item}></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NormalHouseSkeleton