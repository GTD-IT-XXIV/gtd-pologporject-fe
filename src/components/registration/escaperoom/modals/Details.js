import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, Button } from "react-bootstrap";
import FinalDetails from "./FinalDetails";
import "./Detailstyle.css";
const Details = (props) => {
  const { name, newName, setNewName, nameChange } = props;
  const { email, newEmail, setNewEmail, emailChange } = props;
  const { mobile, newMobile, setNewMobile, mobileChange } = props;
  const {
    oneTick,
    setOneTick,
    fourTick,
    setFourTick,
    sevenTick,
    setSevenTick,
  } = props;
  const { show, setShow, finalShow, setFinalShow } = props;

  const handleNext = () => {
    if (
      newName !== "" &&
      newEmail !== "" &&
      newMobile !== "" &&
      oneTick + fourTick + sevenTick !== 0
    ) {
      setShow(false);
      setFinalShow(true);
    } else {
      return;
    }
  };
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <div className="esc-room">
            {" "}
            Escape <span>Room</span>{" "}
          </div>
          <div className="date">15 January 2022</div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Name<span className="asterisk">*</span>
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
                <Form.Label className="body_headings">Mobile Number</Form.Label>
                <Form.Control
                  className="form_control"
                  required
                  type="number"
                  onChange={mobileChange}
                  defaultValue={newMobile}
                ></Form.Control>
              </div>
            </Form.Group>
            <div className="tickets">
              <div className="one-ticket">
                <div className="tickets_heading">Single Tickets</div>
                <button
                  className="plus-minus"
                  onClick={(e) => {
                    e.preventDefault();
                    if (oneTick <= 0) {
                      return;
                    } else {
                      setOneTick(oneTick - 1);
                    }
                  }}
                >
                  -
                </button>
                <div className="rectangle">
                  <div className="tickets_shown">{oneTick}</div>
                </div>
                <button
                  className="plus-minus"
                  onClick={(e) => {
                    e.preventDefault();
                    if (oneTick >= 50) {
                      return;
                    } else {
                      setOneTick(oneTick + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>

              <div className="four-ticket">
                <div className="tickets_heading">Bundle of 4</div>
                <button
                  className="plus-minus"
                  onClick={(e) => {
                    e.preventDefault();
                    if (fourTick <= 0) {
                      return;
                    } else {
                      setFourTick(fourTick - 1);
                    }
                  }}
                >
                  -
                </button>
                <div className="rectangle">
                  <div className="tickets_shown">{fourTick}</div>
                </div>
                <button
                  className="plus-minus"
                  onClick={(e) => {
                    e.preventDefault();
                    if (fourTick >= 50) {
                      return;
                    } else {
                      setFourTick(fourTick + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>

              <div className="seven-ticket">
                <div className="tickets_heading">Bundle of 7</div>
                <button
                  className="plus-minus"
                  onClick={(e) => {
                    e.preventDefault();
                    if (sevenTick <= 0) {
                      return;
                    } else {
                      setSevenTick(sevenTick - 1);
                    }
                  }}
                >
                  -
                </button>
                <div className="rectangle">
                  <div className="tickets_shown">{sevenTick}</div>
                </div>
                <button
                  className="plus-minus"
                  onClick={(e) => {
                    e.preventDefault();
                    if (sevenTick >= 50) {
                      return;
                    } else {
                      setSevenTick(sevenTick + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer_buttons">
            <button className="back_button" onClick={() => {setShow(false)}}>Back</button>
            <button className="next_button" onClick={handleNext}>
              Next
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Details;
