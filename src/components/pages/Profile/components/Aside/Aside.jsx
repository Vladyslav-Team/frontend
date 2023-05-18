import React, {useState, useEffect} from "react"
import styles from "./Aside.module.css"
import {Content} from "./components/Content"
import {useGetProofsQuery} from "./components/Content/components/Proof/api"
import {useLocation, useNavigate} from "react-router"
import {Pagination} from "../../../../Main/Pagination"
import {useSearchParams} from "react-router-dom"
import {PopUpProof} from "./components/PopUpProof"
import {useJwtCheck} from "../../../../../shared/api/hooks"
import {Info} from "./components/Info"
import {AddProof} from "./components/AddProof"
import {Box} from "@mui/material"

const Aside = ({talent}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [isAddProofPoopUP, setAddProofPoopUP] = useState(false)
    const idTalent = +location.pathname.replace("/profile/", "")
    const pageURL = +searchParams.get("page")
    const {data} = useJwtCheck()
    const allProofs = useGetProofsQuery({idTalent, page: pageURL})
    const isPageNotZero = (allProofs.data && allProofs.data.totalPages) > 1

    useEffect(() => {
        if (allProofs.isError || isNaN(pageURL) === true) {
            navigate(`/profile/${idTalent}`)
        }
    }, [allProofs.isError, idTalent, navigate, pageURL, searchParams])

    return (
        <Box className={styles.wrapper}>
            <Info talent={talent} />
            {data.id && (
                <AddProof
                    idTalent={idTalent}
                    localTalentID={data.id}
                    setPoopUP={setAddProofPoopUP}
                />
            )}
            {!allProofs.isError && <Content allProofs={allProofs.data && allProofs} />}
            <PopUpProof
                vis={isAddProofPoopUP}
                setVis={setAddProofPoopUP}
                allProofsRefetch={allProofs.refetch}
            />
            {isPageNotZero && (
                <Pagination
                    totalPages={allProofs.data && allProofs.data.totalPages}
                    currentPage={pageURL}
                    url={`profile/${idTalent}?page`}
                    sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
                />
            )}
        </Box>
    )
}

export {Aside}
