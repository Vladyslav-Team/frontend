import React, {useState} from "react"
import styles from "./Aside.module.css"
import {Content} from "./components/Content"
import {useGetProofsQuery} from "./components/Content/components/Proof/api"
import {useLocation} from "react-router"
import {Pagination} from "../../../../Main/Pagination"
import {useSearchParams} from "react-router-dom"
import {PopUpProof} from "./components/PopUpProof"
import {useJwtCheck} from "../../../../../shared/api/hooks"
import {Info} from "./components/Info"
import {AddProof} from "./components/AddProof"

const Aside = ({user, refetch}) => {
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const [isAddProofPoopUP, setAddProofPoopUP] = useState(false)
    const id = +location.pathname.replace("/profile/", "")
    const pageURL = +searchParams.get("page")
    const {data} = useJwtCheck()

    const role =
        data.scope === "ROLE_TALENT" || (data.scope === "ROLE_SPONSOR" && data.id !== +id)
            ? "talents"
            : "sponsors"

    const allProofs = useGetProofsQuery(
        {id, role, page: pageURL},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const isPageNotZero = (allProofs.data && allProofs.data.totalPages) > 1

    return (
        <div className={styles.wrapper}>
            <Info user={user} />
            {data.id && data.scope === "ROLE_TALENT" && (
                <AddProof
                    idTalent={id}
                    localTalentID={data.id}
                    setPoopUP={setAddProofPoopUP}
                />
            )}
            {allProofs.isSuccess && (
                <Content allProofs={allProofs.data && allProofs} refetch={refetch} />
            )}
            <PopUpProof
                vis={isAddProofPoopUP}
                setVis={setAddProofPoopUP}
                allProofsRefetch={allProofs.refetch}
            />
            {isPageNotZero && (
                <Pagination
                    totalPages={allProofs.data && allProofs.data.totalPages}
                    currentPage={pageURL}
                    url={`profile/${id}?page`}
                    sx={{position: "relative", bottom: 0, transform: "translateX(-50%)"}}
                />
            )}
        </div>
    )
}

export {Aside}
