import {useState, useEffect, useRef} from "react";
import {createRoot} from 'react-dom/client'
import App from './App'

const root =createRoot(document.getElementById("root"))

root.render(<>
    <h1>Endgame</h1>
    <App/>
    </>)