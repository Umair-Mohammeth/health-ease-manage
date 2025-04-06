
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

type AppointmentStatus = "scheduled" | "completed" | "canceled" | "no-show";

interface AppointmentCardProps {
  id: string;
  patientName: string;
  appointmentType: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  className?: string;
}

const statusMap: Record<AppointmentStatus, { color: string; label: string }> = {
  scheduled: { color: "bg-blue-100 text-blue-800", label: "Scheduled" },
  completed: { color: "bg-green-100 text-green-800", label: "Completed" },
  canceled: { color: "bg-red-100 text-red-800", label: "Canceled" },
  "no-show": { color: "bg-orange-100 text-orange-800", label: "No Show" },
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  patientName,
  appointmentType,
  date,
  time,
  status,
  className,
}) => {
  const statusDetails = statusMap[status];

  return (
    <Card className={cn("card-shadow", className)}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{patientName}</h3>
            <p className="text-sm text-muted-foreground">{appointmentType}</p>
          </div>
          <Badge className={statusDetails.color}>{statusDetails.label}</Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-healthcare-500" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-healthcare-500" />
            {time}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
