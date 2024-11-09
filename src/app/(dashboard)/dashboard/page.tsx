import { Button } from "@/components";
import styles from "./dashboard.module.scss";

const DashboardPage = () => {
  return (
    <div className={styles["dashboard"]}>
      {dashboardData.map((loan, index) => (
        <div key={index} className="">
          <div>
            <div />
            <h4>{loan.title}</h4>
            <p>{loan.amount}</p>
          </div>

          <div>
            {loan.details.map((detail, i) => (
              <div key={i}>
                <p>{detail.label}</p>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DashboardPage;

const dashboardData = [
  {
    title: "All loans",
    amount: "NGN19,500.00",
    details: [
      { label: "COUNT", value: 13 },
      { label: "DISBURSED", value: "NGN19,300.00" },
      { label: "PAID", value: "NGN19,500.00" },
    ],
  },
  {
    title: "Running loans",
    amount: "0",
    details: [
      { label: "COUNT", value: 0 },
      { label: "DISBURSED", value: 0 },
      { label: "INTEREST", value: 0 },
      { label: "FEES", value: 0 },
    ],
  },
  {
    title: "Paid loans",
    amount: "NGN19,500.00",
    details: [
      { label: "COUNT", value: 13 },
      { label: "DISBURSED", value: "NGN19,300.00" },
      { label: "INTEREST", value: "NGN2,340.00" },
      { label: "FEES", value: "NGN200.00" },
    ],
  },
  {
    title: "Past due loans",
    amount: "0",
    details: [
      { label: "COUNT", value: 0 },
      { label: "DISBURSED", value: 0 },
      { label: "INTEREST", value: 0 },
      { label: "PENALTY", value: 0 },
    ],
  },
];
