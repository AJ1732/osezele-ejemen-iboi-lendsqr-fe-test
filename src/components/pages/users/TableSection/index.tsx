import { TableRow } from "./components";
import { RowData } from "./types";
import styles from "./table.module.scss";

const TableSection = () => {
  return (
    <section className={styles["container"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            {tablehead.map((head) => (
              <th key={head}>
                <div>
                  <span>{head}</span> <div />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <TableRow key={index} data={rowData} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default TableSection;

const tablehead = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
  "",
];

const data: RowData[] = [
  {
    userId:"LSQFf587g90",
    organization: "Lendsqr",
    username: "Darby Diegnan",
    email: "darby.diegnan@landstar.com",
    phoneNumber: "0765534229",
    dateJoined: "Apr 26, 2020 05:00 AM",
    status: "Inactive",
  },
  {
    userId:"LSR253041",
    organization: "Landstar",
    username: "Darby Diegnan",
    email: "darby.diegnan@landstar.com",
    phoneNumber: "0765534229",
    dateJoined: "Apr 26, 2020 05:00 AM",
    status: "Inactive",
  },
];
