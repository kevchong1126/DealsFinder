import React from 'react'
import styles from './Navbar.module.scss';
import Logo from '../../img/logo.svg';
import Menu from './Menu';

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={Logo} alt='logo'/>
        </div>
        
        
        <Menu />
        <a className={styles.author} href='https://www.linkedin.com/in/kevin-chong-ng-49478526a/' target='_blank'>
          
        </a>
      </div>
      
    </div>
  )
}

export default Navbar