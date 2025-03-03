
import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes} from "react-router-dom";
import Nav from './components/Nav';
import Resources from './components/Resources';
import Layout from "./components/Layout"


function App() {

  return (
    <>
    <Router>
    <Layout/>
  
  <Routes>
    <Route path="/html" element={<Resources Category="html" />} />
    <Route path="/css" element={<Resources Category="css" />} />
    <Route path="/javascript" element={<Resources Category="javascript"/>} />
    <Route path="/react" element={<Resources Category="react" />} />
    <Route path="/sanity" element={<Resources Category="headless-cms"/>} />
  </Routes>
  </Router>

 
  </>
  );
}

export default App
