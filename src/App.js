import React from "react";
import { TalentCard } from "./components/CardsList/components/TalentCard";

const talent = {
  id: 1,
  image: null,
  name: "Samer",
  surname: "Khomsi",
  location: "Kharkiv",
};

const App = () => {
  return (
    <div>
      <TalentCard talent={talent} key={talent.id} />
    </div>
  );
};

export default App;
