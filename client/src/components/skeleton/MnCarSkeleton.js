import React from 'react'
import styles from './MnCarSkeleton.module.scss';

const MnCarSkeleton = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.imgContainer} /> 

            <div className={styles.body}>
                <div className={styles.left}>
                    <div className={styles.title}>
                       
                    </div>
                    <ul className={styles.features}>
                        <li className={styles.item} />
                        <li className={styles.item} />
                        <li className={styles.item} />
                        <li className={styles.item} />
                    </ul>
                </div>
                <div className={styles.right}>
                    <p className={styles.price} />
                    <p className={styles.location} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MnCarSkeleton