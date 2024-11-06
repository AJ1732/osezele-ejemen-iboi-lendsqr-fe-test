import styles from "./detailsSection.module.scss";

interface DetailsSectionProps {
  userId: string;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ userId }) => {
  return (
    <section className={styles["detailsSection"]}>
      {[1, 2, 3].map((item) => (
        <div key={item}>
          <h3>Section Title {item}</h3>

          <div>
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <h4>title</h4>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default DetailsSection;
