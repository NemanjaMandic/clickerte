import React from "react";
import HouseApp from "./containers/HouseApp/HouseApp";
import AppStore from "./store/AppStore";

function App() {
  return (
    <>
      <AppStore>
        <HouseApp />
      </AppStore>
    </>
  );
}

export default App;
