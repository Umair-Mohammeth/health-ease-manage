
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search, Filter, SlidersHorizontal } from "lucide-react";
import PatientCard from "@/components/PatientCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample patient data
const patientsData = [
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
  },
  {
    id: "pat4",
    name: "Emma Davis",
    email: "emma.d@example.com",
    phone: "(555) 456-7890",
    lastVisit: "Mar 28, 2025",
    avatarFallback: "ED",
  },
  {
    id: "pat5",
    name: "James Wilson",
    email: "james.w@example.com",
    phone: "(555) 567-8901",
    lastVisit: "Apr 1, 2025",
    avatarFallback: "JW",
  },
  {
    id: "pat6",
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    phone: "(555) 678-9012",
    lastVisit: "Mar 25, 2025",
    avatarFallback: "OM",
  },
  {
    id: "pat7",
    name: "William Taylor",
    email: "william.t@example.com",
    phone: "(555) 789-0123",
    lastVisit: "Apr 3, 2025",
    avatarFallback: "WT",
  },
  {
    id: "pat8",
    name: "Sophia Anderson",
    email: "sophia.a@example.com",
    phone: "(555) 890-1234",
    lastVisit: "Mar 29, 2025",
    avatarFallback: "SA",
  },
  {
    id: "pat9",
    name: "Liam Thomas",
    email: "liam.t@example.com",
    phone: "(555) 901-2345",
    lastVisit: "Apr 4, 2025",
    avatarFallback: "LT",
  }
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patientsData.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  return (
    <div className="page-container">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-healthcare-800">Patients</h1>
            <p className="text-muted-foreground">Manage patient records and information.</p>
          </div>
          <Button className="healthcare-gradient">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle>Patient Directory</CardTitle>
              <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search patients..."
                    className="w-full md:w-[280px] pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <div className="flex items-center">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filter By" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Patients</SelectItem>
                      <SelectItem value="recent">Recent Patients</SelectItem>
                      <SelectItem value="upcoming">Upcoming Appointments</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Patients</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map(patient => (
                      <PatientCard
                        key={patient.id}
                        id={patient.id}
                        name={patient.name}
                        email={patient.email}
                        phone={patient.phone}
                        lastVisit={patient.lastVisit}
                        avatarFallback={patient.avatarFallback}
                      />
                    ))
                  ) : (
                    <div className="col-span-full p-8 text-center">
                      <p className="text-muted-foreground">No patients found matching your search.</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPatients
                    .slice(0, 3)
                    .map(patient => (
                      <PatientCard
                        key={patient.id}
                        id={patient.id}
                        name={patient.name}
                        email={patient.email}
                        phone={patient.phone}
                        lastVisit={patient.lastVisit}
                        avatarFallback={patient.avatarFallback}
                      />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="active">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPatients
                    .slice(3, 6)
                    .map(patient => (
                      <PatientCard
                        key={patient.id}
                        id={patient.id}
                        name={patient.name}
                        email={patient.email}
                        phone={patient.phone}
                        lastVisit={patient.lastVisit}
                        avatarFallback={patient.avatarFallback}
                      />
                    ))
                  }
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Patients;
