import { Link } from "react-router-dom";
import { resources } from "../components/ressurser.js"
import PageTitle from "./PageTitle.jsx";


export default function Resources( {Category} ){
    const filtered = resources.filter(
        resource => resource.category === Category
      );
      return (
        <article>
          <header>
            <PageTitle Category={Category}/>
          </header>
          <section>
            <ul>
              {filtered.map((resource, index) => (
                <li key={index}>
                  <Link to={resource.url}>{resource.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      );

}
 