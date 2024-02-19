import { sidebarlinks } from "@/constants/sidebarlinks";
import Logo from "../../assets/logo/main.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 h-screen bg-primary-foreground w-[280px] md:block hidden border-r border-slate-300 border-dashed dark:border-secondary">
      <div className="flex flex-col items-center">
        <div className="w-full mt-4 mb-12">
          <img src={Logo} alt="logo" className="w-40 mx-auto dark:invert" />
        </div>
        <div className="flex flex-col w-full px-8 space-y-2">
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
                navigate(link.path);
              }}
            >
              <link.icon className="w-5 ml-1" />
              <p className="ml-4 text-sm font-normal">{link.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
