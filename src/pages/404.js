import React, { useState } from 'react'
import '../index.css'
import { Nav } from '../components/nav/nav'
import { Header } from '../components/header/header'
import courseData from '../data/courseData.json'

const NotFound = () => {

  return (
    <div className="App" style={{ display: 'flex' }}>
      <Nav />
      <div style={{ display: 'block', position: 'relative' }}>
        <Header />
        <div style={{ width: '300px', paddingLeft: '300px', paddingTop: '100px' }}>
          
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Mallard_Duck_Image.jpg'></img>
          
        
        </div>
      </div>
    </div>
  );
}

export default NotFound;
