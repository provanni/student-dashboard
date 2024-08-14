import React from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'


const NotFound = () => {

  return (
    <div className="App" style={{ display: 'flex' }}>
      <Nav />
      <div style={{ display: 'block', position: 'relative' }}>
        <Header />
        <div style={{ width: '300px', paddingLeft: '300px', paddingTop: '100px' }}>
          
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Mallard_Duck_Image.jpg' alt="Sketch of ducks."></img>
          
        
        </div>
      </div>
    </div>
  );
}

export default NotFound;
