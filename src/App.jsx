<<<<<<< HEAD
import React from "react"
import {Header} from "./components/Header"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {Main} from "./components/Main/Main"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Main />
        </ThemeProvider>
    )
}

export default App
=======
import React, {useEffect, useState} from "react"
import {Header} from "./components/Header"
import {TalentCard} from "./components/CardsList/components/TalentCard"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {getTalent} from "./shared/api/services/getTalent"

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [talents, setTalents] = useState([])

    useEffect(() => {
        getTalent().then((data) => {
            setTalents(data)
            setIsLoaded(true)
        })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {isLoaded ? <TalentCard talent={talents[0]} /> : <div>Loading...</div>}
        </ThemeProvider>
    )
}

export default App
>>>>>>> dev
