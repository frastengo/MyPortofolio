import React from 'react';
import Header from './components/Header/Header'
import routes from './routes'
import Footer from './components/Footer/Footer'

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

export default App;
