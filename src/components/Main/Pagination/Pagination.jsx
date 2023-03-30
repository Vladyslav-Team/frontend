import React, {useState, useEffect} from "react"
import {PaginationUI, WrapperPagination} from "./styles"
import {useDispatch} from "react-redux"
import {setPage} from "./slices/pageSlice"
const Pagination = ({totalPages, currentPage}) => {
    const [value, setValue] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        setValue(+currentPage)
    }, [value, currentPage])

    const handleChange = (e, value) => {
        dispatch(setPage(value))
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <WrapperPagination>
            <PaginationUI
                size="medium"
                count={totalPages}
                page={value ? value : 2}
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
