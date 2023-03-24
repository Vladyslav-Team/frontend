import React, {useEffect, useState} from "react"
import {Header} from "./components/Header"
import {TalentCard} from "./components/CardsList/components/TalentCard"
import {CssBaseline, ThemeProvider} from "@mui/material"
import {theme} from "./Theme"
import {MockInit} from "./shared/api/mock/mock"
import axios from "axios"

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [talents, setTalents] = useState([])

    MockInit()

    useEffect(() => {
        axios
            .get("/talents")
            .then((response) => {
                setTalents(response.data)
                setIsLoaded(true)
            })
            .catch(() => {})
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
