import React from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from './Router'

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

