"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";

interface FirstDialogProps {
  city: string;
  setCity: (city: string) => void;

  dialogIsOpen: boolean;
  setDialogIsOpen: (dialogIsOpen: boolean) => void;
}

export default function FirstDialog({ city, setCity, dialogIsOpen, setDialogIsOpen }: FirstDialogProps) {
  
  return (
    <Dialog open={dialogIsOpen}>


      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose city</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              onInput={(e) => setCity((e.target as HTMLInputElement).value)}
              id="name"
              value={city}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setDialogIsOpen(false)} type="submit">
            Show weather
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
