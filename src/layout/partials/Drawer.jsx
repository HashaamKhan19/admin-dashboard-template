import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import Logo from "../../assets/logo/main.png";
import { sidebarlinks } from "@/constants/sidebarlinks";
import { useState } from "react";

const Drawer = () => {
  const [selectedLink, setSelectedLink] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  return (
    <Sheet
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
      }}
    >
      <SheetTrigger>
        <AlignLeft />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <img
              src={Logo}
              alt="logo"
              className="w-40 mx-auto mt-4 dark:invert"
            />
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col w-full px-8 mt-10 space-y-2">
              {sidebarlinks.map((link, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center p-2 rounded-lg cursor-pointer
            ${
              selectedLink === link.title
                ? "bg-primary text-primary-foreground hover:bg-primary"
                : "hover:bg-secondary hover:text-secondary-foreground"
            }
            `}
                  onClick={() => {
                    setSelectedLink(link.title);
                    setOpen(!open);
                  }}
                >
                  <link.icon className="w-5 ml-1" />
                  <p className="ml-4 text-sm font-normal">{link.title}</p>
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
