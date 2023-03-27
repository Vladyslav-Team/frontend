import React from "react"
import {NavLink, Route, Routes, useParams} from "react-router-dom"

const endpoints = {
    TALENTS: "/talents",
    TALENT: "/talents/:id",
    SIGNUP: "/talents/signup",
    LOGIN: "/talents/login",
}

const Router = () => {
    return (
        <Routes>
            <Route path="/talents">
                <Route index element={<CardList />} />
                <Route path={endpoints.TALENT} element={<Card />} />
                <Route path={endpoints.SIGNUP} element={<h1>Sign up</h1>} />
                <Route path={endpoints.LOGIN} element={<h1>Log in</h1>} />
            </Route>
            <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
    )
}

const CardList = () => {
    const cards = new Array(8).fill(0)

    return (
        <>
            <h1>CardList</h1>
            {cards.map((card, index) => {
                return (
                    <>
                        <NavLink to={`${endpoints.TALENTS}/${index}`} key={index}>
                            Card {index + 1}
                        </NavLink>
                        <br />
                    </>
                )
            })}
        </>
    )
}

const Card = () => {
    const {id} = useParams()
    return <h2>Card {+id + 1}</h2>
}

export {Router}
