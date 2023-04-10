import React, {useEffect, useState} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate, useSearchParams} from "react-router-dom"
import styles from "./Main.module.css"

const Main = ({url, type}) => {
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(null)
    const [sort, setSort] = useState(false)
    const typeCards = type
    const pageURL = +searchParams.get("page") ? +searchParams.get("page") : 1
    const navigate = useNavigate()

    const GetTalentsData = useGetTalentsQuery(
        {pageURL, typeCards, sort},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    useEffect(() => {
        if (!page) {
            navigate(`/${url}=${pageURL !== 0 ? pageURL : 1}`)
            setPage(+searchParams.get("page"))
        } else if (GetTalentsData.isError || isNaN(pageURL) === true) {
            navigate(`/${url}=1`)
            setPage(1)
        }
    }, [GetTalentsData.isError, navigate, page, pageURL, searchParams, url])

    return (
        <div className={styles.wrapper}>
            <CardsList
                GetTalentsData={GetTalentsData}
                className={styles.content}
                type={type}
                setSort={setSort}
                sort={sort}
            />
            <Pagination
                totalPages={GetTalentsData.data && GetTalentsData.data.totalPages}
                currentPage={pageURL}
                url={url}
                sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
            />
        </div>
    )
}

export {Main}
