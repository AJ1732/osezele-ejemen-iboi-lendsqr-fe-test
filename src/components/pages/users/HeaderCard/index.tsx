import styles from "./headerCard.module.scss";

interface HeaderCardProps {
  userId: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ userId }) => {
  return (
    <section className={styles["headerCard"]}>
      <div className={styles["headerCard__info"]}>
        <div>
          <div />

          <div>
            <p>Grace Effiom</p>
            <span>{userId}</span>
          </div>
        </div>

        <div>
          <p>User&apos;s Tier</p>
          <span>stars</span>
        </div>

        <div>
          <p>₦200,000.00</p>
          <span>9912345678/Providus Bank</span>
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
