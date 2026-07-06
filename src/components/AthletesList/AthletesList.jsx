import styles from "./AthletesList.module.css";
function AthletesList({ list, selectedAthlete, type }) {
  console.log(type);
  return (
    <div>
      <h2>
        {type === "main"
          ? "Загальний список спортсменів"
          : "Будуть брати участь у змаганні"}
      </h2>
      <ul>
        {list.map((el, i) => (
          <li key={i}>
            {el}
            <button
              className={`${styles.button} ${type === "main" ? styles.button__add : styles.button__minus}`}
              onClick={() =>
                selectedAthlete(el, type === "main" ? "add" : "minus")
              }
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AthletesList;
