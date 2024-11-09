"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./loginform.module.scss";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push("/dashboard");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles["login-form"]}>
      <div className={styles["login-form__header"]}>
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles["login-form__form"]}>
        <div className={styles["login-form__group"]}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className={styles["login-form__input"]}
          />
        </div>

        <div
          className={clsx(
            styles["login-form__group"],
            styles["login-form__group--password"]
          )}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className={styles["login-form__input"]}
          />
          <span
            onClick={togglePasswordVisibility}
            className={styles["login-form__show-password"]}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </span>
        </div>

        <div className={styles["login-form__forgot-password"]}>
          <a href="#" className={styles["login-form__forgot-password-link"]}>
            Forgot Password?
          </a>
        </div>

        <button type="submit" className={styles["login-form__button"]}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
