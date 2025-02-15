"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import FirstDialog from "@/components/ui/firstDialog";
//import MainCard from "@/components/ui/mainCard";
import { useState } from "react";
//import { Skeleton } from "@/components/ui/skeleton";
import Api from "./api";




const queryClient = new QueryClient();

export default function Home() {
  const [city, setCity] = useState('New york');
  const [isOpen, setIsOpen] = useState(true);
 


  return (
    <QueryClientProvider client={queryClient} >
      <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">

     <Api city={city} setCity={setCity} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </QueryClientProvider>
  );
}
