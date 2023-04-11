const { default: React } = require("react");
const { Link } = require("react-router-dom");

export const NoCoinData = () => {
    return (
      <div className="card text-center">
        <div className="card-header">No Data Found</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link className="btn btn-primary btn-sm " to="/" role="button">
            Home
          </Link>
        </div>
      </div>
    );
  };