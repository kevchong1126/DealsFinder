import React from 'react'
import styles from './NmShoeSkeletons.module.scss';
import NmShoeSkeleton from './NmShoeSkeleton';

const NmShoeSkeletons = ({data}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        { 
            data.map( (el,idx) => {
                return(
                    <NmShoeSkeleton key={idx}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default NmShoeSkeletons