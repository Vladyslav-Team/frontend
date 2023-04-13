import React, {useState, useEffect} from "react"
import {Card} from "@mui/material"
import styles from "./Proof.module.css"
import styled from "@emotion/styled"
import {ProofHeader} from "./components/ProofHeader"
import {ProofForm} from "./components/ProofForm"
import {ProofContent} from "./components/ProofContent"
import {ProofActivity} from "./components/ProofActivity"
import {useAddProofMutation, useChangeStatusProofMutation} from "../../../../../../api"
import {useForm} from "react-hook-form"
import {AlertError} from "../../../../../../../../../shared/components/AlertError"

const Proof = ({proof, isEditMode, styleObj, statusVis, setVis, allProofsRefetch}) => {
    const {title, description, data, status, publication_date} = proof

    const talentId = location.pathname.replace("/profile/", "")
    const [addProof, result] = useAddProofMutation()
    const [ChangeStatusProof, statusChanged] = useChangeStatusProofMutation()
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const onSubmit = (e) => {
        addProof({
            id: talentId,
            payload: {
                title: e.title,
                description: e.description,
            },
        })
    }
    useEffect(() => {
        if (result.data) {
            const proofId = result.data && result.data.id
            proofId && ChangeStatusProof({talentId, proofId: proofId, status: "publish"})
            setVis(false)
        }
    }, [ChangeStatusProof, result, setVis, talentId])

    useEffect(() => {
        if (statusChanged.isSuccess) {
            allProofsRefetch()
        }
    }, [statusChanged])

    const StyledProof = styled(Card)(({theme}) => ({
        display: "flex",
        position: "relative",
        flexDirection: "column",
        width: "370px !important",
        minHeight: 260,
        [theme.breakpoints.down("lg")]: {
            minWidth: "100%",
            minHeight: 200,
        },
    }))
    return (
        <StyledProof sx={styleObj}>
            {false && <div className={styles.die}></div>}
            <ProofHeader
                status={status}
                isEditMode={isEditMode}
                statusVis={statusVis}
                id={proof.data && proof.data.id}
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
                />
            )}
            <ProofActivity
                isEditMode={isEditMode}
                id={proof.id}
                statusVis={statusVis}
                status={status}
                setVis={setVis}
                addProof={addProof}
                watch={watch}
                allProofsRefetch={allProofsRefetch}
                talentId={talentId}
            />
            {result.isError && (
                <AlertError defaultStatus={true} massageError={result.error.message} />
            )}
        </StyledProof>
    )
}

export {Proof}
