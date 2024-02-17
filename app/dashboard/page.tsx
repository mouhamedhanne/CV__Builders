import { Suspense } from "react";

const CvBuilder = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Dashboard</div>;
    </Suspense>
  );
};

export default CvBuilder;
