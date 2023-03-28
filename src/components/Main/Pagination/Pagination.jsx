import React from "react"
import {PaginationUI, WrapperPagination} from "./styles"
import {useDispatch} from "react-redux"
import {setPage} from "./slices/pageSlice"
const Pagination = ({totalPages, currentPage}) => {
    const dispatch = useDispatch()
    return (
        <WrapperPagination>
            <PaginationUI
                size="large"
                count={totalPages}
                page={currentPage}
                siblingCount={1}
                boundaryCount={1}
                color="primary"
                shape="rounded"
                onChange={(e, value) => dispatch(setPage(value))}
            />
        </WrapperPagination>
    )
}

export {Pagination}
