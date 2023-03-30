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
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, [value, currentPage])

    const handleChange = (e, value) => {
        dispatch(setPage(value))
    }

    return (
        <WrapperPagination>
            <PaginationUI
                size="medium"
                count={totalPages}
                page={value ? value : false}
                siblingCount={1}
                boundaryCount={1}
                color="primary"
                shape="rounded"
                onChange={handleChange}
            />
        </WrapperPagination>
    )
}

export {Pagination}
