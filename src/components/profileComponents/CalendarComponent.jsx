import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { Sidebar } from "./Sidebar"; // Sidebar component
import enUS from "date-fns/locale/en-US";


// const locales = {
//   "en-US": require("date-fns/locale/en-US"),
// };
const locales = {
    "en-US": enUS,
  };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const eventsData = [
  { title: "Emails", start: new Date(2025, 1, 10, 9, 0), end: new Date(2025, 1, 10, 10, 30), category: "work" },
  { title: "YouTube Video", start: new Date(2025, 1, 10, 10, 30), end: new Date(2025, 1, 10, 11, 30), category: "personal" },
  { title: "UX Meeting", start: new Date(2025, 1, 10, 12, 0), end: new Date(2025, 1, 10, 13, 0), category: "education" },
];

const categoryColors = {
  work: "bg-blue-500",
  personal: "bg-purple-500",
  education: "bg-green-500",
};

const CalendarComponent = () => {
  const [events, setEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Calendar Section */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold">October 2025</h1>

        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "70vh" }}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={(event) => ({
              className: `p-2 rounded ${categoryColors[event.category] || "bg-gray-400"} text-white`,
            })}
          />
        </div>

        {/* Event Details Popup */}
        {selectedEvent && (
          <div className="absolute top-10 right-10 bg-white p-4 shadow-lg rounded-md">
            <h3 className="text-lg font-bold">{selectedEvent.title}</h3>
            <p className="text-gray-500">{format(selectedEvent.start, "PPpp")} - {format(selectedEvent.end, "pp")}</p>
            <button onClick={() => setSelectedEvent(null)} className="mt-2 text-red-500">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
