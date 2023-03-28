import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"

const App = () => {
    const [isRegistered] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header isRegistered={isRegistered} />
            <Router isRegistered={isRegistered} />
        </ThemeProvider>
    )
}

export default App
