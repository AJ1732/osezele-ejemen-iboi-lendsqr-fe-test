import clsx from "clsx";
import { userStats } from "./constants";
import styles from "./statSection.module.scss";

const StatsSection = () => {
  return (
    <section className={styles["statsContainer"]}>
      {userStats.map(({ id, Icon, title, figures }) => (
        <div key={id}>
          <div className={clsx(styles["icon"], styles[`icon--${id}`])}>
            <Icon />
          </div>
          <h4>{title}</h4>
          <p>{figures}</p>
        </div>
      ))}
    </section>
  );
};
export default StatsSection;
