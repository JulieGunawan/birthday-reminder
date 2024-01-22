import { useEffect, useState } from "react";
import { data } from "./data";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

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
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://course-api.com/react-tours-project");
      const data = await res.json();
      setTours(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <h1>{tours.length} Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
