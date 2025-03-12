import { Link } from "react-router-dom";
import { resources } from "../components/ressurser.js"


export default function Resources( {Category} ){
    const filtered = resources.filter(
        resource => resource.category === Category
      );
      return (
        <article>
          <header>
            <h2>{Category}</h2>
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
 