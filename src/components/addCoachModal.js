import Modal from "react-bootstrap/Modal";
import AddCoach from "../assets/images/coaches/addcoach.png";

export default function AddCoachModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h1 className="modal-heading">add a coach</h1>
        <div className="upload-img-section">
          <div className="coach-img-modal">
            <img src={AddCoach} alt="Coachimage" />
          </div>
          <div className="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">
              upload banner image Remove
            </label>
            <p>Remove</p>
          </div>
        </div>
        <div className="coach-modal-info">
          <div>
            <label For="">Team Name</label>
            <input
              className="modal-input"
              type="text"
              placeholder="First and Last Name"
            />
          </div>
          <div>
            <label For="">Email Address</label>
            <input
              className="modal-input"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label For="">Cost of Training</label>
            <input className="modal-input" type="text" placeholder="$" />
          </div>
          <div>
            <label For="">GameUp Username</label>
            <input className="modal-input" type="text" placeholder="@" />
          </div>
        </div>
        <div className="coach-btn-section">
          <div className="modal-btns coach-btns">
            <button className="updateBtn coachUpdate" onClick={props.onHide} type="submit">
              Add coach
            </button>
            <button className="cancelBtn coachCancel" onClick={props.onHide} type="">
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
