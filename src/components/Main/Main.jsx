import React, {useEffect, useState} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate, useSearchParams} from "react-router-dom"
import styles from "./Main.module.css"

const redirectReset = (type, pageURL, url, navigate, setPage, skills) => {
    if (type === "sort") {
        navigate(`/${url}=${pageURL !== 0 ? pageURL : 1}&sort=newest`)
        setPage(pageURL)
    } else if (type === null) {
        navigate(
            `/${url}=${pageURL !== 0 ? pageURL : 1}&filterBySkills=${window.location.href
                .split("&")[1]
                .split("=")[1]
                .split(",")}`
        )
        setPage(pageURL)
    }
}

const forAllCard = (page, url, setPage, pageURL, isError, navigate, type, skills) => {
    if (!page) {
        if (!url) {
            navigate("/talents?page=1&filterBySkills=nofilter")
        } else {
            redirectReset(type, pageURL, url, navigate, setPage, skills)
        }
    } else if (isError || isNaN(pageURL) === true) {
        if (type === "sort") {
            navigate(`/${url}=1&sort=newest`)
        } else {
            //navigate(`/${url}=1&filterBySkills=nofilter`)
            setPage(1)
        }
    }
}

const Main = ({url, type}) => {
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState(null)
    const [sort, setSort] = useState(false)

    console.log(window.location.href.split("&")[0])
    const skills =
        window.location.href.split("&")[1] &&
        window.location.href.split("&")[1].includes("=") &&
        window.location.href.split("&")[1].split("=")[1] &&
        window.location.href.split("&")[1].split("=")[1] !== "nofilter"
            ? window.location.href.split("&")[1].split("=")[1].split(",")
            : []

    const typeCards = type
    const pageURL = +searchParams.get("page") ? +searchParams.get("page") : 1
    const sortURL = searchParams.get("sort") && searchParams.get("sort")

    const navigate = useNavigate()
    const GetData = useGetTalentsQuery(
        {pageURL, typeCards, sortURL, skills},
        {
            refetchOnMountOrArgChange: true,
        }
    )
    console.log(searchParams.get("filterBySkills") === null)
    useEffect(() => {
        if (
            (type === "talents" && searchParams.get("filterBySkills") === null) ||
            searchParams.get("filterBySkills") === ""
        ) {
            navigate(
                `/talents?page=${pageURL !== 0 ? pageURL : 1}&filterBySkills=nofilter`
            )
        }
        if (type === "proofs") {
            forAllCard(page, url, setPage, pageURL, GetData.isError, navigate, "sort")
        } else if (type === "talents") {
            forAllCard(page, url, setPage, pageURL, GetData.isError, navigate, null)
        } else {
            navigate(
                `/talents?page=${pageURL !== 0 ? pageURL : 1}&filterBySkills=nofilter`
            )
        }
    }, [GetData.isError, navigate, page, pageURL, searchParams, type, url])

    return (
        <div className={styles.wrapper}>
            <CardsList
                GetData={GetData}
                className={styles.content}
                type={type}
                setSort={setSort}
                sort={sort}
                skills={skills}
            />
            {GetData.isSuccess && (
                <Pagination
                    totalPages={GetData.data && GetData.data.totalPages}
                    currentPage={pageURL}
                    url={url}
                    sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
                    sort={sortURL}
                />
            )}
        </div>
    )
}

export {Main}
