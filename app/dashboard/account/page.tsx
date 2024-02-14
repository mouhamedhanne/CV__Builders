"use client";

import useSession from "@/hooks/useSession";

const AccountPage = () => {
  const { user } = useSession();
  console.log(user);

  return (
    <div>
      <h1>My Account</h1>
    </div>
  );
};

export default AccountPage;
