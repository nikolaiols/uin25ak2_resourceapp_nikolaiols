import { Link } from "react-router-dom";
import { resources } from "../components/ressurser.js"

export default function Resources( {Category} ){

    
    return(
        <>
     {/*bruke filter for å skrive ut fra arrayen*/}
     {console.log("jeg funker", Category)}
    <h2>{Category}</h2>
      {resources.map(resource => (
        <div key={resource.category}>
          <h3>{resource.title}</h3>
          <p>{resource.text}</p>
          <ul>
            {resource.sources.map(source => 
                <li key={1}>
                    <Link to={`${source.url}`}>{`${source.title}`}</Link>
                </li>)}
          </ul>
        </div>
      ))}
    </>

);

}
 