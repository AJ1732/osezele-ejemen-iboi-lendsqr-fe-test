"use client";
import { useState, useEffect } from "react";
import { ApiData } from "@/types/userRecords";
import { fetchUsersData } from "@/data";
import styles from "./detailsSection.module.scss";

interface DetailsSectionProps {
  userId: string;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ userId }) => {
  const [userRecord, setUserRecord] = useState<ApiData | null>(null);

  useEffect(() => {
    async function retrieveData() {
      const allData = await fetchUsersData();
      const userData = allData.find((user) => user.userId === userId);
      setUserRecord(userData || null);
    }

    retrieveData();
  }, [userId]);

  console.log(userRecord);

  if (!userRecord) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles["detailsSection"]}>
      <div>
        <h3>Education and Employment</h3>
        <div>
          {Object.entries(userRecord.educationEmployment).map(
            ([key, value]) => (
              <div key={key}>
                <h4>{key}</h4>
                <p>{value}</p>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <h3>Socials</h3>
        <div>
          {Object.entries(userRecord.socials).map(([key, value]) => (
            <div key={key}>
              <h4>{key}</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>Guarantor</h3>
        <div>
          
          {Object.entries(userRecord.guarantor).map(([key, value]) => (
            <div key={key}>
              <h4>{key}</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DetailsSection;
