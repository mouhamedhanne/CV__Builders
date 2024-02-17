import Homepage from "@/app/Home/page";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <main>
        <div>
          <Homepage />
        </div>
      </main>
    </Suspense>
  );
}
