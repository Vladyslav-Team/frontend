import React, {useEffect} from "react"
import styles from "./Proof.module.css"
import {ProofHeader} from "./components/ProofHeader"
import {ProofForm} from "./components/ProofForm"
import {ProofContent} from "./components/ProofContent"
import {ProofActivity} from "./components/ProofActivity"
import {useAddProofMutation, useChangeProofMutation} from "../../../../../../api"
import {useForm} from "react-hook-form"
import {AlertError} from "../../../../../../../../../shared/components/AlertError"
import {StyledProof} from "./StyledProof"
import {useRefetchAndClose} from "./hooks"
import {useNavigate} from "react-router"
import {ProofSkills} from "./components/ProofActivity/components"
import {SponsorKudoses} from "../../../../../../../../AddKudosForm/components/SponsorKudoses"
import {useGetKudosQuery} from "../../../../../../../../AddKudosForm/api"
import {Grid} from "@mui/material"
import {useGetSkillsByProofsQuery} from "./api"

const Proof = ({proof, isEditMode, styleObj, statusVis, setVis, allProofsRefetch}) => {
    const {title, description, data, status, publication_date} = proof
    const navigate = useNavigate()
    const id = location.pathname.replace("/profile/", "").split("/")
    const proofId = proof.id
    const idProof = proof.id
    const [addProof, result] = useAddProofMutation()
    const [changeProof, changeProofResult] = useChangeProofMutation()
    const skills = useGetSkillsByProofsQuery(idProof)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        setValue,
    } = useForm()

    useEffect(() => {
        if (title) {
            setValue("title", title)
            setValue("description", description)
        }
    }, [description, setValue, title])
    const onSubmit = (e) => {
        if (statusVis === "Added") {
            addProof({
                id: id[0],
                payload: {
                    title: e.title,
                    description: e.description || "",
                },
            })
        }
        if (statusVis === "Edit") {
            changeProof({
                talentId: id[0],
                proofId: id[2],
                payload: {
                    title: e.title,
                    description: e.description,
                },
            })
        }
    }

    const KudosInfo = useGetKudosQuery(
        {proofId},
        {
            refetchOnMountOrArgChange: true,
        }
    )

    useEffect(() => {
        if (changeProofResult.data) {
            navigate(-1)
        }
    }, [changeProofResult.data, navigate])

    useRefetchAndClose(result, setVis, allProofsRefetch)
    return (
        <StyledProof sx={styleObj}>
            {status === "HIDDEN" && <div className={styles.die}></div>}
            <ProofHeader
                status={status}
                isEditMode={isEditMode}
                statusVis={statusVis}
                proofId={proof && proof.id}
                allProofsRefetch={allProofsRefetch}
                talentId={id[0]}
            />
            {isEditMode ? (
                <ProofForm
                    title={title}
                    description={description}
                    setVis={setVis}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                    allProofsRefetch={allProofsRefetch}
                    register={register}
                    errors={errors}
                />
            ) : (
                <ProofContent
                    title={title}
                    data={data}
                    description={description}
                    publication_date={publication_date}
                    proofId={proof && proof.id}
                />
            )}
            <ProofSkills
                proofId={proof && proof.id}
                talentId={id[0]}
                status={status}
                isEditMode={isEditMode}
                statusVis={statusVis}
            />
            <Grid>
                <SponsorKudoses
                    KudosInfo={KudosInfo}
                    isHaveSkills={skills.isSuccess && skills.data.skills.length !== 0}
                    isDraft={status === "DRAFT"}
                />
                <ProofActivity
                    isEditMode={isEditMode}
                    proofId={proof && proof.id}
                    statusVis={statusVis}
                    status={status}
                    setVis={setVis}
                    addProof={addProof}
                    watch={watch}
                    allProofsRefetch={allProofsRefetch}
                    talentId={id[0]}
                />
            </Grid>
            {result.isError && (
                <AlertError defaultStatus={true} massageError={result.error.message} />
            )}
        </StyledProof>
    )
}

export {Proof}
