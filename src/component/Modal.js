import React from "react";

const Modal = React.memo(function Modal({ modalID, title, bDesc, gpStatement, rAndC }) {
  return (
    <div className="main-content">
      <div className="modal fade" id={modalID} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable text-center">
          <div className="modal-content">
            
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalSVLabel">
                App Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            <div className="modal-body">
              <h1>{title}</h1>
              
              <h4>Brief Description:</h4>
              <p>{bDesc}</p>
              
              <h4>Goals and Problem Statement:</h4>
              <p>{gpStatement}</p>
              
              <h4>Role and Contributions:</h4>
              <p>{rAndC}</p>
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;