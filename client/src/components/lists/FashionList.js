import React, { useState, useEffect } from 'react'
import styles from './FashionList.module.scss';
import { useParams } from 'react-router-dom';
import {options} from '../../data/fetchParam';
import {sortShoes} from '../../util/sortProducts';

import NmShoeCards from '../cards/NmShoeCards';
import NmShoeSkeletons from '../skeleton/NmShoeSkeletons';
import Error from '../error/Error';

const FashionList = () => {
    const { fashionQuery } = useParams();
    const [shoeData, setShoeData] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
      setEmpty(false)
      setShoeData([]);

      const fetchData = async () => {
        const response = await fetch(`https://dealsfinder-backend.onrender.com/fashion/${fashionQuery}`, {...options, body : JSON.stringify({body: "Posting"})});
        
        if (response.ok){
          const data = await response.json();

          if (data.data.length){
            const sorted = sortShoes(data.data);
            
            setShoeData(sorted);
          }else{
            setEmpty(true);
          }
        }
      };

      fetchData();
    }, [fashionQuery])
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Searching "<span>{fashionQuery}</span>"
          </h1>
          {
            empty ? <Error product={'products'} page={'items'}/> : ''
          }
          {
            (!shoeData.length && !empty) ? <NmShoeSkeletons data={[1,1,1,1,1,1,1,1,1,1,1]}/> : ''
          }
          {
            shoeData.length ? <NmShoeCards data={shoeData} /> : ''
          }
        </div>
    </div>
  )
}

export default FashionList