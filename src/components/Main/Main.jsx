import React, {useEffect, useState} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate, useSearchParams} from "react-router-dom"
import styles from "./Main.module.css"

const Main = () => {
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(null)
    const pageURL = +searchParams.get("page") ? +searchParams.get("page") : 1
    const GetTalentsData = useGetTalentsQuery(pageURL)
    const navigate = useNavigate()

    useEffect(() => {
        if (!page) {
            navigate(`/talents?page=${pageURL !== 0 ? pageURL : 1}`)
            setPage(+searchParams.get("page"))
        } else if (GetTalentsData.isError || isNaN(pageURL) === true) {
            navigate("/talents?page=1")
            setPage(1)
        }
    }, [GetTalentsData.isError, navigate, page, pageURL, searchParams])

    return (
        <div className={styles.wrapper}>
            <CardsList GetTalentsData={GetTalentsData} className={styles.content} />
            <Pagination
                totalPages={GetTalentsData.data && GetTalentsData.data.totalPages}
                currentPage={pageURL}
                sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
            />
        </div>
    )
}

export {Main}
