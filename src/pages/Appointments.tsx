
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, List, PlusCircle, Filter } from "lucide-react";
import AppointmentCard from "@/components/AppointmentCard";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample appointment data
const appointmentsData = [
  {
    id: "apt1",
    patientName: "Jane Cooper",
    appointmentType: "Annual Physical",
    date: "Apr 8, 2025",
    time: "9:00 AM",
    status: "scheduled" as const,
  },
  {
    id: "apt2",
    patientName: "Robert Fox",
    appointmentType: "Follow-up",
    date: "Apr 8, 2025",
    time: "10:30 AM",
    status: "scheduled" as const,
  },
  {
    id: "apt3",
    patientName: "Esther Howard",
    appointmentType: "Consultation",
    date: "Apr 8, 2025",
    time: "11:45 AM",
    status: "scheduled" as const,
  },
  {
    id: "apt4",
    patientName: "Wade Warren",
    appointmentType: "Lab Results",
    date: "Apr 8, 2025",
    time: "1:15 PM",
    status: "scheduled" as const,
  },
  {
    id: "apt5",
    patientName: "Brooklyn Simmons",
    appointmentType: "Vaccination",
    date: "Apr 9, 2025",
    time: "9:30 AM",
    status: "scheduled" as const,
  },
  {
    id: "apt6",
    patientName: "Leslie Alexander",
    appointmentType: "Check-up",
    date: "Apr 9, 2025",
    time: "11:00 AM",
    status: "scheduled" as const,
  },
  {
    id: "apt7",
    patientName: "Cameron Williamson",
    appointmentType: "Follow-up",
    date: "Apr 7, 2025",
    time: "2:30 PM",
    status: "completed" as const,
  },
  {
    id: "apt8",
    patientName: "Dianne Russell",
    appointmentType: "Urgent Care",
    date: "Apr 7, 2025",
    time: "4:00 PM",
    status: "completed" as const,
  }
];

const Appointments = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState("list"); // "list" or "calendar"

  return (
    <div className="page-container">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-healthcare-800">Appointments</h1>
            <p className="text-muted-foreground">Manage and schedule patient appointments.</p>
          </div>
          <Button className="healthcare-gradient">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="canceled">Canceled</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border border-input p-1">
                <Button 
                  variant={view === "list" ? "default" : "ghost"} 
                  size="sm" 
                  className="h-8 w-8 p-0" 
                  onClick={() => setView("list")}
                >
                  <List className="h-4 w-4" />
                  <span className="sr-only">List view</span>
                </Button>
                <Button 
                  variant={view === "calendar" ? "default" : "ghost"} 
                  size="sm" 
                  className="h-8 w-8 p-0" 
                  onClick={() => setView("calendar")}
                >
                  <CalendarIcon className="h-4 w-4" />
                  <span className="sr-only">Calendar view</span>
                </Button>
              </div>

              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter By" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="physical">Annual Physical</SelectItem>
                  <SelectItem value="followup">Follow-up</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="urgent">Urgent Care</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="upcoming">
            {view === "list" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {appointmentsData
                  .filter(apt => apt.status === "scheduled")
                  .map(appointment => (
                    <AppointmentCard
                      key={appointment.id}
                      id={appointment.id}
                      patientName={appointment.patientName}
                      appointmentType={appointment.appointmentType}
                      date={appointment.date}
                      time={appointment.time}
                      status={appointment.status}
                    />
                  ))
                }
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="border rounded-md p-4"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">
                      Appointments for {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </h3>
                    <div className="space-y-4">
                      {appointmentsData
                        .filter(apt => apt.status === "scheduled")
                        .slice(0, 3)
                        .map(appointment => (
                          <AppointmentCard
                            key={appointment.id}
                            id={appointment.id}
                            patientName={appointment.patientName}
                            appointmentType={appointment.appointmentType}
                            date={appointment.date}
                            time={appointment.time}
                            status={appointment.status}
                          />
                        ))
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointmentsData
                .filter(apt => apt.status === "completed")
                .map(appointment => (
                  <AppointmentCard
                    key={appointment.id}
                    id={appointment.id}
                    patientName={appointment.patientName}
                    appointmentType={appointment.appointmentType}
                    date={appointment.date}
                    time={appointment.time}
                    status={appointment.status}
                  />
                ))
              }
            </div>
          </TabsContent>

          <TabsContent value="canceled">
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No canceled appointments.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Appointments;
