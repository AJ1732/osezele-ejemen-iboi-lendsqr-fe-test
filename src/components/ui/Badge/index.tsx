import clsx from "clsx";
import styles from "./badge.module.scss";

interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  const badgeClass = clsx(styles.badge, {
    [styles["badge--inactive"]]: label.toLowerCase() === "inactive",
    [styles["badge--pending"]]: label.toLowerCase() === "pending",
    [styles["badge--blacklisted"]]: label.toLowerCase() === "blacklisted",
    [styles["badge--active"]]: label.toLowerCase() === "active",
  });

  return <div className={badgeClass}>{label}</div>;
};
export default Badge;
