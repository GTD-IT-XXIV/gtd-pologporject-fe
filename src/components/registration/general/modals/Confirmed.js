import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Detailstyle.css";
const Confirmed = (props) => {
  const { confirmedShow, setConfirmedShow } = props;
  const { setNewEmail, setNewMobile, setNewName, setOneTick } = props;
  const { game, date, time } = props;
  return (
    <Modal show={confirmedShow} centered>
      <Modal.Header>
        <div className="esc-room">{game}</div>
        <div className="date">
          <div>{date}</div>
          <div>{time}</div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="confirmed_text">
          <div>Thank you for your purchase!</div>
          <div>You will receive an email with a 5 digit code.</div>
          <div>
            Please kindly show the code to the officer on the D-Day for
            verification
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="back_to_main_button"
          onClick={() => {
            setConfirmedShow(false);
            setNewEmail("");
            setNewMobile("");
            setNewName("");
            setOneTick(1);
          }}
        >
          Back to Main
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmed;
