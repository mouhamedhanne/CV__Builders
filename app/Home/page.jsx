import Navigations from "@/components/Navigations/page";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <Navigations />
    </Suspense>
  );
}
