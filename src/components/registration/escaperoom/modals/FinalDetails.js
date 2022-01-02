import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./Details";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import './Detailstyle.css';
const FinalDetails = (props) => {
    const {name,newName,setNewName,nameChange} = props;
    const {email,newEmail,setNewEmail,emailChange} = props;
    const {mobile,newMobile,setNewMobile,mobileChange} = props;
    const {oneTick,setOneTick,fourTick,setFourTick,sevenTick,setSevenTick} = props;
    const {show,setShow,finalShow,setFinalShow} = props;
    const {confirmedShow,setConfirmedShow} = props;
  return (
    <>
      <Modal show={finalShow} centered>
      <Modal.Header>
          <div className="esc-room"> Escape <span>Room</span> </div>
          <div className="date">15 January 2022</div>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                  <div className="form_body">
                    <Form.Label className="body_headings">Name<span className="asterisk">*</span></Form.Label>
                    <Form.Control className="final_form_control" type="name" plaintext readOnly defaultValue={newName}></Form.Control>
                    </div>
                    <div className="form_body">
                    <Form.Label className="body_headings">Email <span className="asterisk">*</span></Form.Label>
                    <Form.Control className="final_form_control" type="email" plaintext readOnly defaultValue={newEmail}></Form.Control>
                    </div>
                    <div className="form_body">
                    <Form.Label className="body_headings">Mobile Number <span className="asterisk">*</span></Form.Label>
                    <Form.Control className="final_form_control" type="number" plaintext readOnly defaultValue={newMobile}></Form.Control>
                    </div>
                </Form.Group>
            </Form>

            <div className="final_tickets">
                <div className="tickets_heading">Number of Tickets</div>
                <div>{oneTick!==0 && <div>{oneTick} Single Ticket(s)</div>}</div>
                <div>{fourTick!==0 && <div>{fourTick} Bundle of 4(s)</div>}</div>
                <div>{sevenTick!==0 && <div>{sevenTick} Bundle of 7(s)</div>}</div>
                {}
            </div>

            <div className="amount">
                <div className="tickets_heading">Total Amount</div>
                <div>{6*oneTick + 22*fourTick + 35*sevenTick}.00 SGD</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="back_button"
            onClick={() => {
                setFinalShow(false);
                setShow(true);
            }}
          >
            Back
          </button>
          <button className="next_button" onClick={() => {
            setFinalShow(false);
            setConfirmedShow(true);
          }}>Next</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FinalDetails;
