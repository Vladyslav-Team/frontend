import {CssBaseline, ThemeProvider} from "@mui/material"
import React from "react"
import {theme} from "./Theme"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <p>SkillScope</p>
        </ThemeProvider>
    )
}

export default App
