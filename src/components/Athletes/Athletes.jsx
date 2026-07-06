//Задача 5. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
import styles from "./Athletes.module.css";
import { useState } from "react";
import AthletesList from "../AthletesList/AthletesList";

function Athletes({ athletes }) {
  const [athletesList, setAthletesList] = useState(
    JSON.parse(JSON.stringify(athletes)),
  );
  const [chosenAthletes, setChosenAthletes] = useState([]);
  const choseAthlete = (athlet, toDo) => {
    if (toDo === "add") {
      setAthletesList((prev) => prev.filter((el) => el !== athlet));
      setChosenAthletes((prev) => [...prev, athlet]);
    } else {
      setChosenAthletes((prev) => prev.filter((el) => el !== athlet));
      setAthletesList((prev) => [...prev, athlet]);
    }
  };
  return (
    <div>
      <h2>Задача 5</h2>
      <div className={styles.container}>
        <AthletesList
          list={athletesList}
          selectedAthlete={choseAthlete}
          type={"main"}
        />
        <AthletesList
          list={chosenAthletes}
          selectedAthlete={choseAthlete}
          type={"chosen"}
        />
      </div>
    </div>
  );
}

export default Athletes;
