import React from "react";
import styles from "./FilterForm.module.scss";
import clsx from "clsx";

interface FilterFormProps {
  openForm: boolean;
  className?: string;
}

const FilterForm: React.FC<FilterFormProps> = ({ openForm, className }) => {
  if (!openForm) return null;

  return (
    <form className={clsx(styles["filter-form"], className)}>
      <div>
        <label className={styles["filter-form__label"]}>Organization</label>
        <select className={styles["filter-form__input--select"]}>
          <option value="">Select</option>
        </select>
      </div>

      <div>
        <label className={styles["filter-form__label"]}>Username</label>
        <input
          type="text"
          placeholder="User"
          className={styles["filter-form__input"]}
        />
      </div>

      <div>
        <label className={styles["filter-form__label"]}>Email</label>
        <input
          type="email"
          placeholder="Email"
          className={styles["filter-form__input"]}
        />
      </div>
      <div>
        <label className={styles["filter-form__label"]}>Date</label>
        <input type="date" className={styles["filter-form__input"]} />
      </div>

      <div>
        <label className={styles["filter-form__label"]}>Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          className={styles["filter-form__input"]}
        />
      </div>

      <div>
        <label className={styles["filter-form__label"]}>Status</label>
        <select className={styles["filter-form__input--select"]}>
          <option value="">Select</option>
        </select>
      </div>

      <div className={styles["filter-form__buttons"]}>
        <button
          type="button"
          className={clsx(
            styles["filter-form__button"],
            styles["filter-form__button--reset"]
          )}
        >
          Reset
        </button>
        <button
          type="submit"
          className={clsx(
            styles["filter-form__button"],
            styles["filter-form__button--filter"]
          )}
        >
          Filter
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
