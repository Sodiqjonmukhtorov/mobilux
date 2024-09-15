'use client';

import { useEffect, useState } from "react";
import { MdTune } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBellClick = () => {
    const audio = new Audio(
      "https://audio-previews.elements.envatousercontent.com/files/148785970/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22RZFWLXE-bell-hop-bell.mp3%22"
    );
    audio.play();
  };

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="py-4 bg-white">
      <div className="container flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/">
          <img src="logo.svg" alt="logo" className="w-16 md:w-24" />
        </Link>

        {/* Qidiruv maydoni */}
        <form className="flex items-center flex-1 justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <input
                  className="px-2 rounded-lg md:px-4 w-full md:w-[700px] h-[40px] md:h-[49px] border-green-600 border-2 rounded-l-md lg:rounded-r"
                  type="text"
                  placeholder="Qidirish"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Searach</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Filter button faqat katta ekranlarda ko'rinadi */}
          <Button className="hidden md:flex bg-green-500 rounded-l-sm  text-sm md:text-base rounded-r-md w-[90px] md:w-[118px] h-[40px] md:h-[49px]">
            <MdTune className="mr-2 md:mr-4 text-lg" /> Filter
          </Button>
        </form>

        {/* Qo'ng'iroqcha va til tanlash */}
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Select>
                  <SelectTrigger className="w-[60px] h-[38px] md:w-[78px] bg-gray-100">
                    <SelectValue placeholder="UZ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>TILLAR</SelectLabel>
                      <SelectItem value="uz">UZ</SelectItem>
                      <SelectItem value="ru">RU</SelectItem>
                      <SelectItem value="in">IN</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="fr">FR</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TooltipTrigger>
              <TooltipContent>
                <p>Lang</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Qo'ng'iroq faqat katta ekranlarda ko'rinadi */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FaRegBell
                  className="hidden md:block text-2xl md:text-3xl rounded-full cursor-pointer"
                  onClick={handleBellClick}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Qo'ng'iroq sound</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Kirish tugmasi faqat katta ekranlarda ko'rinadi */}
          <div className="hidden md:block">
          <Sheet>
      <SheetTrigger asChild>
        <Button className="font-fontFamily text-lg" variant="outline">Kirish</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@nikname" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
          </div>

          {/* Avatar faqat mobilda ko'rinadi */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3276/3276535.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>Login</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Header;
