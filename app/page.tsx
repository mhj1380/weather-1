"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FirstDialog from "@/components/ui/firstDialog";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const queryClient = new QueryClient();

export default function Home() {
  const [city, setCity] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        <FirstDialog city={city} setCity={setCity} dialogIsOpen={isOpen} setDialogIsOpen={setIsOpen} />
<button onClick={() => setIsOpen(true)}>Open dialog</button>
{city ==='' && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
      </div>
    </QueryClientProvider>
  );
}
