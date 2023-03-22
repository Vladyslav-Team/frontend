
import React, { useEffect } from "react";
import { getTalent } from "./shared/api/services/getTalent"
const App = () => {

  useEffect(() => {
    getTalent().then(data => {
      console.log(data)
    })
  }, []);


  return (
    <div>
      <p>SkillScope</p>
    </div>
  );
};

export default App;
