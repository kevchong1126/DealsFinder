import React from 'react'
import styles from './Banner.module.scss';

const Banner = ({text1, text2}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.text1}>
                {
                    text1
                }
            </p>
            <p className={styles.text2}>
                {
                    text2
                }
            </p>
        </div>  
    </div>
  )
}

export default Banner