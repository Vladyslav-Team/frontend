import {createTheme} from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            dark: "#005079",
            main: "#0a6f9a",
            light: "#57bad8",
        },
        secondary: {
            dark: "#047d62",
            main: "#0a9a7d",
            light: "#50b9a2",
        },
    },
    typography: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
        pagination: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
        button: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
    },
    spacing: 5,
    shape: {
        borderRadius: 10,
    },
})

export {theme}
