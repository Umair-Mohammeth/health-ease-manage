
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PatientCard from "./PatientCard";
import { Search, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// Sample data
const recentPatients = [
  {
    id: "pat1",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    phone: "(555) 123-4567",
    lastVisit: "Mar 30, 2025",
    avatarFallback: "AJ",
  },
  {
    id: "pat2",
    name: "Samantha Williams",
    email: "sam.w@example.com",
    phone: "(555) 234-5678",
    lastVisit: "Apr 2, 2025",
    avatarFallback: "SW",
  },
  {
    id: "pat3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "(555) 345-6789",
    lastVisit: "Apr 5, 2025",
    avatarFallback: "MB",
  }
];

const PatientRecords = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Recent Patients</CardTitle>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="w-[180px] pl-8 text-sm rounded-md border-healthcare-200"
            />
          </div>
          <Button asChild variant="outline" size="sm" className="text-healthcare-600 border-healthcare-200 hover:bg-healthcare-50">
            <Link to="/patients">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Patient
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {recentPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              id={patient.id}
              name={patient.name}
              email={patient.email}
              phone={patient.phone}
              lastVisit={patient.lastVisit}
              avatarFallback={patient.avatarFallback}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientRecords;
