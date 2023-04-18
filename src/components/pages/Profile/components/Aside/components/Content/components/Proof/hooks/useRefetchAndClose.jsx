import {useEffect} from "react"

const useRefetchAndClose = (result, setVis, refetch) => {
    useEffect(() => {
        if (result.data) {
            refetch()
            setVis(false)
        }
    }, [refetch, result, setVis])
}

export {useRefetchAndClose}
