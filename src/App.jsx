import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {LoginPopup} from "./components/LoginPopup"
import {LoginPopupContext} from "./context"

const App = () => {
    const [visibilityLoginPopup, setVisibilityLoginPopup] = useState({
        status: false,
        id: null,
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <LoginPopupContext.Provider value={{setVisibilityLoginPopup}}>
                <Router />
            </LoginPopupContext.Provider>
            {visibilityLoginPopup.status && (
                <LoginPopup
                    setVisibilityLoginPopup={setVisibilityLoginPopup}
                    id={visibilityLoginPopup.id}
                    status={visibilityLoginPopup.status}
                />
            )}
        </ThemeProvider>
    )
}

export default App
