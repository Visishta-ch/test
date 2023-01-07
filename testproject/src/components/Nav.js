import React from 'react'
import Model from './UI/Model'
import styles from './Nav.module.css'
import { AiOutlineClose } from "react-icons/ai";

const Nav = props => {
  return (
    <Model onClose={props.onClose}>
      <header className={styles["header-drawer"]}>
        <img src="images/logo.png" alt="log" />
        <AiOutlineClose
          className={styles.close}
          style={{ cursor: "pointer", position: "absolute", right: "0" }}
          size="18px"
          onClick={props.onClose}
        />
      </header>
      
      <hr/>
      <body>
        <div style={{backgroundColor:'rgba(193, 191, 191, 0.89)',padding:'15px', margin:'1px auto',fontWeight:'bold'}}>Dashboard</div>
        <ul style={{listStyle:'none',backgroundColor:'rgba(193, 193, 193)',padding:'10px 10px',margin:'1px auto'}}>
          <li key={Math.floor(Math.random()*100)+1} style={{fontWeight:'bold',padding:'15px'}} >Products</li>
          <li key={Math.floor(Math.random()*100)+1} >Master Products</li>
        </ul>

      </body>
      <footer className={styles["footer-drawer"]}>
      <hr/> 
      <p>All @Copyright: 2023</p>
      </footer>
    </Model>  
  )
}

export default Nav