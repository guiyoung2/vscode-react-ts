import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import SideTapMenu from 'components/SideTapMenu';

function App() {
  return (
    <div className="App">
      <h1>홈 화면</h1>
      <Layout />
      <SideTapMenu />
    </div>
  );
}

export default App;
