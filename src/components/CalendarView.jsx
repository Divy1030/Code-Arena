import React from 'react';
   import { Calendar, momentLocalizer } from 'react-big-calendar';
   import moment from 'moment';
   import 'react-big-calendar/lib/css/react-big-calendar.css';

   const localizer = momentLocalizer(moment);

   const events = [
     {
       title: 'Meeting',
       start: new Date(2025, 2, 6, 10, 0),
       end: new Date(2025, 2, 6, 12, 0),
     },
     {
        title: 'sexting',
        start: new Date(2025, 3, 6, 10, 0),
        end: new Date(2025, 3, 6, 12, 0),
      },
      {
        title: 'sextalk',
        start: new Date(2025, 4, 6, 10, 0),
        end: new Date(2025, 4, 6, 12, 0),
      },
     // Add more events here
   ];

   export default function CalendarView() {
     return (
       <div className="p-4">
         <Calendar
           localizer={localizer}
           events={events}
           startAccessor="start"
           endAccessor="end"
           style={{ height: 500 }}
         />
       </div>
     );
   }