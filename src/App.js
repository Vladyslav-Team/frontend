import React, {useState} from "react"
import {LoginPopup} from "./components/LoginPopup"

const App = () => {
    const [isVisible, setIsVisible] = useState(false)

    const loginFormVisibility = () => {
        return isVisible ? setIsVisible(false) : setIsVisible(true)
    }

    return (
        <div>
            {isVisible && (
                <LoginPopup loginFormVisibility={() => loginFormVisibility()} />
            )}
            <p>SkillScope</p>
            <button onClick={() => loginFormVisibility()}>Log in</button>
        </div>
    )
}

export default App
