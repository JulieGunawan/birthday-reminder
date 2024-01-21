import { useEffect, useState } from "react";
import { data } from "./data";
import People from "./components/People";

/*This is for Birthday Reminder rendering*/
// const App = () => {
//   const [people, setPeople] = React.useState(data);
//   const deleteAll = () => {
//     setPeople([]);
//   };
//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} birthdays today</h3>
//         <People peopleInfo={people} />
//         <button type="button" className="btn btn-block" onClick={deleteAll}>
//           clear all
//         </button>
//       </section>
//     </main>
//   );
// };

/*This is for Tours rendering*/
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  });
  return <h1>Our Tours</h1>;
};

export default App;
