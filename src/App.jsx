import React from "react";
import { data } from "./data";
import People from "./components/People";
const App = () => {
  const [people, setPeople] = React.useState(data);
  const deleteAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <People peopleInfo={people} />
        <button type="button" className="btn btn-block" onClick={deleteAll}>
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
