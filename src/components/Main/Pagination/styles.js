import {alpha, styled} from "@mui/material/styles"
import Pagination from "@mui/material/Pagination"

export const WrapperPagination = styled("div")(({theme}) => ({
    marginTop: "15px",
    width: "max-content",
    border: "0.4px solid #A4A7A7",
    borderRadius: "11px",
    boxShadow: "1px 2px 30px 0px rgba(0,0,0,0.24)",
    overflow: "hidden",
    position: "relative",
    backgroundColor:
        theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.neutral.main,
    left: "50%",
    transform: "translate(-50%,0)",
    bottom: 0,
}))
export const PaginationUI = styled(Pagination)(({theme}) => ({
    "& .MuiPaginationItem-root": {
        fontFamily: theme.typography.fontFamily,
        borderRadius: "0",
        "&.Mui-selected": {
            background: "none",
            color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
            border: `0.4px solid ${
                theme.palette.mode === "dark" ? "#ffffff" : theme.palette.primary.main
            }`,
        },
        "&.Mui-selected:hover": {
            backgroundColor: `${alpha(
                theme.palette.mode === "dark" ? "#ffffff" : theme.palette.primary.main,
                0.6
            )}`,
            color: "#fff",
        },
        "&:hover": {
            backgroundColor: `${alpha(
                theme.palette.mode === "dark" ? "#ffffff" : theme.palette.primary.main,
                0.2
            )}`,
            color: "#000",
        },
        "&:active": {
            backgroundColor: `${alpha(
                theme.palette.mode === "dark" ? "#ffffff" : theme.palette.primary.main,
                0.6
            )}`,
            color: "#fff",
        },
        "&.MuiPaginationItem-previousNext ": {
            margin: "0",
        },
    },
}))
