import React, {useState, useEffect} from "react"
import {PaginationUI, WrapperPagination} from "./styles"
import {useNavigate} from "react-router-dom"

const Pagination = ({totalPages, currentPage, url, sort = null}) => {
    const [value, setValue] = useState(null)
    const navigate = useNavigate()
    const defaultSort = sort !== false ? sort : "newest"
    const sortParams = `${sort !== null ? `&sort=${defaultSort}` : ""}`

    useEffect(() => {
        setValue(+currentPage)
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, [value, currentPage])

    const handleChange = (e, value) => {
        navigate(`/${url}=${value}${sortParams}`)
    }

    return (
        <WrapperPagination>
            <PaginationUI
                size="medium"
                count={totalPages}
                page={currentPage}
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
