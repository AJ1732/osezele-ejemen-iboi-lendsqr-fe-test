import { Button } from "@/components";
import styles from "./dashboard.module.scss";

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <Button
        label="Button"
        className={styles["dashboard__button"]}
      />
    </div>
  );
};
export default DashboardPage;
