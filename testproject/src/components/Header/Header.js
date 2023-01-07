import React from 'react'
import styles from './Header.module.css'
import { FiMenu } from 'react-icons/fi'
import { RxExit } from "react-icons/rx";
const Header = props => {
  return (
    <>
        <div className={styles.header}>
            <FiMenu style={{cursor: 'pointer'}} size="18px" onClick={props.onClick}/>
            <RxExit style={{cursor: 'pointer'}} size="18px"/>
        </div>
    </>
  )
}

export default Header