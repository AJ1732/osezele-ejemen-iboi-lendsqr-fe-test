import Image from "next/image";
import { LoginForm } from "@/components";
import { LogoSVG } from "@/components/svgs";
import styles from "./login.module.scss";

const LoginPage = () => {
  return (
    <div className={styles["loginPage"]}>
      <div>
        <LogoSVG />

        <figure>
          <Image src={"/img/login-image.png"} alt="login image" fill />
        </figure>
      </div>

      <div>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
