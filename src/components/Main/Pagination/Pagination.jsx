import React from "react"
import Stack from "@mui/material/Stack"
import {PaginationUI, WrapperPagination} from "./styles"

const Pagination = ({setPage, totalPages}) => {
    return (
        <Stack spacing={2}>
            {/* <PaginationMUI
                size="large"
                sx={{
                    "& .MuiPaginationItem-root": {
                        typography: "pagination",
                    },
                }}
                count={44}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                color="primary"
                shape="rounded"
            /> */}

            <WrapperPagination>
                <PaginationUI
                    size="large"
                    count={totalPages}
                    siblingCount={1}
                    boundaryCount={1}
                    color="primary"
                    shape="rounded"
                    onChange={(e, value) => setPage(value)}
                />
            </WrapperPagination>
        </Stack>
    )
}

export {Pagination}
