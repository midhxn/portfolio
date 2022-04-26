import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />} />
  </Routes>
  </>
  );
}

export default App;