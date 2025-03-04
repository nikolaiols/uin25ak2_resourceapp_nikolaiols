import React from 'react';
import {Link} from "react-router-dom"

export default function Nav(){
    return(
    
      <>
        
          <ul>
              <button><li className="navbar"><Link to="/html">HTML</Link></li></button>
              <button><li className="navbar"><Link to="/css">CSS</Link></li></button>
              <button><li className="navbar"><Link to="/javascript">JAVASCRIPT</Link></li></button>
              <button><li className="navbar"><Link to="/react">REACT</Link></li></button>
              <button><li className="navbar"><Link to="/sanity">SANITY & HEADLESS CMS</Link></li></button>
          </ul>
       
      </>
      
    );
}
