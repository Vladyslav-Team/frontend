import React, {useState} from "react"
import {Pagination} from "./Pagination"
import {useGetTalentsQuery} from "./Pagination/api/services"
const Main = () => {
    const [page, setPage] = useState(1)
    const {data} = useGetTalentsQuery(page)

    return (
        <div>
            <p>{data && data.talents[0].name}</p>
            <Pagination setPage={setPage} />
        </div>
    )
}

export {Main}
