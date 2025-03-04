import { Link } from "react-router-dom";
import { resources } from "../components/ressurser.js"


export default function Resources( {Category} ){
    const filtered = resources.filter(
        resource => resource.category === Category
      );
    return(
        <>
     {/*bruke filter for å skrive ut fra arrayen*/}
     {console.log("jeg funker", Category)}
     {console.log(filtered)}
   
        
      {filtered.map(resource => (
        <article key={resource.category}>
             <h2>{Category}</h2>
          <h3>{resource.title}</h3>
          <p>{resource.text}</p>
          <ul>
            {resource.sources.map(source => 
                <li key={source.title}>
                    <Link to={`${source.url}`}>{`${source.title}`}</Link>
                </li>)}
          </ul>
        </article>
      ))}
    </>

);

}
 