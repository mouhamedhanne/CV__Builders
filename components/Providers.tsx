"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster richColors closeButton />
      {children}
      <ProgressBar
        height="3px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
