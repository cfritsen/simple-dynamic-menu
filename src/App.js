
import React from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import linkData from './components/navlinks.json'
import NavRoutes from './components/navRoutes.js'
import NavMenu from './components/navMenu.js'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavMenu linkData={linkData} className='navbar' /> {/* The class 'navbar' is default. 'navbar-home' has special functionality. */}
        <NavRoutes linkData={linkData} /> {/* We pass the menu data to the routing component to create links. */}
      </BrowserRouter>
    </div>
  );
}

export default App;
