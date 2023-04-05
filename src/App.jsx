import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {SigninPopup} from "./components/SigninPopup"
import {SigninPopupContext} from "./context"
import { Footer } from "./components/Footer"

const App = () => {
    const [isRegistered] = useState(true)
    const [visibilitySigninPopup, setVisibilitySigninPopup] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header isRegistered={isRegistered} />
            <SigninPopupContext.Provider value={{setVisibilitySigninPopup}}>
                <Router isRegistered={isRegistered} />
            </SigninPopupContext.Provider>
            {visibilitySigninPopup && (
                <SigninPopup setVisibilitySigninPopup={setVisibilitySigninPopup} />
            )}
            <Footer />
        </ThemeProvider>
    )
}

export default App
