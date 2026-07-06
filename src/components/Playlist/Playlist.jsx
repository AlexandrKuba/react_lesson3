function Playlist({ list }) {
  return (
    <ul>
      {list.map((el, i) => (
        <li key={i}>{el.name + " " + el.cost + "$ " + el.year + "рік"}</li>
      ))}
    </ul>
  );
}

export default Playlist;
