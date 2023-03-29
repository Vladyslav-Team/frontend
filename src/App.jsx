import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {ProfileSidebar} from "./components/ProfileSidebar/ProfileSidebar"

const App = () => {
    const [isRegistered] = useState(true)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {isRegistered && <ProfileSidebar />}
            <Router />
        </ThemeProvider>
    )
}

export default App
