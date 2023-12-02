import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import UncontrolledComponent from './components/uncontrolledComponent/uncontrolledComponent';
import Main from './components/main/main';

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
      </Routes>
    </>
  );
}

export default App;
