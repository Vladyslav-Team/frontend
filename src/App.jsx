import React, { useEffect } from "react";
import { fetchData } from "./shared/api/services/fetchData"
const App = () => {

  useEffect(() => {
    fetchData("/talent").then(data => {
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
