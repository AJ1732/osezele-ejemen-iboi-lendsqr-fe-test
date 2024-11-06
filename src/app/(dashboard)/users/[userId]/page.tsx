"use client";
import { usePathname } from "next/navigation";
import { HeaderCard, DetailsSection } from "@/components";

const UserDetailsPage: React.FC = () => {
  const pathname = usePathname();
  const userId = pathname?.split("/")[2];

  return (
    <>
      <HeaderCard userId={userId} />
      <DetailsSection userId={userId} />
    </>
  );
};

export default UserDetailsPage;
