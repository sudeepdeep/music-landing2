import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <Outlet />
    </div>
  );
}

export default AppLayout;
