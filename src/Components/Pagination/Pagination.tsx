import React from "react";
import "./Pagination.css";

interface Props {
  count: number;
  paginate: (pageNumber: number) => void;
  pagesPerPage: number;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

const Pagination = ({
  count,
  paginate,
  pagesPerPage,
  currentPage,
  nextPage,
  prevPage,
}: Props) => {
  const pagesCount = Math.ceil(count / pagesPerPage);
  const onPageNumberClick = (i: number) => {
    paginate(i);
  };
  return (
    <>
      <div className="pagination">
        <button
          disabled={currentPage <= 1}
          onClick={prevPage}
          className="page__btn page__prev"
        >
          <div className="page__link">Prev</div>
        </button>

        {[...new Array(pagesCount)].map((_, i) => (
          <div
            key={i}
            onClick={() => onPageNumberClick(i + 1)}
            className={currentPage === i + 1 ? "page__item fuck" : "page__item"}
          >
            <div key={i} className="page__link" style={{ cursor: "pointer" }}>
              {i + 1}
            </div>
          </div>
        ))}

        <button
          disabled={currentPage === pagesCount}
          onClick={nextPage}
          className="page__btn page__next"
        >
          <div className="page__link">Next</div>
        </button>
      </div>
    </>
  );
};

export default Pagination;
