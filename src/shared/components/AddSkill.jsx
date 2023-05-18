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

const filterData = (query, data) => {
    if (!query) {
        return data
    } else {
        return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()))
    }
}

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

    const handleClose = () => {
        setAnchorEl(null)
    }
    const dataFiltered = filterData(searchQuery, data)

    const menuItems = dataFiltered.map((el, i) => {
        return <MenuItem key={i}>{el}</MenuItem>
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
