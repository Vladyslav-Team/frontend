import {Search} from "@mui/icons-material"
import {
    Box,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Menu,
    MenuItem,
} from "@mui/material"
import React, {useEffect, useState} from "react"
import {
    useGetSkillsQuery,
    useAddSkillMutation,
} from "../../components/pages/Profile/components/Aside/components/Content/components/Proof/api/index"
import {useAddSkillProfileMutation} from "../../components/pages/Profile/api/index"
import {useDebounce} from "use-debounce"
import {useGetAllUserInfoByIDQuery} from "../../components/pages/Profile/api"
import {useJwtCheck} from "../api/hooks"

const SearchInput = ({setSearchQuery, searchQuery}) => {
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    return (
        <FormControl
            sx={{m: 1, width: "25ch", marginLeft: "40px", marginRight: "40px"}}
            variant="standard">
            <InputLabel>Search</InputLabel>
            <Input
                onChange={handleChange}
                value={searchQuery || ""}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility">
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

const AddSkill = ({
    anchorEl,
    setAnchorEl,
    searchQuery,
    setSearchQuery,
    proofId,
    talentId,
    refetch,
    status,
    skillsByProof,
    skills,
}) => {
    const open = Boolean(anchorEl)
    const idTalent = location.pathname.replace("/profile/", "")
    const jwt = useJwtCheck()
    const role = jwt.data.scope.split("_")[1].toLowerCase() + "s"
    const talent = useGetAllUserInfoByIDQuery({id: idTalent, role})
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [value] = useDebounce(searchQuery, 1000, {trailing: true})
    const data = useGetSkillsQuery(value)
    let dataArray = data.isSuccess && data.data.skills
    const isProfile = status === "Profile"
    let updateSkill, result
    const skillTitles = skillsByProof && skillsByProof.map((skill) => skill.title)
    const skillTitleProfile = skills && skills.map((skill) => skill.title)

    if (isProfile) {
        ;[updateSkill, result] = useAddSkillProfileMutation()
    } else {
        ;[updateSkill, result] = useAddSkillMutation()
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuItemClick = (event, index, title) => {
        const res = {skills: Array(title)}
        isProfile
            ? updateSkill({talentId, body: JSON.stringify(res)})
            : updateSkill({talentId, proofId, body: JSON.stringify(res)})
        setSelectedIndex(index)
        setAnchorEl(null)
    }

    useEffect(() => {
        if (result.data) {
            refetch()
        }
    }, [refetch, result])

    const menuItems = () => {
        const isProfilePageSearch =
            (data.isSuccess && Boolean(value) && data.data.skills.length > 0) ||
            (data.isSuccess && isProfile && data.data.skills.length > 0)
        if (isProfilePageSearch) {
            return dataArray.map((obj, id) => {
                const isDisabled =
                    skillTitleProfile && skillTitleProfile.includes(obj.title)
                return (
                    <MenuItem
                        key={obj.id}
                        disabled={isDisabled}
                        onClick={(event) => handleMenuItemClick(event, id, obj.title)}>
                        {obj.title}
                    </MenuItem>
                )
            })
        } else if (
            data.isSuccess &&
            !isProfile &&
            talent.data &&
            !talent.data.skills[0]
        ) {
            return dataArray.map((obj, id) => {
                const isDisabled = skillTitles && skillTitles.includes(obj.title)
                return (
                    <MenuItem
                        key={obj.id}
                        disabled={isDisabled}
                        onClick={(event) => handleMenuItemClick(event, id, obj.title)}>
                        {obj.title}
                    </MenuItem>
                )
            })
        } else {
            return (
                role !== "sponsors" &&
                talent.data &&
                talent.data.skills.map((obj, id) => {
                    const isDisabled = skillTitles && skillTitles.includes(obj.title)
                    return (
                        <MenuItem
                            key={obj.id}
                            disabled={isDisabled}
                            onClick={(event) =>
                                handleMenuItemClick(event, id, obj.title)
                            }>
                            {obj.title}
                        </MenuItem>
                    )
                })
            )
        }
    }

    return (
        <Menu
            id="basic-menu"
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            sx={{maxHeight: "300px"}}>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                {menuItems()}
            </Box>
        </Menu>
    )
}

export {AddSkill}
