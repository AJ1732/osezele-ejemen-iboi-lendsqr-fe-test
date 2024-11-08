"use client";
import { useState, useEffect } from "react";
import { fetchUsersData } from "@/data";
import { ApiData } from "@/types/userRecords";
import { formatToThousands } from "@/utils";
import styles from "./headerCard.module.scss";
import { ProfileUserSVG } from "@/components/svgs";

interface HeaderCardProps {
  userId: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ userId }) => {
  const [userRecord, setUserRecord] = useState<ApiData | null>(null);

  useEffect(() => {
    async function retrieveData() {
      const allData = await fetchUsersData();
      const userData = allData.find((user) => user.userId === userId);
      setUserRecord(userData || null);
    }

    retrieveData();
  }, [userId]);

  if (!userRecord) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles["headerCard"]}>
      <div className={styles["headerCard__info"]}>
        <div>
          <div>
            <ProfileUserSVG />
          </div>

          <div>
            <p>{userRecord.fullName}</p>
            <span>{userId}</span>
          </div>
        </div>

        <div>
          <p>User&apos;s Tier</p>
          <span>{userRecord.userTier}</span>
        </div>

        <div>
          <p>₦{formatToThousands(userRecord.accountBalance)}.00</p>
          <span>
            {userRecord.bvn}/{userRecord.bank}
          </span>
        </div>
      </div>

      <div className={styles["headerCard__tabs"]}>
        {tabs.map((tab) => (
          <div key={tab}>
            <span>{tab}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeaderCard;

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];
