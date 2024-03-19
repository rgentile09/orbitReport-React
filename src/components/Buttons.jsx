import satData from "./satData";
import Table from "./Table";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}

      <button onClick={(Table) => setSat(satData)}>Show All Orbits</button>
    </div>
  );
};

export default Buttons;