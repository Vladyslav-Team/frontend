import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {KeyboardArrowDown} from "@mui/icons-material"
import {Menu, MenuItem} from "@mui/material"
import {useSignOutTalentMutation} from "../../../../shared/api/services/authentication"
const ArrowButton = () => {
    const [updatePost] = useSignOutTalentMutation()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const SignOut = () => {
        updatePost()
        localStorage.removeItem("jwt-token")
    }

    return (
        <>
            <KeyboardArrowDown
                data-testid="KeyboardArrowDownIcon"
                onClick={handleClick}
                id="avatar-button"
                fontSize="large"
                sx={{color: "white", marginLeft: -2, cursor: "pointer"}}
            />
            <Menu
                data-testid="avatar-menu"
                id="avatar-menu"
                anchorEl={anchorEl}
                disableScrollLock={true}
                open={open}
                aria-hidden="true"
                MenuListProps={{
                    "aria-labelledby": "avatar-button",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                onClose={handleClose}>
                <NavLink to={"/edit"}>
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                </NavLink>
                <NavLink onClick={SignOut} to={"/"}>
                    <MenuItem onClick={handleClose}>Sign out</MenuItem>
                </NavLink>
            </Menu>
        </>
    )
}

export {ArrowButton}
