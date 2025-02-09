import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"; // Ensure this path is correct
import { Card, CardContent } from "@/components/ui/card"; // Ensure this path is correct
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Ensure this path is correct
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Ensure this path is correct
import { motion } from "framer-motion";

const events = [
  { title: "Emails Design", time: "9:00 - 11:00 AM", color: "bg-green-200" },
  { title: "Designers Meeting", time: "9:50 - 10:30 AM", color: "bg-blue-200" },
  { title: "UX Meeting", time: "11:20 - 1:00 PM", color: "bg-purple-200" },
];

export default function CalendarDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-1/4 p-5 bg-black border-r border-gray-700">
        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
        <div className="mt-6">
          <h3 className="text-lg font-semibold">My Calendars</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-400">• Daily Tasks</li>
            <li className="text-gray-400">• Birthdays</li>
            <li className="text-gray-400">• Tasks</li>
          </ul>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{selectedDate.toDateString()}</h2>
          <Tabs>
            <TabsList>
              <TabsTrigger>Month</TabsTrigger>
              <TabsTrigger>Week</TabsTrigger>
              <TabsTrigger>Day</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className={`${event.color} p-4 rounded-lg shadow-md`}>
                <CardContent>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm">{event.time}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}