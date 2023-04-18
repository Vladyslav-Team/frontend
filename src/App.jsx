import React, {useState} from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Router} from "./Router"
import {SigninPopup} from "./components/SigninPopup"
import {SigninPopupContext} from "./context"
import {useGetAvatarTalentQuery} from "./components/Avatar/api"
import {useJwtCheck} from "./shared/api/hooks"
import {Footer} from "./components/Footer"

const App = () => {
    const [visibilitySigninPopup, setVisibilitySigninPopup] = useState({
        status: false,
        id: null,
        type: "talent",
    })
    const {data} = useJwtCheck()
    const AvatarIMG = useGetAvatarTalentQuery(data && data.id, {
        refetchOnMountOrArgChange: true,
    })
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
                    type={visibilitySigninPopup.type}
                />
            )}
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default App
