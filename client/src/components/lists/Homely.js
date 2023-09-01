import React, {useState, useEffect} from 'react'
import styles from './Homely.module.scss';
import {Link} from 'react-router-dom';

import NormalHouseCards from '../cards/NormalHouseCards';
import NormalHouseSkeletons from '../skeleton/NormalHouseSkeletons';

const Homely = () => {
    const [houseData, setHouseData] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch('https://dealsfinder-backend.onrender.com/home');

            if (response.ok){
                const data = await response.json();
    
                const result = data.data.filter(el => {
                const lowerCase = el.price.toLowerCase();
                    
                    return !lowerCase.includes('agent') && 
                            !lowerCase.includes('negotiate') && 
                            !lowerCase.includes('contract') &&
                            !lowerCase.includes('quality') && 
                            !lowerCase.includes('auction')
                });
                setHouseData(result); 

            }
        };
        fetchHouses();  
    }, []);


  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.header}> Top picks in SYDNEY CBD, NSW 2000</h3>
            {
                !houseData.length ? <NormalHouseSkeletons data={[1,1,1,1,1,1,1,1,1]}/> : ''
            }
            {
                houseData.length ? <NormalHouseCards data={houseData.slice(0,10)} /> : ''
            }
            <Link className={styles.link} to='/houses/Sydney-NSW-2000'>
                Search NSW properties for sale →
            </Link>
        </div>
    </div>
  )
}

export default Homely