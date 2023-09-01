import React from 'react'
import styles from './NormalHouseSkeletons.module.scss';
import NormalHouseSkeleton from './NormalHouseSkeleton';

const NormalHouseSkeletons = ({data}) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
            {   
                data.map((el, idx) => {
                    return (
                        <NormalHouseSkeleton key={idx}/>
                    )
                })
            }
      </div>
    </div>
  )
}

export default NormalHouseSkeletons