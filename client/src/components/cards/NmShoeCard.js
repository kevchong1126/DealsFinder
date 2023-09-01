import React from 'react'
import styles from './NmShoeCard.module.scss';

const NmShoeCard = ({data}) => {
    const {link, image, brand, title, price} = data;

  return (
    <div className={styles.container}>
         <a href={link} className={styles.content} target='_blank' rel="noreferrer">
            <div className={styles.imgContainer}>
                <img className={styles.img} src={image} alt='Shoe'/>
            </div>

            <div className={styles.info}>
                <div className={styles.brand}>
                    {brand}
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.price}>
                    {price}
                </div>
            </div>
        </a>
    </div>
  )
}

export default NmShoeCard