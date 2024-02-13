"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster richColors closeButton />
      {children}
    </>
  );
};

export default Providers;
