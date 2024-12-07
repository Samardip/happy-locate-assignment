import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from '@mui/material';
const LazyLayoutContainer = React.lazy(() => import('./container/layoutContainer/layoutContainer'));
const SelectInventory = React.lazy(() => import('./components/selectInventoryPage/selectInventory'));
const AddInventoryPage = React.lazy(() => import('./components/addInventoryPage/addInventoryPage'));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense
            fallback={<div className="flex justify-center items-center min-h-[100vh] w-[100%]">
              <CircularProgress color="#0078D4" />
            </div>}>
            <LazyLayoutContainer />
          </Suspense>}>
          <Route path="/" element={<SelectInventory />} />
          <Route path="/inventory" element={<AddInventoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
