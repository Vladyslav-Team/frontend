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
import {useGetSkillsQuery} from "../../components/pages/Profile/components/Aside/components/Content/components/Proof/api/index"

const data = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin",
]


// const filterData = (query, data) => {
//     if (!query) {
//         return data
//     } else {
//         return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()))
//     }
// }

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

const AddSkill = ({anchorEl, setAnchorEl, searchQuery, setSearchQuery}) => {
    const open = Boolean(anchorEl)
    const datas = useGetSkillsQuery(searchQuery)
    const datasArray = datas.data.skills

    const handleClose = () => {
        setAnchorEl(null)
    }

    const menuItems =  data && datasArray.map((obj, id) => {
        return <MenuItem key={obj.id}>{obj.title}</MenuItem>
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
