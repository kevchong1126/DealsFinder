import React, { useState, useEffect } from 'react'
import styles from  './CarList.module.scss';
import { useParams } from 'react-router-dom';

import MnCarCards from '../cards/MnCarCards';
import MnCarSkeletons from '../skeleton/MnCarSkeletons';
import Error from '../error/Error';


const CarList = () => {
    const [ carData, setCarData ] = useState([]);
    const { carQuery } = useParams();
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        setCarData([]);
        setEmpty(false);

        const fetchData = async () => {//https://dealsfinder-backend.onrender.com
            const response = await fetch(`/cars/${carQuery}`);

            if (response.ok){
                const data = await response.json();
                console.log(data);
                if (Array.isArray(data.data) && data.data.length){
                    setCarData(data.data);
                    
                }else{
                    setEmpty(true)
                }
                
            }
        };

        fetchData();
    }, [carQuery]);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Searching: 
                "<span>{carQuery}</span>"
            </h1>
            {
                empty ? <Error page={'cars'} product={'models'}/> : ''
            }
            {
                (!carData.length && !empty) ? <MnCarSkeletons data={[1,1,1,1]}/> : ''
            }
            {
                carData.length ? <MnCarCards data={carData}/> : ''
            }
        </div>
    </div>
  )
}

export default CarList