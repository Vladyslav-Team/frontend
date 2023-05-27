import {createTheme} from "@mui/material"
import {useMemo, useState, useEffect} from "react"
import {themeSettings} from "../index"

const useMode = () => {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light")

    useEffect(() => {
        localStorage.setItem("mode", mode)
    }, [mode])

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}

export {useMode}
