
import React from "react";
import DashboardStats from "@/components/DashboardStats";
import UpcomingAppointments from "@/components/UpcomingAppointments";
import PatientRecords from "@/components/PatientRecords";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-healthcare-800">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Smith. Here's what's happening today.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-healthcare-600">Today:</span> Monday, April 7, 2025
          </div>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <UpcomingAppointments />
          <PatientRecords />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
