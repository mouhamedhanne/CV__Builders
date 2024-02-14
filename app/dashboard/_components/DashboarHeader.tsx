"use client";
import Logo from "@/components/Logo/page";
import UserDropdown from "./UserDropdown";

const DashboardHeader = () => {
  return (
    <nav className="p-4 border-b border-slate-300">
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
