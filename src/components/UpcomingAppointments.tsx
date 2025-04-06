
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppointmentCard from "./AppointmentCard";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data
const upcomingAppointments = [
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
  }
];

const UpcomingAppointments = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Today's Appointments</CardTitle>
        <Button asChild variant="outline" size="sm" className="text-healthcare-600 border-healthcare-200 hover:bg-healthcare-50">
          <Link to="/appointments">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Appointment
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {upcomingAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              id={appointment.id}
              patientName={appointment.patientName}
              appointmentType={appointment.appointmentType}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
