import React from 'react'
import styles from './Hero.module.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Scrape the best deals with DealsFinder
          </h1>
          <p className={styles.desc}>
            Scrape the web to help you find what you are looking for the best price.
            
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.optionsContainer}>
            <div className={styles.options}>
              <h3 className={styles.question}>Looking to move?</h3>
            </div>
            <div className={styles.links}>
              <Link to='/houses/Sydney-NSW-2000' className={styles.link}>Sydney</Link>
              <Link to='/houses/Brighton-East-VIC-3187' className={styles.link}>Victoria</Link>
              <Link to='/houses/Rochedale-QLD-4123' className={styles.link}>Queensland</Link>
            </div>
          </div>

          <div className={styles.optionsContainer}>
            <div className={styles.options}>
              <h3 className={styles.question}>Want a Ride?</h3>
            </div>
            <div className={styles.links}>
              <Link to='/cars/toyota-supra' className={styles.link}>Toyota Supra</Link>
              <Link to='/cars/subaru-wrx' className={styles.link}>Subaru WRX</Link>
              <Link to='/cars/bmw-m3' className={styles.link}>BMW M3</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero