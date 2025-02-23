import Image from "next/image";
import { NomNom } from "../toggle-menu/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { CloudnaryUpload } from "@/app/_components/Cloudnary";

export default function Dishes() {
  return (
    <div className="flex w-[1376px]">
      <div className="w-[205px]">
        <NomNom />
      </div>
      <div className="w-[1171px] h-[582px]">
        <div className="w-[28px] h-[28px]">
          <h2 className="text-[20px]">Appetizers(6)</h2>
        </div>
        <div className="w-[1131px] h-[241px] items-center edrounded-lg flex gap-3">
          <div className="relative border-[1px]">
            <Image
              src="/"
              alt=""
              width={271}
              height={241}
              className="w-[241px] h-[200px]"
            />
            <div className="flex flex-col items-center">
              <p>Add new Dish to </p>
              <p>Salads</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="absolute bottom-[50%] left-[40%] rounded-full bg-[#EF4444] w-[40px] h-[40px]"
                >
                  +
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Food name
                    </Label>
                    <Input
                      id="name"
                      value="placeholder"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Food price
                    </Label>
                    <Input
                      id="username"
                      value="placeholder"
                      className="col-span-3"
                    />
                  </div>
                  <div>
                    <CloudnaryUpload />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add dishes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex object-contain flex-col w-[241px] items-center">
            <div className="flex justify-center p-1">
              <Image width={270} height={241} src="/Product Image.png" alt="" />
            </div>
            <div className="flex gap-2 w-[238.75px] h-[20px]">
              <h2 className="text-[#EF4444]">Brie Crostini Appetizer</h2>
              <p>12.99$</p>
            </div>
            <p>
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>
        </div>
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">+</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new Dish to Appetizers</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Food name
                </Label>
                <Input id="name" value="placeholder" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Food price
                </Label>
                <Input
                  id="username"
                  value="placeholder"
                  className="col-span-3"
                />
              </div>
              <div>
                <CloudnaryUpload />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add dishes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
      </div>
    </div>
  );
}
