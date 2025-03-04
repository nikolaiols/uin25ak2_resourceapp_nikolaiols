
import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes} from "react-router-dom";
import Resources from './components/Resources';
import Layout from "./components/Layout"
import "./assets/styles/test.scss"


function App() {
  return (
    <>
    <Router>
    <Layout/>
  
  <Routes>
    <Route path="/html" element={<Resources Category="HTML" />} />
    <Route path="/css" element={<Resources Category="CSS" />} />
    <Route path="/javascript" element={<Resources Category="JavaScript"/>} />
    <Route path="/react" element={<Resources Category="React" />} />
    <Route path="/sanity" element={<Resources Category="Sanity and headless CMS"/>} />
  </Routes>
  </Router>

 
  </>
  );
}

export default App
