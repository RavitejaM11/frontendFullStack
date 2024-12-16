import { createRoot } from 'react-dom/client'
import React from 'react'
import App from "./app"


const root = createRoot(document.getElementById("root"))

root.render(<>
    <h1>This is the homepage</h1>
    <p>This is para</p>
    <App />
    </>
)