
import './App.css';

import Navbar from './components/Navbar'

import Home from './pages/Home'
import ListBeers from './pages/ListBeers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import Beer from './pages/Beer'
import ErrorPage from './pages/ErrorPage'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<ListBeers />} />
        <Route path='/beers/:beerId' element={<Beer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
