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
    error,
    availableSlots,
    onPayment,
  } = props;

  const theError = isValidatePhone
    ? isValidateEmail
      ? error === "not enough available slots!" || isAvailable
        ? "full"
        : error === "Cannot read property 'payment_request_id' of null" ||
          error === "payment not found"
        ? "fail"
        : "fill"
      : "email"
    : "mobile";
  const errorMessage = {
    mobile: "Enter the correct phone number",
    email: "Enter the correct email address",
    fill: "Please fill in the details",
    full: `Your booking exceeded the available slots. Available Slots: ${availableSlots}, Ongoing Payments: ${onPayment}.`,
    fail: "Payment not success!",
  };
  return (
    <Modal show={show} centered>
      <Modal.Body className="ErrorBody">
        <div>
          <Exclamation></Exclamation>
        </div>
        <div className="ErrorText">{errorMessage[theError]}</div>
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
