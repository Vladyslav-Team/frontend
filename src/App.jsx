import React from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <p>SkillScope</p>
        </ThemeProvider>
    )
}

export default App
