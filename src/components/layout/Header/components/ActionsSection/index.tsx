import Link from "next/link";
import Image from "next/image";
import { NotificationSVG, Dropdown2SVG } from "@/components/svgs";
import styles from "./actionsSection.module.scss";

const ActionsSection = () => {
  return (
    <div className={styles["header__actions"]}>
      <Link href={"."}>Docs</Link>

      <div className={styles["header__actions__icon"]}>
        <NotificationSVG />
      </div>

      <div className={styles["header__actions__profile"]}>
        <figure>
          <Image
            src={"/img/profile-img.png"}
            alt="profile"
            width={48}
            height={48}
          />
        </figure>
        <span>Adedeji</span>
        <Dropdown2SVG />
      </div>
    </div>
  );
};
export default ActionsSection;
