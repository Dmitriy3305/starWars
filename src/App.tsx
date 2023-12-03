import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import UncontrolledComponent from './components/uncontrolledComponent/uncontrolledComponent';
import Main from './components/main/main';
import React from 'react';
import ControlledComponent from './components/controlledComponent/controlledComponent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/uncontrolled-component"
          element={<UncontrolledComponent />}
        />
        <Route path="/controlled-component" element={<ControlledComponent />} />
      </Routes>
    </>
  );
}

export default App;
