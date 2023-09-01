import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

import Houses from './pages/Houses';
import View from './components/lists/View';

import Fashion from './pages/Fashion';
import FashionList from './components/lists/FashionList';

import Car from './pages/Car';
import CarList from './components/lists/CarList';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/houses' element={<Houses />}>
          <Route path=':houseQuery' element={<View />}>
            <Route path=':housePage' element={<View />} />
          </Route>
        </Route>

        <Route path='/fashion' element={<Fashion />}>
          <Route path=':fashionQuery' element={<FashionList />}>
            <Route path=':fashionPage' element={<FashionList />} />
          </Route>
        </Route>

        <Route path='/cars' element={<Car />}>
          <Route path=':carQuery' element={<CarList />}>
            <Route path=':carPage' element={<CarList />} />
          </Route>
        </Route>
        
        <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default AllRoutes