import React from 'react'
import styles from './MnHouseCard.module.scss';
import {MdOutlineBedroomChild} from 'react-icons/md';
import {PiToiletThin} from 'react-icons/pi';
import {AiFillCar} from 'react-icons/ai';

const MnHouseCard = ({data}) => {

    const {link, image, price, location, bedroom, bathroom, car, type, logo} = data;

  return (
    <div className={styles.container}>
        <a className={styles.content} href={link} target='_blank' rel="noreferrer">
            <div className={styles.imgContainer} >
                <img className={styles.image} src={image} alt={location} />
            </div>
        
            <div className={styles.infoContainer}>
                <h4 className={styles.price}>{price}</h4>
                <p className={styles.location}>{location}</p>
                
                <ul className={styles.misc}>
                    {
                        bedroom && 
                        <li className={styles.item}>
                            <MdOutlineBedroomChild className={styles.icon} />
                            <span>{bedroom}</span>
                        </li>
                    }
                    
                    {
                        bathroom &&
                        <li className={styles.item}>
                        <PiToiletThin className={styles.icon} />
                                <span>{bathroom}</span>
                        </li>
                    }
                    
                    {
                        car &&
                        <li className={styles.item}>
                            <AiFillCar className={styles.icon} />
                            <span>{car}</span>
                        </li>
                    }
                    <li className={styles.item}>
                        <span className={styles.type}>{type}</span>
                    </li>
                </ul>

                <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} alt='logo'></img>
                </div>
            </div>
        </a>
    </div>
  )
}

export default MnHouseCard