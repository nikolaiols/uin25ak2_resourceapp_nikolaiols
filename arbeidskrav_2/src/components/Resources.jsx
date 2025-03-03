import React from "react"
import { resources } from "../components/ressurser.js"

export default function ResourceList({ category }){
    const FilRes = resources.filter(resources => resources.category === category)

    return (
        <>
       
        </>
    )
}