import React from 'react'
import Header from './components/Header.js';
import EmployeesData from './components/Data.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Data />
    </div>
  );
}
export default App;