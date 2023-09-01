import React from 'react'
import styles from './Error.module.scss';

const Error = ({product, page}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Sorry, couldn't find any {page}</h1>
            <p>Try searching for other {product}</p>
        </div>
        
    </div>
  )
}

export default Error