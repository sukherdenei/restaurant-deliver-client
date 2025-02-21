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

export default function Dishes() {
  return (
    <div className="flex w-[1376px]">
      <div className="w-[205px]">
        <NomNom />
      </div>
      <div className="w-[1171px]">
        <div className="w-[28px] h-[28px]">
          <h1 className="text-[20px]">Appetizers(6)</h1>
        </div>
        <div className="w-[270px] h-[241px] rounded-lg border-[1px]">
          <div className="border-[1px] border-red-600">
            <Image
              src="/"
              alt=""
              width={271}
              height={241}
              className="w-[241px] h-[270px]"
            />
            <p>Add new Dish to Appetizers</p>
          </div>
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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#EF4444] rounded-full flex w-[40px] h-[40px] items-center justify-center"
            >
              +
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new Dish to Appetizeres</DialogTitle>
              {/* <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription> */}
            </DialogHeader>
            <div className="flex w-full">
              <div className="flex">
                <Label htmlFor="name" className="text-right">
                  Food name
                </Label>
                {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
              </div>
              <div className="grid grid-cols-4 items-center gap-4 overflow-hidden">
                <Label htmlFor="name" className="text-right">
                  Food price
                </Label>
                <Label htmlFor="Ingredients">Ingredients</Label>
                <Input
                  id="username"
                  value=""
                  className="col-span-3 w-[412px] h-[112px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Dish</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
