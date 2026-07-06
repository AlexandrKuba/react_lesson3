import { useState } from "react";
import Filters from "./components/Filters/Filters";
import Athletes from "./components/Athletes";

function App() {
  const carsList = [
    { name: "Reno", cost: "8000", year: "2010" },
    { name: "Audi", cost: "17000", year: "2015" },
    { name: "BMW", cost: "15000", year: "2010" },
    { name: "BMW", cost: "22500", year: "2018" },
  ];
  const athletes = ["Sergio", "Olga", "Mykola", "Nazar", "Hanna", "Nina"];
  return (
    <>
      <Filters carsList={carsList} />
      <Athletes athletes={athletes} />
    </>
  );
}

export default App;
