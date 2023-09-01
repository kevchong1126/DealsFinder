import React from 'react'
import styles from './MnHouseSkeletons.module.scss';
import MnHouseSkeleton from './MnHouseSkeleton';

const MnHouseSkeletons = ({data}) => {
  return (
    <div className={styles.container}>
        {
            data.map( (el, idx) => {
                return (
                    <MnHouseSkeleton key={idx}/>
                )
            })
        }
    </div>
  )
}

export default MnHouseSkeletons