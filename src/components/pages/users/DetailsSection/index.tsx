"use client";
import { useState, useEffect } from "react";
import { ApiData } from "@/types/userRecords";
import { formatToThousands } from "@/utils";
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
          <div>
            <h4>level of education</h4>
            <p>{userRecord.educationEmployment.level}</p>
          </div>

          <div>
            <h4>employment status</h4>
            <p>
              {userRecord.educationEmployment.employmentStatus
                .charAt(0)
                .toUpperCase() +
                userRecord.educationEmployment.employmentStatus
                  .slice(1)
                  .toLowerCase()}
            </p>
          </div>

          <div>
            <h4>sector of employment</h4>
            <p>{userRecord.educationEmployment.sector}</p>
          </div>

          <div>
            <h4>duration of employment</h4>
            <p>{userRecord.educationEmployment.employmentDuration} years</p>
          </div>

          <div>
            <h4>office email</h4>
            <p>{userRecord.educationEmployment.officeEmail}</p>
          </div>

          <div>
            <h4>monthly income</h4>
            <p>{userRecord.educationEmployment.monthlyIncome}</p>
          </div>

          <div>
            <h4>loan repayment</h4>
            <p>
              {formatToThousands(userRecord.educationEmployment.loanRepayment)}
            </p>
          </div>
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
          <div>
            <h4>full Name</h4>
            <p>{userRecord.guarantor.fullName}</p>
          </div>

          <div>
            <h4>Phone Number</h4>
            <p>{userRecord.guarantor.phoneNumber}</p>
          </div>

          <div>
            <h4>Email Address</h4>
            <p>debby@gmail.com</p>
          </div>

          <div>
            <h4>Relationship</h4>
            <p>
              {userRecord.guarantor.relationship.charAt(0).toUpperCase() +
                userRecord.guarantor.relationship.slice(1).toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsSection;
