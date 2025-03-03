
import './App.css'
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./components/Nav";
import Resources from './components/Resources';
import Nav from './components/Nav';



function App() {

  return (
    <>
    <Nav/>
    <Router>
    <Routes>
    <Route path="/html" element={<Resources Category="html" />} />
    <Route path="/css" element={<Resources Category="css" />} />
    <Route path="/javascript" element={<Resources Category="javascript"/>} />
    <Route path="/react" element={<Resources Category="react" />} />
    <Route path="/sanity" element={<Resources Category="headless-cms"/>} />
  </Routes>
  </Router>
  </>
  )
}

export default App
