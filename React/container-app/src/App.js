import React from 'react';
import './App.css';
import MicrofrontEnd  from './MicrofrontEnd';

function App() {
  let host = process.env.REACT_APP_TABLE_HOST;
  return (
    <div>
      <MicrofrontEnd host={host} name="Table"/>
    </div>
    
  );
}

export default App;
