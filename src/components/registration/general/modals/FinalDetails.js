import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Detailstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./Error";
import validator from "validator";
const FinalDetails = (props) => {
  const { newName } = props;
  const { newEmail } = props;
  const { newMobile } = props;
  const { oneTick } = props;
  const { game } = props;
  const { time } = props;
  const { date } = props;
  const { availableSlots } = props;
  const { setConfirmedShow } = props;
  const { setShow, finalShow, setFinalShow } = props;
  const { data, setData } = props;
  const { setLoading } = props;
  const { price } = props;
  const totalPrice = (price * oneTick).toFixed(2);
  const [change, setChange] = useState(0);
  const [error, setError] = useState(false);
  const [slotsLeft, setSlotsLeft] = useState({
    availableSlots: 100,
    onPayment: 0,
  });
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://sandbox.hit-pay.com/hitpay.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [change]);
  const handlePayment = async () => {
    await axios
      .get("http://localhost:4000/book/check", {
        params: { game: game, time: time },
      })
      .then(async (res) => {
        if (oneTick > res.data.availableSlots - res.data.onPayment) {
          setSlotsLeft(res.data);
          setError(true);
        } else {
          await axios.put(
            "https://desolate-cliffs-96244.herokuapp.com/book/onPayment",
            { game: game, time: time, ticket: oneTick }
          );
          const config = {
            headers: {
              "X-BUSINESS-API-KEY":
                "2e75e1e03e88d65e8dbc0ef36ee1a3b94ec7bdffe7ffdeccb8004ed4dd0306f3",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest",
            },
          };
          const params = new URLSearchParams();
          params.append("amount", `${totalPrice}`);
          params.append("currency", "SGD");
          params.append("name", `${newName}`);
          params.append("email", `${newEmail}`);
          params.append("phone", `${newMobile}`);
          params.append(
            "webhook",
            "https://desolate-cliffs-96244.herokuapp.com/webhook"
          );

          const postPayment = await axios.post(
            "https://api.sandbox.hit-pay.com/v1/payment-requests",
            params,
            config
          );
          window.HitPay.init(
            postPayment.data.url,
            { domain: "sandbox.hit-pay.com", apiDomain: "sandbox.hit-pay.com" },
            {
              onClose: async () => {
                await axios.put(
                  "https://desolate-cliifs-96244.herokuapp.com/book/offPayment",
                  {
                    game: game,
                    time: time,
                    ticket: oneTick,
                  }
                );
                setLoading(true);
                setChange(change + 1);
                setTimeout(async () => {
                  try {
                    const getPayment = await axios.put(
                      "https://desolate-cliffs-96244.herokuapp.com/book",
                      {
                        name: newName,
                        email: newEmail,
                        ticket: oneTick,
                        game: game,
                        amount: totalPrice,
                        payment: postPayment.data.id,
                        time: time,
                        date: date,
                      }
                    );
                    setConfirmedShow(true);
                    let newData = [];
                    for (let i = 0; i < data.length; i++) {
                      if (data[i].timeSlot === getPayment.data.timeSlot) {
                        newData.push({
                          timeSlot: getPayment.data.timeSlot,
                          availableSlots: availableSlots - oneTick,
                        });
                      } else {
                        newData.push(data[i]);
                      }
                    }
                    setData(newData);
                  } catch (err) {
                    setLoading(false);
                  }
                  setLoading(false);
                }, 3000);
              },
            }
          );
          window.HitPay.toggle({
            paymentRequest: postPayment.data.id,
          });
        }
      });
  };

  return (
    <>
      <Modal show={finalShow} centered>
        <Modal.Header>
          <div className="esc-room">{game}</div>
          <div className="date">
            <div>{date}</div>
            <div>{time}</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Name<span className="asterisk">*</span>
                </Form.Label>
                <Form.Control
                  className="final_form_control"
                  type="name"
                  plaintext
                  readOnly
                  defaultValue={newName}
                ></Form.Control>
              </div>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Email <span className="asterisk">*</span>
                </Form.Label>
                <Form.Control
                  className="final_form_control"
                  type="email"
                  plaintext
                  readOnly
                  defaultValue={newEmail}
                ></Form.Control>
              </div>
              <div className="form_body">
                <Form.Label className="body_headings">
                  Mobile Number <span className="asterisk">*</span>
                </Form.Label>
                <Form.Control
                  className="final_form_control"
                  type="phone"
                  plaintext
                  readOnly
                  defaultValue={newMobile}
                ></Form.Control>
              </div>
            </Form.Group>
          </Form>

          <div className="final_tickets">
            <div className="tickets_heading">Number of Tickets</div>
            <div>{oneTick !== 0 && <div>{oneTick} Single Ticket(s)</div>}</div>
          </div>

          <div className="amount">
            <div className="tickets_heading">Total Amount</div>
            <div>{totalPrice} SGD</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="back_button"
            onClick={() => {
              setFinalShow(false);
              setShow(true);
            }}
          >
            Back
          </button>
          <button
            className="next_button"
            onClick={() => {
              setFinalShow(false);
              handlePayment();
            }}
          >
            Next
          </button>
        </Modal.Footer>
      </Modal>
      <Error
        show={error}
        setShow={setError}
        isValidateEmail={validator.isEmail(newEmail)}
        isValidatePhone={validator.isMobilePhone(newMobile)}
        isAvailable={oneTick <= slotsLeft.availableSlots - slotsLeft.onPayment}
        availableSlots={slotsLeft.availableSlots}
        onPayment={slotsLeft.onPayment}
      ></Error>
    </>
  );
};

export default FinalDetails;
