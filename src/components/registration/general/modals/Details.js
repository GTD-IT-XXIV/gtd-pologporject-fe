import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Detailstyle.css";
import Minus from "../assets/Minus";
import Plus from "../assets/Plus";
import Error from "./Error";
import axios from "axios";
import validator from "validator";
const Details = (props) => {
  const { newName, nameChange } = props;
  const { newEmail, emailChange } = props;
  const { newMobile, mobileChange } = props;
  const { oneTick, setOneTick } = props;
  const { show, setShow, setFinalShow } = props;
  const { oneData } = props;
  const { game, date } = props;
  const [error, setError] = useState(false);
  const [errRes, setErrRes] = useState("");
  const [slotsLeft, setSlotsLeft] = useState({
    availableSlots: 100,
    onPayment: 0,
  });
  let temp = { availableSlots: 100, onPayment: 0 };
  const handleNext = async () => {
    await axios.put(
      "https://desolate-cliffs-96244.herokuapp.com/book/expired",
      {
        game: game,
        time: oneData.timeSlot,
      }
    );
    await axios
      .get("https://desolate-cliffs-96244.herokuapp.com/book/check", {
        params: { game: game, time: oneData.timeSlot },
      })
      .then((res) => {
        setSlotsLeft(res.data);
        temp = res.data;
      });
    if (
      newName !== "" &&
      newEmail !== "" &&
      validator.isEmail(newEmail) &&
      newMobile !== "" &&
      validator.isMobilePhone(newMobile) &&
      oneTick !== 0 &&
      temp.availableSlots - temp.onPayment >= oneTick
    ) {
      setShow(false);
      setFinalShow(true);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <div className="esc-room">{game}</div>
          <div className="date">
            <div>{date}</div>
            <div>{oneData.timeSlot}</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Full Name<span className="asterisk">*</span>
                </Form.Label>
                <Form.Control
                  className="form_control"
                  required
                  type="name"
                  onChange={nameChange}
                  defaultValue={newName}
                ></Form.Control>
              </div>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Email<span className="asterisk">*</span>
                </Form.Label>
                <Form.Control
                  className="form_control"
                  required
                  type="email"
                  onChange={emailChange}
                  defaultValue={newEmail}
                ></Form.Control>
              </div>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Mobile Number<span className="asterisk">*</span>
                </Form.Label>
                <Form.Control
                  className="form_control"
                  required
                  type="phone"
                  onChange={mobileChange}
                  defaultValue={newMobile}
                ></Form.Control>
              </div>
            </Form.Group>
            <div className="tickets">
              <div className="one-ticket">
                <div className="tickets_heading">Single Tickets</div>
                <div className="tickets_number">
                  <Minus
                    onClick={(e) => {
                      e.preventDefault();
                      if (oneTick <= 1) {
                        return;
                      } else {
                        setOneTick(oneTick - 1);
                      }
                    }}
                  />

                  <div className="rectangle">
                    <div className="tickets_shown">{oneTick}</div>
                  </div>
                  <Plus
                    onClick={(e) => {
                      e.preventDefault();
                      if (oneTick >= oneData.availableSlots) {
                        return;
                      } else {
                        setOneTick(oneTick + 1);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="back_button"
            onClick={() => {
              setShow(false);
            }}
          >
            Back
          </button>
          <button className="next_button" onClick={handleNext}>
            Next
          </button>
        </Modal.Footer>
      </Modal>
      <Error
        show={error}
        setShow={setError}
        isValidateEmail={validator.isEmail(newEmail)}
        isValidatePhone={validator.isMobilePhone(newMobile)}
        isAvailable={oneTick > slotsLeft.availableSlots - slotsLeft.onPayment}
        availableSlots={slotsLeft.availableSlots}
        onPayment={slotsLeft.onPayment}
        error={errRes}
      ></Error>
    </>
  );
};

export default Details;
