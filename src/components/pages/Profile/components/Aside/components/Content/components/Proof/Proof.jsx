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

const Proof = ({
    proof,
    isEditMode,
    styleObj,
    statusVis,
    setVis,
    allProofsRefetch,
    refetch,
}) => {
    const {title, description, data, status, publication_date} = proof
    const navigate = useNavigate()
    const id = location.pathname.replace("/profile/", "").split("/")
    const [addProof, result] = useAddProofMutation()
    const [changeProof, changeProofResult] = useChangeProofMutation()
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
                publication_date={publication_date}
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
                <ProofContent title={title} data={data} description={description} />
            )}
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
                refetch={refetch}
            />
            {result.isError && (
                <AlertError defaultStatus={true} massageError={result.error.message} />
            )}
        </StyledProof>
    )
}

export {Proof}
