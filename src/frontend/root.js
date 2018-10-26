import React from "react"
import {render} from "react-dom"
// import App from "./src/App.js"
import App from './src/components/App/App'

console.log(<div>hello </div>)
render(
    <App/>,
    document.querySelector("#root")
)

