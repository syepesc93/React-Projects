import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </> // end of fragment
  );
}

export default App;
