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
import {useDebounce} from "use-debounce"
import {useGetAllInfoByIDQuery} from "../../components/pages/Profile/api"

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
    skills,
    status,
    skillsByProof,
}) => {
    const open = Boolean(anchorEl)
    const idTalent = location.pathname.replace("/profile/", "")
    const talent = useGetAllInfoByIDQuery(idTalent)
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [value] = useDebounce(searchQuery, 1000, {trailing: true})
    const data = useGetSkillsQuery(value)
    const [updateSkill, result] = useAddSkillMutation()
    let dataArray = data.isSuccess && data.data.skills

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuItemClick = (event, index, title) => {
        const res = {skills: Array(title)}
        updateSkill({talentId, proofId, body: JSON.stringify(res)})
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
            (data.isSuccess && status === "Profile" && data.data.skills.length > 0)
        if (isProfilePageSearch) {
            return dataArray.map((obj, id) => {
                return (
                    <MenuItem
                        key={obj.id}
                        onClick={(event) => handleMenuItemClick(event, id, obj.title)}>
                        {obj.title}
                    </MenuItem>
                )
            })
        } else if (
            data.isSuccess &&
            status !== "Profile" &&
            talent.data &&
            !talent.data.skills[0]
        ) {
            return dataArray.map((obj, id) => {
                return (
                    <MenuItem
                        key={obj.id}
                        onClick={(event) => handleMenuItemClick(event, id, obj.title)}>
                        {obj.title}
                    </MenuItem>
                )
            })
        } else {
            return (
                talent.data &&
                talent.data.skills.map((obj, id) => {
                    return (
                        <MenuItem
                            key={obj.id}
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
