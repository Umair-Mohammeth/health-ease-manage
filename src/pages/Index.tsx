
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  FileText, 
  Bell, 
  Clock, 
  Stethoscope, 
  Clipboard, 
  ShieldCheck 
} from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Patient Management",
      description: "Easily manage patient records, history, and personal information.",
      icon: <Users className="h-10 w-10 text-healthcare-600" />,
      link: "/patients"
    },
    {
      title: "Appointment Scheduling",
      description: "Schedule, reschedule, and manage appointments efficiently.",
      icon: <Calendar className="h-10 w-10 text-healthcare-600" />,
      link: "/appointments"
    },
    {
      title: "Medical Records",
      description: "Store and access medical records securely in one place.",
      icon: <FileText className="h-10 w-10 text-healthcare-600" />,
      link: "/dashboard"
    },
    {
      title: "Reminders & Notifications",
      description: "Automated reminders for appointments and follow-ups.",
      icon: <Bell className="h-10 w-10 text-healthcare-600" />,
      link: "/dashboard"
    },
    {
      title: "Wait Time Management",
      description: "Track and manage patient wait times effectively.",
      icon: <Clock className="h-10 w-10 text-healthcare-600" />,
      link: "/dashboard"
    },
    {
      title: "Medical Inventory",
      description: "Track supplies, medications, and equipment inventory.",
      icon: <Clipboard className="h-10 w-10 text-healthcare-600" />,
      link: "/dashboard"
    },
    {
      title: "Prescription Management",
      description: "Create, review, and manage patient prescriptions.",
      icon: <Stethoscope className="h-10 w-10 text-healthcare-600" />,
      link: "/dashboard"
    },
    {
      title: "HIPAA Compliant",
      description: "Secure and compliant with healthcare privacy regulations.",
      icon: <ShieldCheck className="h-10 w-10 text-healthcare-600" />,
      link: "/dashboard"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full healthcare-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simplify Healthcare Management
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            HealthEase helps medical professionals streamline operations, 
            manage patients, and provide better care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-healthcare-700 hover:bg-healthcare-50"
            >
              <Link to="/dashboard">Get Started</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-healthcare-700"
            >
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-healthcare-800">
            Powerful Features
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your healthcare practice efficiently in one place.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-healthcare-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button 
                    asChild
                    variant="ghost" 
                    className="mt-auto text-healthcare-600 hover:text-healthcare-700 hover:bg-healthcare-50"
                  >
                    <Link to={feature.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-healthcare-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-healthcare-800">
            Ready to transform your healthcare practice?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join thousands of healthcare professionals who have improved their practice management with HealthEase.
          </p>
          <Button 
            asChild
            size="lg" 
            className="healthcare-gradient"
          >
            <Link to="/dashboard">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 HealthEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
