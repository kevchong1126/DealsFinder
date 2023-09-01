import React, { useState, useEffect } from 'react'
import styles from './View.module.scss';
import {useParams} from 'react-router-dom';

import MnHouseCards from '../cards/MnHouseCards';
import MnHouseSkeletons from '../skeleton/MnHouseSkeletons';
import Error from '../error/Error';


const View = () => {
    const [houseData, setHouseData] = useState([]);
    const [Empty, setEmpty] = useState(false);
    const {houseQuery} = useParams();

    useEffect(() => {
        setHouseData([]);
        setEmpty(false);

        const fetchData = async () => {
            const response = await fetch(`https://dealsfinder-backend.onrender.com/houses/${houseQuery}`);
            
            if (response.ok){
                const data = await response.json();

                if (data.data.length){
                    const result = data.data.filter( el => {
                        return (
                            !el.price.toLowerCase().includes('auction')
                        )
                    });

                    setHouseData(result);
                }else{
                    setEmpty(true);
                }
            }
        };

        fetchData();
    }, [houseQuery]);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.title}>
                    Looking For Houses In: 
                    <span className={styles.titleLocation}>{houseQuery}</span>
                </h3>
            </div>
            {
                Empty ? <Error page={'properties'} product={'locations'}/> : ''
            }
            {
                (!houseData.length && !Empty) ? <MnHouseSkeletons data={[1,1,1,1,1,1]}/> : ''
            }
            {
                houseData.length ? <MnHouseCards data={houseData}/> : ''
            }
        </div>
    </div>
  )
}

export default View