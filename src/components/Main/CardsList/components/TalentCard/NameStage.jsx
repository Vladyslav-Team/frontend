import React, {useEffect, useState} from "react"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import RefreshIcon from "@mui/icons-material/Refresh"
import {useLocation, useNavigate} from "react-router-dom"
import {SkillSearch} from "./SkillSearch"
import {Chip} from "@mui/material"
import {useTheme} from "@emotion/react"

const Skill = ({title, handleRemoveSkill}) => {
    return (
        <Chip
            label={title}
            color="primary"
            onClick={(e) => {
                handleRemoveSkill(e, title)
            }}
            onDelete={(e) => {
                handleRemoveSkill(e, title)
            }}
            sx={{
                marginRight: "5px",
                marginBottom: "5px",
                "&:hover": {
                    backgroundColor: "red",
                },
            }}
        />
    )
}

const NameStage = ({type, refetch, skillsSet, setSkillsSet}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const sort =
        location.search.split("&")[1] &&
        location.search.split("&")[1].replace("sort=", "")
    const typeSort = location.search.split("&")[1] ? sort : "newest"
    const [isFiltered, setIsFiltered] = useState(false)
    const {palette} = useTheme()
    const handleChange = (event) => {
        if (!location.search.includes("sort")) {
            navigate(`${location.pathname}?page=1&sort=${event.target.value}`)
        }
        if (location.search.includes("sort")) {
            navigate(`${location.pathname}?page=1&sort=${event.target.value}`)
        }
    }

    const handleRemoveSkill = (e, title) => {
        const updatedSet = new Set(skillsSet)
        updatedSet.delete(title)
        setSkillsSet(updatedSet)
    }

    useEffect(() => {
        if (skillsSet.size === 0) {
            setIsFiltered(false)
        }
    }, [skillsSet])

    return (
        <Grid p={2}>
            <Grid
                container
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"baseline"}
                pt={2}
                sx={
                    type === "talents" && {
                        borderBottom: `1px solid ${
                            type === "talents" &&
                            (palette.mode === "dark"
                                ? palette.neutral.secondary
                                : palette.neutral.black)
                        }`,
                        pb: 1,
                        mb: 1,
                    }
                }>
                <h1
                    style={{
                        textTransform: "capitalize",
                    }}>
                    {type}
                </h1>
                {type === "talents" && (
                    <SkillSearch
                        skillsSet={skillsSet}
                        setSkillsSet={setSkillsSet}
                        setIsFiltered={setIsFiltered}
                    />
                )}
                {type === "proofs" && (
                    <Grid item height={"5px"}>
                        <IconButton size="large" onClick={() => refetch()}>
                            <RefreshIcon />
                        </IconButton>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={typeSort}
                            autoWidth
                            MenuProps={{disableScrollLock: true}}
                            sx={{marginLeft: "25px"}}
                            onChange={handleChange}>
                            <MenuItem value={"newest"}>From new to old</MenuItem>
                            <MenuItem value={"oldest"}>From old to new</MenuItem>
                        </Select>
                    </Grid>
                )}
            </Grid>
            {isFiltered && type === "talents" && (
                <Grid>
                    {skillsSet.size !== 0 &&
                        Array.from(skillsSet).map((title, id) => {
                            return (
                                <Skill
                                    handleRemoveSkill={handleRemoveSkill}
                                    title={title}
                                    key={id}
                                />
                            )
                        })}
                </Grid>
            )}
        </Grid>
    )
}

export {NameStage}
