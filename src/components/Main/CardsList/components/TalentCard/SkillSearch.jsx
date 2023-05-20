import React, {useState} from "react"
import {
    Box,
    FormControl,
    IconButton,
    Input,
    InputLabel,
    Menu,
    MenuItem,
} from "@mui/material"
import {useGetSkillsQuery} from "../../../../pages/Profile/components/Aside/components/Content/components/Proof/api"
import {useDebounce} from "use-debounce"
import {Search} from "@mui/icons-material"

const SkillSearch = ({skillsSet, setSkillsSet, setIsFiltered}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [value] = useDebounce(searchQuery, 1000, {trailing: true})
    const data = useGetSkillsQuery(value)
    let dataArray = data.isSuccess && data.data.skills

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuItemClick = (event, index, title) => {
        setSelectedIndex(index)
        const updatedSet = new Set(skillsSet)
        updatedSet.add(title)
        setSkillsSet(updatedSet)
        setIsFiltered(true)
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <IconButton onClick={handleClick} aria-label="toggle password visibility">
                <Search />
            </IconButton>
            <Menu
                id="basic-menu"
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorEl={anchorEl}
                variant="selectedMenu"
                sx={{maxHeight: "300px"}}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}>
                <FormControl
                    sx={{m: 1, width: "25ch", marginLeft: "40px", marginRight: "40px"}}
                    variant="standard">
                    <InputLabel>Search</InputLabel>
                    <Input onChange={handleChange} value={searchQuery || ""} />
                </FormControl>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    {dataArray &&
                        dataArray.map((skill, id) => (
                            <MenuItem
                                key={skill.id}
                                onClick={(event) =>
                                    handleMenuItemClick(event, id, skill.title)
                                }>
                                {skill.title}
                            </MenuItem>
                        ))}
                </Box>
            </Menu>
        </>
    )
}

export {SkillSearch}
