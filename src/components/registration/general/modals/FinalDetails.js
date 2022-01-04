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
  const [errRes, setErrRes] = useState("");
  const [slotsLeft, setSlotsLeft] = useState({
    availableSlots: 100,
    onPayment: 0,
  });
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://sandbox.hit-pay.com/hitpay.js";
    // script.src = "https://hit-pay.com/hitpay.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [change]);
  const handlePayment = async () => {
    const checkSlots = await axios.get("/book/check", {
      params: { game: game, time: time },
    });
    if (oneTick > checkSlots.data.availableSlots - checkSlots.data.onPayment) {
      setSlotsLeft(checkSlots.data);
      setError(true);
    } else {
      await axios.put("/book/onPayment", {
        game: game,
        time: time,
        ticket: oneTick,
      });
      const config = {
        headers: {
          "X-BUSINESS-API-KEY":
            "2e75e1e03e88d65e8dbc0ef36ee1a3b94ec7bdffe7ffdeccb8004ed4dd0306f3",
          // "647961d39123d34ebad53fe0e635b0a72fffbe71062a5a68855e2c852da5e86c",
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
      params.append("purpose", `Reserve ${oneTick} slots for ${game}`);
      params.append("send_email", true);
      params.append("expires_in", "5 mins");
      params.append(
        "webhook",
        "https://desolate-cliffs-96244.herokuapp.com/webhook"
      );
      try {
        const postPayment = await axios.post(
          "https://api.sandbox.hit-pay.com/v1/payment-requests",
          // "https://api.hit-pay.com/v1/payment-requests",
          params,
          config
        );
        window.HitPay.init(
          postPayment.data.url,
          {
            domain: "sandbox.hit-pay.com",
            apiDomain: "sandbox.hit-pay.com",
            closeOnError: true,
          },
          // {
          //   domain: "hit-pay.com",
          //   apiDomain: "hit-pay.com",
          //   closeOnError: true,
          // },
          {
            onClose: async () => {
              setLoading(true);
              await axios.put("/book/offPayment", {
                game: game,
                time: time,
                ticket: oneTick,
              });
              setChange(change + 1);
              setTimeout(async () => {
                try {
                  const getPayment = await axios.put("/book", {
                    name: newName,
                    email: newEmail,
                    ticket: oneTick,
                    game: game,
                    amount: totalPrice,
                    payment: postPayment.data.id,
                    time: time,
                    date: date,
                  });
                  setConfirmedShow(true);
                  let newData = [];
                  for (let i = 0; i < data.length; i++) {
                    if (data[i].timeSlot === getPayment.data.timeSlot) {
                      newData.push({
                        timeSlot: getPayment.data.timeSlot,
                        availableSlots: availableSlots - oneTick,
                        price: price,
                      });
                    } else {
                      newData.push(data[i]);
                    }
                  }
                  setData(newData);
                  setLoading(false);
                } catch (err) {
                  setErrRes(err.response.data);
                  setLoading(false);
                  setError(true);
                }
              }, 3000);
            },
          }
        );
        window.HitPay.toggle({
          paymentRequest: postPayment.data.id,
          method: "paynow_online",
        });
      } catch (err) {
        await axios.put("/book/offPayment", {
          game: game,
          time: time,
          ticket: oneTick,
        });
        setErrRes(err.response.data);
        setError(true);
      }
    }
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
            <div className="final_form_control">
              {oneTick !== 0 && <div>{oneTick} Single Ticket(s)</div>}
            </div>
          </div>

          <div className="amount">
            <div className="tickets_heading">Total Amount</div>
            <div className="final_form_control">{totalPrice} SGD</div>
          </div>

          <div className="phone_viewer">
            <p>For phone viewers,</p>
            <ul className="lists">
              <li>Save QR Code as image</li>
              <li>Import image to your PayNow App</li>
            </ul>
            <p>
              For OCBC Pay Anyone, it should be the 3 lines on the top right
              corner
            </p>
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
        isAvailable={oneTick > slotsLeft.availableSlots - slotsLeft.onPayment}
        availableSlots={slotsLeft.availableSlots}
        onPayment={slotsLeft.onPayment}
        error={errRes}
        checked={true}
      ></Error>
    </>
  );
};

export default FinalDetails;
