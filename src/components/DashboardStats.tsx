
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, ClipboardList, Clock } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, description, trend }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-healthcare-100 flex items-center justify-center text-healthcare-700">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {trend && (
          <div className={`text-xs ${trend.isPositive ? 'text-green-600' : 'text-red-600'} mt-1`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Patients"
        value="1,248"
        icon={<Users className="h-4 w-4" />}
        trend={{ value: "12% from last month", isPositive: true }}
      />
      <StatCard
        title="Appointments Today"
        value="24"
        icon={<Calendar className="h-4 w-4" />}
        description="8 completed, 16 remaining"
      />
      <StatCard
        title="Pending Reports"
        value="7"
        icon={<ClipboardList className="h-4 w-4" />}
        trend={{ value: "3 less than yesterday", isPositive: true }}
      />
      <StatCard
        title="Average Wait Time"
        value="14 min"
        icon={<Clock className="h-4 w-4" />}
        trend={{ value: "2 min from last week", isPositive: false }}
      />
    </div>
  );
};

export default DashboardStats;
