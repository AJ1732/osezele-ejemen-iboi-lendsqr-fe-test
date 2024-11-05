"use client";
import { usePathname } from "next/navigation";

const UserDetailsPage: React.FC = () => {
  const pathname = usePathname();

  const userId = pathname?.split("/")[2];

  return <div>User Details Page for ID: {userId}</div>;
};

export default UserDetailsPage;
