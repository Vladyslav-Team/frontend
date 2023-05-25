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
                          main: colors.white[600],
                          secondary: colors.white[100],
                          black: colors.black.DEFAULT,
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
                          black: colors.black.DEFAULT,
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
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        color: mode === "dark" ? "#000000" : "#ffffff",
                        backgroundColor: mode === "dark" ? "#efefef" : "none",
                        "&:hover": {
                            backgroundColor: mode === "dark" ? "#a4a4a4" : "none",
                        },
                    },
                    outlined: {
                        color: mode === "dark" ? "#efefef" : "#0a6e9a",
                        backgroundColor: mode === "dark" ? "#313131" : "none",
                        border: `1px solid ${mode === "dark" ? "#efefef" : "#0a6e9a"}`,
                        "&:hover": {
                            border: `1px solid ${
                                mode === "dark" ? "#ffffff" : "#0a6e9a"
                            }`,
                        },
                    },
                },
            },
            // MuiChip: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: colors.blue.DEFAULT,
            //         },
            //     },
            // },
        },
    }
}

export {themeSettings}
