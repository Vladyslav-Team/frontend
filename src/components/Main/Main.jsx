import React, {useEffect} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
import {CardsList} from "./CardsList"
import {useNavigate, useSearchParams} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {setPage} from "./Pagination/slices/pageSlice"
import styles from "./Main.module.css"

const Main = () => {
    const [searchParams] = useSearchParams()
    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()
    const GetTalentsData = useGetTalentsQuery(page)
    const pageURL = +searchParams.get("page") ? +searchParams.get("page") : 1
    const navigate = useNavigate()

    useEffect(() => {
        if (!page) {
            navigate(`/talents?page=${pageURL !== 0 ? pageURL : 1}`)
            dispatch(setPage(+searchParams.get("page")))
        } else if (GetTalentsData.isError || isNaN(pageURL) === true) {
            navigate("/talents?page=1")
            dispatch(setPage(1))
        } else {
            navigate(`/talents?page=${page}`)
        }
    }, [GetTalentsData.isError, dispatch, navigate, page, pageURL, searchParams])

    return (
        <div className={styles.wrapper}>
            <CardsList GetTalentsData={GetTalentsData} className={styles.content} />
            <Pagination
                totalPages={GetTalentsData.data && GetTalentsData.data.totalPages}
                currentPage={GetTalentsData.data && GetTalentsData.data.currentPage}
                sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
            />
        </div>
    )
}

export {Main}
