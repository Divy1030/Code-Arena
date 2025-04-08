import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Plus } from "lucide-react";
import codingHuman from '../../assets/Programming-rafiki (1) 1.png'
import pythonLogo from '../../assets/pythonLogo.png'
import jsLogo from '../../assets/jsLogo.png'
import cplusLogo from '../../assets/c++Logo.png'

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* Hero */}
      <div className="flex flex-col md:flex-row justify-between items-center px-24 py-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Enter the Arena, Unleash Your Coding Skills, and Conquer the Challenge.
          </h2>
          <p className="text-gray-300 text-lg">
            Join competitive coding contests and improve your programming skills through real-world challenges
          </p>
        </div>
        <img
          src={codingHuman}
          alt="Coding Illustration"
          className="w-[427px] h-[427px] 
 mt-10 md:mt-0"
        />
      </div>

      {/* Manage Contests */}
      <div className="px-24 bg-[#121B38] py-16">
        <h3 className="text-2xl font-semibold mb-6">Manage Contests</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <Card key={index} className="bg-[#4A55A2] text-white">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">Weekly Challenge #45</h4>
                  <span className="text-xs bg-yellow-500 text-black rounded-full px-2 py-0.5">Medium</span>
                </div>
                <p className="text-sm text-gray-200 mb-4">
                  <User className="inline-block w-4 h-4 mr-1" />234 participants
                </p>
                <div className="flex space-x-2 mb-4">
                  <img src={jsLogo} className="w-5 h-5" alt="JS" />
                  <img src={pythonLogo} className="w-5 h-5" alt="Python" />
                  <img src={cplusLogo} className="w-5 h-5" alt="Reload" />
                </div>
                <Button className="bg-orange-400 text-black hover:bg-orange-500 w-full">
                  Edit Contest
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 

