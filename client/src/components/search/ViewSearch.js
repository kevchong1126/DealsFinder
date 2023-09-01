import React, {useState, useEffect} from 'react'
import styles from './ViewSearch.module.scss';
import {locations} from '../../data/jsonHt';
import { Link } from 'react-router-dom';

const ViewSearch = () => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(locations);

  useEffect(() => {
    const arr = locations.filter( el => {
      return (
        el.toLowerCase().split('-').join(' ').includes(query.toLowerCase().trim())
      )
    });

    setFiltered(arr)
  }, [query]);

  const queryHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <form className={styles.form}>
                <input className={styles.input} placeholder='Type Suburb, State, Code...' value={query} onChange={queryHandler}/>
            </form>  
            <ul className={styles.locationList}>
                {
                  filtered.length ?
                  filtered
                  .map((el, idx) => <Link className={styles.location} to={`${el}`} key={idx}>{el}</Link>) 
                  : ''
                }
            </ul>
        </div>
    </div>
  )
}

export default ViewSearch