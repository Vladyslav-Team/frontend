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
    const GetData = useGetTalentsQuery(
        {pageURL, typeCards, sort},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    useEffect(() => {
        if (!page) {
            if (!url) navigate("/proofs?page=1")
            else {
                navigate(`/${url}=${pageURL !== 0 ? pageURL : 1}`)
                setPage(+searchParams.get("page"))
            }
        } else if (GetData.isError || isNaN(pageURL) === true) {
            navigate(`/${url}=1`)
            setPage(1)
        }
    }, [GetData.isError, navigate, page, pageURL, searchParams, url])

    return (
        <div className={styles.wrapper}>
            <CardsList
                GetData={GetData}
                className={styles.content}
                type={type}
                setSort={setSort}
                sort={sort}
            />
            <Pagination
                totalPages={GetData.data && GetData.data.totalPages}
                currentPage={pageURL}
                url={url}
                sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
            />
        </div>
    )
}

export {Main}
