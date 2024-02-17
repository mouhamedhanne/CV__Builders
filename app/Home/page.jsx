import Navigations from "@/components/Navigations/page";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigations />
      </Suspense>
    
  );
}
