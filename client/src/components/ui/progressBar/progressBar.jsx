import PropTypes from "prop-types";
import "./progressBar.scss";

const ProgressBar = ({ progress, fileName, size }) => {
  return (
    <div className="progress-container">
      <img src="/imgs/file.png" alt="File icon" />
      <div className="file-cont">
        <div className="div">
          <span>
            <p>{fileName}</p>
            <p>{size}</p>
          </span>

          <img
            src="/imgs/check.png"
            alt="File icon"
            className={`check-icon ${progress >= 100 ? "active" : "inactive"}`}
          />
        </div>
        <div className="progress-bar">
          <div
            style={{
              width: `${progress}%`,
            }}
            className="progress"
          />
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  fileName: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ProgressBar;
