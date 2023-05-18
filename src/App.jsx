import React from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {useMode} from "./themeSettings/hooks"
import {ColorModeContext} from "./themeSettings"
import {useGetAvatarTalentQuery} from "./components/Avatar/api"
import {useJwtCheck} from "./shared/api/hooks"
import {Footer} from "./components/Footer/Footer"
import {Layout} from "./components/Layout"

const App = () => {
    const {data} = useJwtCheck()
    const AvatarIMG = useGetAvatarTalentQuery(data && data.id, {
        refetchOnMountOrArgChange: true,
    })

    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header AvatarIMG={AvatarIMG} />
                <Layout AvatarIMG={AvatarIMG} />
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
