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
import {useLocation, useNavigate} from "react-router-dom"

const SkillSearch = ({setIsFiltered}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [setSelectedIndex] = useState(1)
    const [value] = useDebounce(searchQuery, 1000, {trailing: true})

    const data = useGetSkillsQuery(value)
    const location = useLocation()
    const navigate = useNavigate()
    let dataArray = data.isSuccess && data.data.skills
    const skillArray = window.location.href.split("&")[1].split("=")[1].split(",")
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleMenuItemClick = (event, index, title) => {
        if (
            window.location.href.split("&")[1] &&
            window.location.href.split("&")[1].split("=")[1].split(",").length < 4
        ) {
            if (
                !window.location.href
                    .split("&")[1]
                    .split("=")[1]
                    .split(",")
                    .includes(encodeURIComponent(title))
            ) {
                navigate(
                    `${location.pathname}?page=${1}&filterBySkills=${
                        window.location.href.split("&")[1].split("=")[1] &&
                        window.location.href.split("&")[1].split("=")[1] !== "nofilter"
                            ? window.location.href
                                  .split("&")[1]
                                  .split("=")[1]
                                  .split(",") +
                              "," +
                              title
                            : title
                    }`
                )
            }
        } else if (
            window.location.href
                .split("&")
                [window.location.href.split("&")[0].split("=")[1]].split("=")[1]
                .split(",").length === 0
        ) {
            navigate(`${location.pathname}?page=${1}&filterBySkills=nofilter`)
        }

        setIsFiltered(true)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
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
                    <InputLabel>Search Skill</InputLabel>
                    <Input onChange={handleChange} value={searchQuery || ""} />
                </FormControl>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    {dataArray &&
                        dataArray.map((skill, id) => {
                            const isDisabled =
                                skillArray && skillArray.includes(skill.title)
                            return (
                                <MenuItem
                                    key={skill.id}
                                    disabled={isDisabled}
                                    onClick={(event) =>
                                        handleMenuItemClick(event, id, skill.title)
                                    }>
                                    {skill.title}
                                </MenuItem>
                            )
                        })}
                </Box>
            </Menu>
        </>
    )
}

export {SkillSearch}
