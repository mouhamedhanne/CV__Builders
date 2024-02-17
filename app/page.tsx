import Homepage from "@/app/Home/page";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <div>
          <Homepage />
        </div>
      </main>
    </Suspense>
  );
}
