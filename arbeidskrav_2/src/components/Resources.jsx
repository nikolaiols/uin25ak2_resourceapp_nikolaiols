import React from "react"
import { resources } from "../components/ressurser.js"

export default function ResourceList({ category }){
    const FilRes = resources.filter(resources => resources.category === category)

    return (
        <>
        <h2>{resources.category}</h2>
        <ul>
            {FilRes.map((resource, index)=> (
                <li key={index}>
                    <a href={resource.link}target="blank">
                        {resource.title}
                        {resource.category}
                    </a>
                </li>
            ))}
        </ul>
        </>
    )
}