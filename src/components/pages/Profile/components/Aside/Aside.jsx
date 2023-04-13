import React, {useState, useEffect} from "react"
import styles from "./Aside.module.css"
import {Content} from "./components/Content"
import {Place} from "@mui/icons-material"
import {Biography} from "./components/Biography"
import Button from "@mui/material/Button"
import {useAddProofMutation} from "../../api"
import {useGetProofsQuery} from "./components/Content/components/Proof/api"
import {useLocation, useNavigate} from "react-router"
import {Pagination} from "../../../../Main/Pagination"
import {useSearchParams} from "react-router-dom"
import {PopUpProof} from "./components/PopUpProof"

const Aside = ({talent}) => {
    const location = useLocation()
    const idTalent = location.pathname.replace("/profile/", "")
    const [searchParams] = useSearchParams()
    const pageURL = +searchParams.get("page")
    const [isAddProofPoopUP, setAddProofPoopUP] = useState(false)
    const allProofs = useGetProofsQuery({idTalent, page: pageURL})
    const navigate = useNavigate()
    const handelAdd = () => {
        setAddProofPoopUP(true)
    }

    useEffect(() => {
        if (allProofs.isError || isNaN(pageURL) === true) {
            navigate(`/profile/${idTalent}?page=1`)
        }
    }, [allProofs.isError, idTalent, navigate, pageURL, searchParams])
    console.log(isAddProofPoopUP)
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.generalInfo}>
                    <div className={styles.name}>
                        {`${talent.name} ${talent.surname}`}
                    </div>
                    <div className={styles.location}>
                        <span>{talent.location}</span> <Place color="primary" />
                    </div>
                </div>
                <div className={styles.experience}>
                    <span>{talent.experience}</span>
                </div>
                <div className={styles.biography}>
                    <Biography biography={talent.about} />
                </div>
            </div>
            <Button onClick={() => handelAdd()} variant="contained">
                Add Proof
            </Button>
            {allProofs.data && <Content allProofs={allProofs.data.proofs} />}
            <PopUpProof
                vis={isAddProofPoopUP}
                setVis={setAddProofPoopUP}
                allProofsRefetch={allProofs.refetch}
            />
            {(allProofs.data && allProofs.data.totalPages) > 1 && (
                <Pagination
                    totalPages={allProofs.data && allProofs.data.totalPages}
                    currentPage={pageURL}
                    url={`profile/${idTalent}?page`}
                    sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
                />
            )}
        </div>
    )
}

export {Aside}
