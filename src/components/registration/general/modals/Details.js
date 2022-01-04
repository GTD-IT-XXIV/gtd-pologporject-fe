import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
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
  const [checked, setChecked] = useState(false);
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
      temp.availableSlots - temp.onPayment >= oneTick &&
      checked
    ) {
      setShow(false);
      setFinalShow(true);
    } else {
      setError(true);
    }
  };
  const splitted = game.split(" ");
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <div className="esc-room">
            {splitted[0]} <span>{splitted[1]}</span>
          </div>
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
            <Form.Group
              className="checkbox"
              onClick={() => {
                setChecked(!checked);
              }}
            >
              <Form.Check
                checked={checked}
                className="checkboxTick"
              ></Form.Check>
              <div className="checkboxText">
                By filling this form, I hereby declare my consent for GTD to
                collect my personal information. I fully understand that the
                data collected may be used for further processing under GTD's
                discretion
              </div>
            </Form.Group>
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
        checked={checked}
      ></Error>
    </>
  );
};

export default Details;
