import Modal from "react-bootstrap/Modal";
// import React from "react";
import EditModalImg from "../assets/images/modal/editTeamImg.png";

export default function EditTeamModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h1 className="modal-heading">edit team</h1>
        <div className="upload-img-section">
          <div className="show-img-modal">
            <img src={EditModalImg} alt="Banner" />
          </div>
          <div className="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">upload banner image Remove</label>
            <p>Remove</p>
          </div>
        </div>
        <div className="team-name-section">
          <label For="">Team Name</label>
          <input className="modal-input" type="text" placeholder="Riverside Hawks"/>
        </div>
        <div className="modal-btns">
          <button className="updateBtn" onClick={props.onHide} type="submit">Update</button>
          <button className="cancelBtn" onClick={props.onHide} type="">Cancel</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
