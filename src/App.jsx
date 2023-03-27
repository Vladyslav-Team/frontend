import React from "react"
import {Header} from "./components/Header"
import {Router} from "./Router"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Router />
        </ThemeProvider>
    )
}

export default App
