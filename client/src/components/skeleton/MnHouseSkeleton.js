import React from 'react'
import styles from './MnHouseSkeleton.module.scss';

const MnHouseSkeleton = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.imgContainer} />
        
            <div className={styles.infoContainer}>
                <div className={styles.price}/>
                <div className={styles.location}/>
                
                <ul className={styles.misc}>
                    <li className={styles.item}/>                
                    <li className={styles.item}/>
                    <li className={styles.item}/>
                    <li className={styles.item}/>
                </ul>

                <div className={styles.logoContainer} />
            </div>
        </div>
    </div>
  )
}

export default MnHouseSkeleton