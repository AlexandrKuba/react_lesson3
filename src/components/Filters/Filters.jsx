import { act, useEffect, useState } from "react";
import FilterList from "../FilterList";
import Playlist from "../Playlist";
//Задача 8. Дано список автомобілів (марка, рік випуску, ціна). Сформувати елементи для фільтрування з використанням випадаючого списку (контент цих випадаючих списків сформувати у залежності від переданого списку).

function Filters({ carsList }) {
  const [activeFilter, setActiveFilter] = useState({
    brand: "All",
    cost: "All",
    year: "All",
  });
  const [activeList, setActiveList] = useState(() =>
    JSON.parse(JSON.stringify(carsList)),
  );
  const changeFilter = (name, value) => {
    const needFilter = name.toLowerCase();
    setActiveFilter((prev) => ({ ...prev, [needFilter]: value }));
  };
  function getFilters(brand = "All", cost = "All", year = "All") {
    return carsList.filter(
      (el) =>
        (brand === "All" ? el : el.name === brand) &&
        (cost === "All" ? el : el.cost === cost) &&
        (year === "All" ? el : el.year === year),
    );
  }
  useEffect(() => {
    setActiveList(
      carsList.filter(
        (el) =>
          (el.name === activeFilter.brand || activeFilter.brand === "All") &&
          (el.cost === activeFilter.cost || activeFilter.cost === "All") &&
          (el.year === activeFilter.year || activeFilter.year === "All"),
      ),
    );
  }, [activeFilter]);
  return (
    <div>
      <h2>Задача 8</h2>
      <FilterList
        name="Brand"
        list={[
          "Всі",
          ...new Set(
            getFilters("All", activeFilter.cost, activeFilter.year).map(
              (el) => el.name,
            ),
          ),
        ]}
        changeFilter={changeFilter}
        activeFilter={activeFilter.brand}
      />
      <FilterList
        name="Cost"
        list={[
          "Всі",
          ...new Set(
            getFilters(activeFilter.brand, "All", activeFilter.year).map(
              (el) => el.cost,
            ),
          ),
        ]}
        changeFilter={changeFilter}
        activeFilter={activeFilter.cost}
      />
      <FilterList
        name="Year"
        list={[
          "Всі",
          ...new Set(
            getFilters(activeFilter.brand, activeFilter.cost, "All").map(
              (el) => el.year,
            ),
          ),
        ]}
        changeFilter={changeFilter}
        activeFilter={activeFilter.year}
      />
      <Playlist list={activeList} />
    </div>
  );
}

export default Filters;
