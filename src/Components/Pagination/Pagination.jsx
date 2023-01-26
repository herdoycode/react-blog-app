import "./Pagination.css";
const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page__item page__prev">
        <div className="page__link">Prev</div>
      </div>
      <div className="page__item">
        <div className="page__link">2</div>
      </div>
      <div className="page__item">
        <div className="page__link">3</div>
      </div>
      <div className="page__item">
        <div className="page__link">4</div>
      </div>
      <div className="page__item">
        <div className="page__link">4</div>
      </div>
      <div className="page__item page__next">
        <div className="page__link">Next</div>
      </div>
    </div>
  );
};

export default Pagination;
