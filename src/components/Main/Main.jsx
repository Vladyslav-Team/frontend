import React, {useEffect} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

const Main = () => {
    const page = useSelector((state) => state.page.value)
    const GetTalentsData = useGetTalentsQuery(page)

    const navigate = useNavigate()
    useEffect(() => {
        navigate(`/talents?page=${page}`)
    }, [navigate, page])

    return (
        <>
            <CardsList GetTalentsData={GetTalentsData} />
            <Pagination
                totalPages={GetTalentsData.data && GetTalentsData.data.totalPages}
                currentPage={GetTalentsData.data && GetTalentsData.data.currentPage}
            />
        </>
    )
}

export {Main}
