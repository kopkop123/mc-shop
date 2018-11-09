import React from "react"
import {render} from "react-dom"
import {BrowserRouter} from 'react-router-dom'
// import App from "./src/App.js"
import App from './components/App/App'

console.log(<div>hello </div>)
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector("#root")
)

