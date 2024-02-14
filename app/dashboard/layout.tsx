import { ReactNode } from "react";
import DashboardHeader from "./_components/DashboarHeader";

type DashboarLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboarLayoutProps) => {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
};

export default DashboardLayout;
