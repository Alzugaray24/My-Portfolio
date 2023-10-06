import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Space from './components/Space'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App-content'>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </div>
      <Space />
      <Footer />
    </div>
  );
}

export default App;
