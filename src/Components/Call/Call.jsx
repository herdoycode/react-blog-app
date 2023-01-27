import "./Call.css";

const Call = () => {
  return (
    <div className="call__wrapper">
      <div className="container">
        <div className="call">
          <div className="call__left">
            <button className="btn btn-primary">More About Us</button>
            <h2>You Want To Showcase Your Website In Top Join With Us</h2>
          </div>
          <div className="call__right">
            <button className="call__btn"> {">"} </button>{" "}
            <a href="#">Join now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
