import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { ArrowNextSVG, ArrowPreviousSVG, DropdownSVG } from "@/components/svgs";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const onPageChange = (selectedItem: { selected: number }) => {
    handlePageChange(selectedItem.selected + 1);
  };

  return (
    <div className={styles["container"]}>
      <div>
        Showing
        <span>
          10 <DropdownSVG fillColor="#6F83AA" />
        </span>
        out of 500
      </div>

      <ReactPaginate
        previousLabel={
          <div>
            <ArrowPreviousSVG />
          </div>
        }
        nextLabel={
          <div>
            <ArrowNextSVG />
          </div>
        }
        breakLabel="..."
        breakClassName={styles["ellipsis"]}
        pageCount={Math.max(totalPages, 1)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={styles["pagination"]}
        pageClassName={styles["page"]}
        previousClassName={styles["previous"]}
        nextClassName={styles["next"]}
        activeClassName={styles["selected"]}
        disabledClassName={styles["disabled"]}
        forcePage={Math.max(currentPage - 1, 0)}
      />
    </div>
  );
};

export default Pagination;
