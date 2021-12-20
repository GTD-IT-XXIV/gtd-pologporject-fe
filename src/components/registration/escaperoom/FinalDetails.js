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

  return (
    <>
      <Modal show={finalShow}>
        <Modal.Header>Escape Room</Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="name" plaintext readOnly defaultValue={newName}></Form.Control>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" plaintext readOnly defaultValue={newEmail}></Form.Control>
                    <Form.Label>Mobile Number*</Form.Label>
                    <Form.Control type="number" plaintext readOnly defaultValue={newMobile}></Form.Control>
                </Form.Group>
            </Form>

            <div className="tickets">
                <div>Tickets</div>
                <div>{oneTick!==0 && <div>{oneTick} Single Ticket(s)</div>}</div>
                <div>{fourTick!==0 && <div>{fourTick} Bundle of 4(s)</div>}</div>
                <div>{sevenTick!==0 && <div>{sevenTick} Bundle of 7(s)</div>}</div>
                {}
            </div>

            <div className="amount">
                <div>Total Amount</div>
                <div>{5*oneTick + 15*fourTick + 28*sevenTick}.00 SGD</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
                setFinalShow(false);
                setShow(true);
            }}
          >
            Back
          </Button>
          <Button>Next</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FinalDetails;
