
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  Settings,
  Bell,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="h-5 w-5 mr-2" /> },
    { path: "/dashboard", label: "Dashboard", icon: <FileText className="h-5 w-5 mr-2" /> },
    { path: "/appointments", label: "Appointments", icon: <Calendar className="h-5 w-5 mr-2" /> },
    { path: "/patients", label: "Patients", icon: <Users className="h-5 w-5 mr-2" /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-healthcare-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center">
              <span className="text-healthcare-50">Health</span>
              <span className="text-white">Ease</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md transition-colors",
                  isActive(item.path)
                    ? "bg-healthcare-700 text-white"
                    : "text-healthcare-50 hover:bg-healthcare-700"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-healthcare-700">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-healthcare-700">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center ml-4 pl-4 border-l border-healthcare-500">
              <Button variant="ghost" size="sm" className="text-white hover:bg-healthcare-700">
                <User className="h-5 w-5 mr-2" />
                <span>Dr. Smith</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-healthcare-700"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-healthcare-500">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-colors",
                    isActive(item.path)
                      ? "bg-healthcare-700 text-white"
                      : "text-healthcare-50 hover:bg-healthcare-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center pt-4 mt-4 border-t border-healthcare-500">
                <Button variant="ghost" size="sm" className="text-white hover:bg-healthcare-700">
                  <User className="h-5 w-5 mr-2" />
                  <span>Dr. Smith</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
