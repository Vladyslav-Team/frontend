import { useState } from "react";
import styles from "./VisitButton.module.css";

function VisitButton() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    if (!isRegistered) {
      setShowPopup(true);
    } else {
      // go to user profile
    }
  };

  return (
    <>
      {/* {showPopup && <LogIn />} */}
      <button className={styles.visitButton} onClick={handleClick}>
        Visit
      </button>
    </>
  );
}

export { VisitButton };
