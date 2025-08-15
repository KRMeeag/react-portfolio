import React from "react";

const Cards = React.memo(function Cards({ img, alt, title, description, targetID, onTitleClick }) {
  const ariaControls = targetID ? targetID.replace("#", "") : undefined;

  return (
    <div className="col">
      <div className="card h-100 text-center mb-3">
        <img src={img} className="card-img-top" alt={alt} />

        <div className="card-body d-flex flex-column">
          <h5
            className="card-title"
            onClick={onTitleClick}
          >
            {title}
          </h5>

          <p className="card-text">{description}</p>

          <div className="mt-auto">
            <button
              type="button"
              className="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target={targetID}
              aria-controls={ariaControls}
              aria-haspopup="dialog"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cards;
