import React from "react";
import Person from "./Person";

const People = ({ peopleInfo }) => {
  return (
    <section>
      {peopleInfo.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default People;
