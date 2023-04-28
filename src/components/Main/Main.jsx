import React, {useEffect, useState} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate, useSearchParams} from "react-router-dom"
import styles from "./Main.module.css"

const redirectReset = (type, pageURL, url, navigate, setPage, sortURL) => {
    if (type === "sort") {
        navigate(`/${url}=${pageURL !== 0 ? pageURL : 1}&sort=${sortURL}`)
        setPage(pageURL)
    } else if (type === null) {
        navigate(`/${url}=${pageURL !== 0 ? pageURL : 1}`)
        setPage(pageURL)
    }
}

const forAllCard = (page, url, setPage, pageURL, isError, navigate, type, sortURL) => {
    if (!page) {
        if (!url) {
            navigate("/talents?page=1")
        } else {
            redirectReset(type, pageURL, url, navigate, setPage, sortURL)
        }
    } else if (isError || isNaN(pageURL) === true) {
        if (type === "sort") {
            navigate(`/${url}=1&sort=newest`)
        } else {
            navigate(`/${url}=1`)
            setPage(1)
        }
    }
}

const Main = ({url, type}) => {
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(null)
    const typeCards = type
    const pageURL = +searchParams.get("page") ? +searchParams.get("page") : 1
    const sortURL = searchParams.get("sort") && searchParams.get("sort")

    const navigate = useNavigate()
    const GetData = useGetTalentsQuery(
        {pageURL, typeCards, sortURL},
        {
            refetchOnMountOrArgChange: true,
        }
    )
    useEffect(() => {
        if (type === "proofs") {
            forAllCard(
                page,
                url,
                setPage,
                pageURL,
                GetData.isError,
                navigate,
                "sort",
                sortURL
            )
        } else if (type === "talents") {
            forAllCard(page, url, setPage, pageURL, GetData.isError, navigate, null)
        } else {
            navigate("/talents?page=1")
        }
    }, [GetData.isError, navigate, page, pageURL, searchParams, sortURL, type, url])

    return (
        <div className={styles.wrapper}>
            <CardsList GetData={GetData} className={styles.content} type={type} />
            <Pagination
                totalPages={GetData.data && GetData.data.totalPages}
                currentPage={pageURL}
                url={url}
                sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
                sort={sortURL}
            />
        </div>
    )
}

export {Main}
