import React from 'react'
import styles from './NmShoeSkeleton.module.scss';

const NmShoeSkeleton = () => {
  return (
    <div className={styles.container}>
         <div className={styles.content} >
            <div className={styles.imgContainer}>
            </div>

            <div className={styles.info}>
                <div className={styles.brand}>
                </div>
                <div className={styles.title}>
                </div>
                <div className={styles.price}>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NmShoeSkeleton