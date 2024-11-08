"use client";
import { useEffect, useState } from "react";
import { Pagination, TableRow } from "./components";
import { FilterResultsSVG } from "@/components/svgs";
import { fetchUsersData } from "@/data";
import { RowData } from "./types";
import styles from "./table.module.scss";

const TableSection = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    async function retrieveData() {
      const data = await fetchUsersData();
      setData(data);
    }
    retrieveData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / recordsPerPage);

  return (
    <section className={styles["container"]}>
      {/* TABLE */}
      <table className={styles["table"]}>
        <thead>
          <tr>
            {tablehead.map((head) => (
              <th key={head}>
                <div>
                  <span>{head}</span>
                  <button type="button">
                    <FilterResultsSVG />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((rowData, index) => (
            <TableRow key={index} data={rowData} />
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
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
