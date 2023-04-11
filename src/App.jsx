import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {SigninPopup} from "./components/SigninPopup"
import {SigninPopupContext} from "./context"

const App = () => {
    const [visibilitySigninPopup, setVisibilitySigninPopup] = useState({
        status: false,
        id: null,
        type: "talent",
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <SigninPopupContext.Provider value={{setVisibilitySigninPopup}}>
                <Router />
            </SigninPopupContext.Provider>
            {visibilitySigninPopup.status && (
                <SigninPopup
                    setVisibilitySigninPopup={setVisibilitySigninPopup}
                    id={visibilitySigninPopup.id}
                    status={visibilitySigninPopup.status}
                    type={visibilitySigninPopup.type}
                />
            )}
        </ThemeProvider>
    )
}

export default App
