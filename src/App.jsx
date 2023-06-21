import React from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {useMode} from "./themeSettings/hooks"
import {ColorModeContext} from "./themeSettings"
import {useGetUserAvatarQuery} from "./components/Avatar/api"
import {useJwtCheck} from "./shared/api/hooks"
import {Footer} from "./components/Footer/Footer"
import {Layout} from "./components/Layout"
import {useLocation, useNavigate} from "react-router-dom"
import {Payment} from "./components/Payment"
  
const App = () => { 
    const {data} = useJwtCheck()
    const id = data && data.id
    const role = data && data.scope === "ROLE_TALENT" ? "talent" : "sponsor"
    const [theme, colorMode] = useMode()
    const location = useLocation()
    const navigate = useNavigate()
    const AvatarIMG = useGetUserAvatarQuery(
        {id, role},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    if (location.pathname === "/cancel") {
        navigate("../")
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            {location.pathname !== "/capture" ? (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header AvatarIMG={AvatarIMG} />
                    <Layout AvatarIMG={AvatarIMG} />
                    <Footer />
                </ThemeProvider>
            ) : (
                <Payment />
            )}
        </ColorModeContext.Provider>
    )
}

export default App
