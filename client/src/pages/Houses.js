import React from 'react'
import styles from './Houses.module.scss';
import {Link, Outlet} from 'react-router-dom';

import ViewSearch from '../components/search/ViewSearch';

const Houses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <ViewSearch />
          <Outlet />
      </div>
        
    </div>
  )
}

export default Houses