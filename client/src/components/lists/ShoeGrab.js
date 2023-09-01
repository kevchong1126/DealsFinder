import React, { useState, useEffect } from 'react'
import styles from './ShoeGrab.module.scss';
import {Link} from 'react-router-dom';
import { sortShoes } from '../../util/sortProducts';

import NmShoeCards from '../cards/NmShoeCards';
import NmShoeSkeletons from '../skeleton/NmShoeSkeletons';


const ShoeGrab = () => {
    const [shoeData, setShoeData] = useState([]);

    useEffect(() => {
        const getShoes = async () => {
            const response = await fetch('https://dealsfinder-kevchong.onrender.com/shoe');
            
            if (response.ok){
                const data = await response.json();
                
                if (data.data.length){
                    const sorted = sortShoes(data.data);

                    setShoeData(sorted);
                }  
            }
        }

        getShoes();
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.header}> Don't Miss Out On These Deals</h3>
             {
                !shoeData.length ? <NmShoeSkeletons data={[1,1,1,1,1,1,1,1,1,1,1]} /> : ''
             }
             {
                shoeData.length ? <NmShoeCards data={shoeData.slice(0,12)} /> : ''
             }
             <Link to='/fashion/jordan' className={styles.link}>
                Browse For More Jordan's →
             </Link>
        </div>
    </div>
  )
}

export default ShoeGrab