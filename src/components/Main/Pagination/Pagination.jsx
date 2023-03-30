import React, {useState, useEffect} from "react"
import {PaginationUI, WrapperPagination} from "./styles"
import {useDispatch} from "react-redux"
import {setPage} from "./slices/pageSlice"
const Pagination = ({totalPages, currentPage}) => {
    const [value, setValue] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        setValue(+currentPage)
        window.scroll({
            top: 100,
            left: 100,
            behavior: "smooth",
        })
    }, [value, currentPage])

    return (
        <WrapperPagination>
            <PaginationUI
                size="large"
                count={totalPages}
                page={value ? value : false}
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
