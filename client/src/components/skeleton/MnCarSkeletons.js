import React from 'react'
import styles from './MnCarSkeletons.module.scss';
import MnCarSkeleton from './MnCarSkeleton';

const MnCarSkeletons = ({data}) => {
  return (
    <div className={styles.container}>
        {
            data.map((el,idx) => {
                return (
                    <MnCarSkeleton key={idx} />
                )
            })
        }
    </div>
  )
}

export default MnCarSkeletons