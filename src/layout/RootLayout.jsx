import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-[280px]">
        <Header />
        <div className="h-full px-8 pt-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
