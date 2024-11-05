"use client";
import { DetailsPage } from "@/components";
import { usePathname } from "next/navigation";

const UserDetailsPage: React.FC = () => {
  const pathname = usePathname();

  const userId = pathname?.split("/")[2];

  return (
    <div>
      User Details Page for ID: {userId}
      <DetailsPage />
    </div>
  );
};

export default UserDetailsPage;
