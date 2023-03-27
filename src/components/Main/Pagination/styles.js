import {alpha, styled} from "@mui/material/styles"
import Pagination from "@mui/material/Pagination"

export const WrapperPagination = styled("div")(() => ({
    width: "max-content",
    border: "0.4px solid #A4A7A7",
    borderRadius: "11px",
    boxShadow: "1px 2px 30px 0px rgba(0,0,0,0.24)",
    overflow: "hidden",
    position: "fixed",
    left: "50%",
    transform: "translate(-50%,0)",
    bottom: 0,
}))
export const PaginationUI = styled(Pagination)(({theme}) => ({
    "& .MuiPaginationItem-root": {
        fontFamily: theme.typography.pagination.fontFamily,
        borderRadius: "0",
        "&.Mui-selected": {
            background: "none",
            color: theme.palette.primary.main,
            border: `0.4px solid ${theme.palette.primary.main}`,
        },
        "&.Mui-selected:hover": {
            backgroundColor: `${alpha(theme.palette.primary.main, 0.6)}`,
            color: "#fff",
        },
        "&:hover": {
            backgroundColor: `${alpha(theme.palette.primary.main, 0.2)}`,
            color: "#000",
        },
        "&:active": {
            backgroundColor: `${alpha(theme.palette.primary.main, 0.6)}`,
            color: "#fff",
        },
        "&.MuiPaginationItem-previousNext ": {
            margin: "0",
        },
    },
}))
