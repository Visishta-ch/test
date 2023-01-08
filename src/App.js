import Header from './components/Header/Header';
import ProductPage from './components/Products/ProductPage';
import React, {useState} from 'react'

import './App.css';
import Nav from './components/Nav';
function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  const showSideDrawerHandler = () => {
    setShowDrawer(true)
  }
  const closeSideDrawerHandler = () => {
    setShowDrawer(false)
  }
  return (
    <>
    {showDrawer && <Nav onClose={closeSideDrawerHandler}/>}
      <Header onClick={showSideDrawerHandler}/>
      <ProductPage />
  
    </>
  );
}

export default App;
