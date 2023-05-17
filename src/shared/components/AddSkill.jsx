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
import React, {useState} from "react"
import {useGetSkillsQuery, useAddSkillMutation} from "../../components/pages/Profile/components/Aside/components/Content/components/Proof/api/index"

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

const AddSkill = ({anchorEl, setAnchorEl, searchQuery, setSearchQuery, proofId, talentId}) => {
    const open = Boolean(anchorEl)
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const data = useGetSkillsQuery(searchQuery)
    console.log(data)
    const [updateSkill, result] = useAddSkillMutation()
    const dataArray = data.isSuccess && data.data.skills

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuItemClick = (event, index, title) => {
        const res = {skills: Array(title)}
        //console.log(JSON.stringify(res))
        updateSkill({ talentId, proofId, body: JSON.stringify(res)})

        setSelectedIndex(index);
        setAnchorEl(null);
      }

    const menuItems =  data.isSuccess && dataArray.map((obj, id) => {
        return <MenuItem key={obj.id} 
        onClick={(event) => handleMenuItemClick(event, id, obj.title)}
        >
            {obj.title}
            </MenuItem>
    })
    return (
        <Menu
            id="basic-menu"
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            sx={{maxHeight: "300px"}}>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                {menuItems}
            </Box>
        </Menu>
    )
}

export {AddSkill}
