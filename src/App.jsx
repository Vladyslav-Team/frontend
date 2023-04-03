import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {LoginPopup} from "./components/LoginPopup"
import {LoginPopupContext} from "./context"

const App = () => {
    const [isRegistered] = useState(true)
    const [visibilityLoginPopup, setVisibilityLoginPopup] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header isRegistered={isRegistered} />
            <LoginPopupContext.Provider value={{setVisibilityLoginPopup}}>
                <Router isRegistered={isRegistered} />
            </LoginPopupContext.Provider>
            {visibilityLoginPopup && (
                <LoginPopup setVisibilityLoginPopup={setVisibilityLoginPopup} />
            )}
        </ThemeProvider>
    )
}

export default App
