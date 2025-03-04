import React from 'react';
import "../assets/styles/Nav.scss"
import {Link} from "react-router-dom"

export default function Nav(){
    return(
    
      <>
        
          <ul>
              <li className="navbar"><Link to="/html">HTML</Link></li>
              <li className="navbar"><Link to="/css">CSS</Link></li>
              <li className="navbar"><Link to="/javascript">JAVASCRIPT</Link></li>
              <li className="navbar"><Link to="/react">REACT</Link></li>
              <li className="navbar"><Link to="/sanity">SANITY & HEADLESS CMS</Link></li>
          </ul>
       
      </>
      
    );
}
