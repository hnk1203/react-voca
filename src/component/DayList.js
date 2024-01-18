import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const DayList = () => {
//   const [days, setDays] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/days')
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         setDays(data);
//     });
//   }, []);
//   빈배열로 넣게 되면은 한번만 최초 한번만 찍히는거임
const days = useFetch("http://localhost:3001/days");

  return (
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
  );
};

export default DayList;
