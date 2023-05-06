import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {SigninPopup} from "./components/SigninPopup"
import {SigninPopupContext} from "./context"
import {useGetAvatarTalentQuery} from "./components/Avatar/api"
import {useJwtCheck} from "./shared/api/hooks"
import {Footer} from "./components/Footer/Footer"

const App = () => {
    const [visibilitySigninPopup, setVisibilitySigninPopup] = useState({
        status: false,
        id: null,
    })
    const {data} = useJwtCheck()

    const id = data && data.id
    const role = data && data.role === "ROLE_TALENT" ? "talent" : "sponsor"

    const AvatarIMG = useGetAvatarTalentQuery(
        {id, role},
        {
            refetchOnMountOrArgChange: true,
        }
    )
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header AvatarIMG={AvatarIMG} />
            <main>
                <SigninPopupContext.Provider value={{setVisibilitySigninPopup}}>
                    <Router AvatarIMG={AvatarIMG} />
                </SigninPopupContext.Provider>
                {visibilitySigninPopup.status && (
                    <SigninPopup
                        setVisibilitySigninPopup={setVisibilitySigninPopup}
                        id={visibilitySigninPopup.id}
                        status={visibilitySigninPopup.status}
                    />
                )}
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default App
