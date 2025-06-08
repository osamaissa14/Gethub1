import "bootstrap/dist/css/bootstrap.min.css";
import downloadImg from "./assets/download.png";
import PropTypes from "prop-types";

function Card() {
    Card.PropTypes={
    name: PropTypes.string,
    discription: PropTypes.string,
    age: PropTypes.number,
    isStaff: PropTypes.bool,
}
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={downloadImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

Card.PropTypes={
    name: PropTypes.string,
    discription: PropTypes.string,
    age: PropTypes.number,
    isStaff: PropTypes.bool,
}

export default Card;
