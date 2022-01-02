import Modal from "react-bootstrap/Modal";
import Exclamation from "../assets/Exclamation";
import "./Error.css";

export default function Error(props) {
  const {
    show,
    setShow,
    isValidatePhone,
    isValidateEmail,
    isAvailable,
    availableSlots,
    onPayment,
  } = props;
  const theError = isValidatePhone
    ? isValidateEmail
      ? isAvailable
        ? "fill"
        : "full"
      : "email"
    : "mobile";
  const error = {
    mobile: "Enter the correct phone number",
    email: "Enter the correct email address",
    fill: "Please fill in the details",
    full: `Capacity left is ${availableSlots} and ${onPayment} on going payments`,
  };
  return (
    <Modal show={show} centered>
      <Modal.Body className="ErrorBody">
        <div>
          <Exclamation></Exclamation>
        </div>
        <div className="ErrorText">{error[theError]}</div>
        <div
          className="ErrorButton"
          onClick={(e) => {
            e.preventDefault();
            setShow(false);
          }}
        >
          OK
        </div>
      </Modal.Body>
    </Modal>
  );
}
