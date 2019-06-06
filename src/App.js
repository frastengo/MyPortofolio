import React from 'react';
import Header from './components/Header/Header'
import routes from './routes'
import Footer from './components/Footer/Footer'
import { withRouter } from 'react-router-dom'

import './App.scss';

function App() {
  
  return (
    <div className="App">
        <Header />
      
        
        
        {routes}
        
        <Footer/>
    </div>
  );
}

export default withRouter(App);
