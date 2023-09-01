import React from 'react'
import styles from './MnCarCard.module.scss';

const MnCarCard = ({data}) => {
    const { link, image, title, price, odometer, body, transmission, engine, location } = data;

  return (
    <div className={styles.container}>
        <a className={styles.content} href={link} target='_blank' rel='noreferrer'>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={image} alt={title} />
            </div>

            <div className={styles.body}>
                <div className={styles.left}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    <ul className={styles.features}>
                        <li className={styles.item}>.{odometer}</li>
                        <li className={styles.item}>.{body}</li>
                        <li className={styles.item}>.{transmission}</li>
                        <li className={styles.item}>.{engine}</li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.location}>{location}</p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default MnCarCard