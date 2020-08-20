import React from 'react';
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component.jsx'; 
import './App.css';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
