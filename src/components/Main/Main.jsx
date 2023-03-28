import React, {useState, useEffect} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate} from "react-router-dom"

const Main = () => {
    const [page, setPage] = useState(1)
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
                setPage={setPage}
            />
        </>
    )
}

export {Main}
