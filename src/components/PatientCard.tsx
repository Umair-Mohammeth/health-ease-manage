
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PatientCardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  avatarFallback: string;
  className?: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  email,
  phone,
  lastVisit,
  avatarFallback,
  className,
}) => {
  return (
    <Card className={cn("card-shadow", className)}>
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-healthcare-100">
            <AvatarFallback className="bg-healthcare-100 text-healthcare-700">{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <CalendarClock className="h-4 w-4 mr-1 text-healthcare-500" />
              <span>Last visit: {lastVisit}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-2 mt-4">
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-2 text-healthcare-500" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2 text-healthcare-500" />
            <span>{email}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;
