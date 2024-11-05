import styles from "./statSection.module.scss";

const StatsSection = () => {
  return (
    <section className={styles["statsContainer"]}>
      {[1, 2, 3, 4].map((item) => (
        <div key={item}>
          <div></div>
          <h4>title</h4>
          <p>1000</p>
        </div>
      ))}
    </section>
  );
};
export default StatsSection;
