import React from 'react';
import styles from './Category.module.scss';
import { Link } from 'react-router-dom';

import img1 from '../../img/house.jpg';
import img2 from '../../img/car.jpg';
import img3 from '../../img/shoe.jpg';

const Category = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <Link to='/houses/sydney-nsw-2000' className={styles.link}>
                    <img className={styles.img} src={img1} alt='img'/>
                </Link>
                <div className={styles.overlay}>
                    <p className={styles.text}>Houses</p>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Link to='/cars/toyota-rav4' className={styles.link}>
                    <img className={styles.img} src={img2} alt='imdg'/>
                </Link>
                <div className={styles.overlay}>
                    <p className={styles.text}>Cars</p>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Link to='/fashion/shirts' className={styles.link}>
                    <img className={styles.img} src={img3} alt='igv'/>
                </Link>
                <div className={styles.overlay}>
                    <p className={styles.text}>Fashion</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category