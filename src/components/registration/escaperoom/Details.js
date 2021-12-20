import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, Button } from "react-bootstrap";
import FinalDetails from "./FinalDetails";
import './Detailstyle.css';
const Details = (props) => {
    const {name,newName,setNewName,nameChange} = props;
    const {email,newEmail,setNewEmail,emailChange} = props;
    const {mobile,newMobile,setNewMobile,mobileChange} = props;
    const {oneTick,setOneTick,fourTick,setFourTick,sevenTick,setSevenTick} = props;
    const {show,setShow,finalShow,setFinalShow} = props;

  const handleNext = () => {
        if(newName!=="" && newEmail!=="" && newMobile!=="" && oneTick+fourTick+sevenTick!==0){
            setShow(false);
            setFinalShow(true);
        }
        else{return }
  }
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <div className="esc-room"> Escape Room </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name*</Form.Label>
              <Form.Control required type="name" onChange={nameChange} defaultValue={newName}></Form.Control>
              <Form.Label>Email*</Form.Label>
              <Form.Control required type="email" onChange={emailChange} defaultValue={newEmail}></Form.Control>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control required type="number" onChange={mobileChange} defaultValue={newMobile}></Form.Control>
            </Form.Group>
            <div className="tickets">
              <div className="one-ticket">
                <div>Single Tickets</div>
                <Button 
                  onClick={() => {
                    if (oneTick <= 0) {
                      return;
                    } else {
                      setOneTick(oneTick - 1);
                    }
                  }}
                >
                  -
                </Button>
                <div>{oneTick}</div>
                <Button
                  onClick={() => {
                    if (oneTick >= 50) {
                      return;
                    } else {
                      setOneTick(oneTick + 1);
                    }
                  }}
                >
                  +
                </Button>
              </div>

              <div className="four-ticket">
                <div>Bundle of 4</div>
                <Button
                  onClick={() => {
                    if (fourTick <= 0) {
                      return;
                    } else {
                      setFourTick(fourTick - 1);
                    }
                  }}
                >
                  -
                </Button>
                <div>{fourTick}</div>
                <Button
                  onClick={() => {
                    if (fourTick >= 50) {
                      return;
                    } else {
                      setFourTick(fourTick + 1);
                    }
                  }}
                >
                  +
                </Button>
              </div>

              <div className="seven-ticket">
                <div>Bundle of 7</div>
                <Button
                  onClick={() => {
                    if (sevenTick <= 0) {
                      return;
                    } else {
                      setSevenTick(sevenTick - 1);
                    }
                  }}
                >
                  -
                </Button>
                <div>{sevenTick}</div>
                <Button
                  onClick={() => {
                    if (sevenTick >= 50) {
                      return;
                    } else {
                      setSevenTick(sevenTick + 1);
                    }
                  }}
                >
                  +
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
            >
              Next
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Details;
