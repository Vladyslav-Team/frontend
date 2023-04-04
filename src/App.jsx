import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {SigninPopup} from "./components/SigninPopup"
import {SigninPopupContext} from "./context"

const App = () => {
    const [visibilitySigninPopup, setVisibilitySigninPopup] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <SigninPopupContext.Provider value={{setVisibilitySigninPopup}}>
                <Router />
            </SigninPopupContext.Provider>
            {visibilitySigninPopup && (
                <SigninPopup setVisibilitySigninPopup={setVisibilitySigninPopup} />
            )}
        </ThemeProvider>
    )
}

export default App
