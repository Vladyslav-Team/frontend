import {getColors} from "."

const themeSettings = (mode) => {
    const colors = getColors(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      primary: {
                          main: colors.black[900],
                      },
                      secondary: {
                          main: colors.mercury.DEFAULT,
                      },
                      neutral: {
                          main: colors.white[400],
                          secondary: colors.white[100],
                      },
                  }
                : {
                      primary: {
                          main: colors.blue.DEFAULT,
                      },
                      secondary: {
                          main: colors.white.DEFAULT,
                      },
                      neutral: {
                          main: colors.white.DEFAULT,
                          secondary: colors.white.DEFAULT,
                      },
                  }),
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
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        spacing: 5,
        shape: {
            borderRadius: 10,
        },
    }
}

export {themeSettings}
