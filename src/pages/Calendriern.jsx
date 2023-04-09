import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
// import Navbar from "../components/navbar/Navbar";
import Herocal from "../components/Herocal";
import Footer from "../components/footer/Footer";

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const allViews = Object.keys(Views).map((k) => Views[k]);

let myEventsList = [
  {
    title: "Akram Mouloud CHOUGARA",
    allDay: true,
    start: new Date(2023, 4, 19),
    end: new Date(2023, 4, 20),
  },
  {
    title: "Ismail HAMAI",
    start: new Date(2023, 5, 12),
    end: new Date(2023, 5, 13),
  },
];

const Calendriern = (props) => (
  <div>
    {/* <Navbar/> */}
    <Herocal/>
    <div
      className="myCustomHeight flex gap-8 flex-col p-24 "
      style={{ height: 700 }}
    >
      <Calendar
        localizer={localizer}
        events={myEventsList}
        views={allViews}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
    <Footer/>
  </div>
);

export default Calendriern;
