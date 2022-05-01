import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router-dom'
import './App.scss';
import Layout from './components/Layout'

function App() {
  return (
  <>
  <Routes>
    <Routes path="/" element={<Layout />} />
  </Routes>
  </>
  );
}

export default App;