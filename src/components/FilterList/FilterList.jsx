function FilterList({ name, list, changeFilter, activeFilter }) {
  return (
    <div>
      <label>
        {name}
        <select
          id={name}
          value={activeFilter}
          onChange={(e) => changeFilter(name, e.target.value)}
        >
          {list.map((el, i) => (
            <option key={i} value={el === "Всі" ? "All" : el}>
              {el}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterList;
