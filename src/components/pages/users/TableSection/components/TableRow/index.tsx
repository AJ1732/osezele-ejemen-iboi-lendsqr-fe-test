"use client";
import { useRouter } from "next/navigation";
import { Badge } from "@/components";
import { RowData } from "../../types";
import styles from "./tablerow.module.scss";
import { MoreEllipseSVG } from "@/components/svgs";

interface TableRowProps {
  data: RowData;
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  const router = useRouter();

  return (
    <tr
      className={styles["row"]}
      onClick={() => router.push(`/users/${data.userId}`)}
    >
      <td className={styles["row__organization"]}>{data.organization}</td>
      <td className={styles["row__username"]}>{data.username}</td>
      <td className={styles["row__email"]}>{data.email}</td>
      <td className={styles["row__phoneNumber"]}>{data.phoneNumber}</td>
      <td className={styles["row__dateJoined"]}>{data.dateJoined}</td>
      <td className={styles["row__status"]}>
        <Badge label={data.status} />
      </td>
      <td className={styles["row__icon"]}>
        <button type="button">
          <MoreEllipseSVG />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
