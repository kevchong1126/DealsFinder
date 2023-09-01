import React from 'react'
import styles from './NormalHouseCard.module.scss';
import {MdOutlineBedroomChild} from 'react-icons/md';
import {PiToiletThin} from 'react-icons/pi';
import {AiFillCar} from 'react-icons/ai';

const NormalHouseCard = ({el}) => {
    const {link, image, price, location, bedroom, bathroom, car, type} = el;

  return (
    <div className={styles.container}>
        <a className={styles.content} href={link} target='_blank'  rel="noreferrer">
            <div className={styles.imgContainer}>
                <img className={styles.img} src={image} alt={link}/>
            </div>

            <div className={styles.contentInfo}>
                <h3 className={styles.price}>{price}</h3>
                <h4 className={styles.location}>{location}</h4>

                <ul className={styles.misc}>
                    <li className={styles.item}>
                        <MdOutlineBedroomChild className={styles.icon} />
                        <span>{bedroom}</span>
                    </li>
                    <li className={styles.item}>
                        <PiToiletThin className={styles.icon} />
                        <span>{bathroom}</span>
                    </li>
                    {
                        car ? 
                        <li className={styles.item}>
                            <AiFillCar className={styles.icon} />
                            <span>{car}</span>
                        </li> : ''
                    }
                    <li className={styles.item}>
                        <span>{type}</span>
                    </li>
                </ul>
            </div>
        </a>
    </div>
  )
}

export default NormalHouseCard