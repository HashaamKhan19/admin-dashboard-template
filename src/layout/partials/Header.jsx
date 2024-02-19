import { ModeToggle } from "@/components/shared/theme-toggle";
import UserMenu from "@/components/shared/user-menu";
import Drawer from "./Drawer";

const Header = () => {
  return (
    <div className=" bg-primary-foreground h-[70px] border-b border-primary-foreground">
      <div className="flex flex-row items-center justify-between h-full px-8">
        <h1 className="hidden text-xl font-semibold md:text-2xl text-primary md:block">
          Admin Dashboard
        </h1>
        <div className="block md:hidden">
          <Drawer />
        </div>
        <div className="flex flex-row items-center justify-center space-x-6">
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
