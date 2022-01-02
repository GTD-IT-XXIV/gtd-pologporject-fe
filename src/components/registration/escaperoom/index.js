import { useState, useRef } from "react";
import Details from "./modals/Details";
import FinalDetails from "./modals/FinalDetails";
import HitPay from "./modals/HitPay";
import axios from "axios";
import './style.css';
import RegisPage from "./mainpage/RegisPage";
import Confirmed from "./modals/Confirmed";
export default function Registration(props) {
  const [show, setShow] = useState(false);
  const [confirmedShow,setConfirmedShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const [finalShow, setFinalShow] = useState(false);

  const name = useRef("");
  const [newName, setNewName] = useState("");
  const nameChange = (e) => {
    setNewName(e.target.value);
  };

  const email = useRef("");
  const [newEmail, setNewEmail] = useState("");
  const emailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const mobile = useRef("");
  const [newMobile, setNewMobile] = useState("");
  const mobileChange = (e) => {
    setNewMobile(e.target.value);
  };

  const [oneTick, setOneTick] = useState(0);
  const [fourTick, setFourTick] = useState(0);
  const [sevenTick, setSevenTick] = useState(0);

  const [data, setData] = useState([]);
  const [change, setChange] = useState(0);
  const [game, setGame] = useState({ id: 0, name: "", amount: 0 });
  const [loading, setLoading] = useState(false);

  // async function hitPayClick(values, name, email) {
  //   setFinalShow(false);
  //   const config = {
  //     headers: {
  //       "X-BUSINESS-API-KEY":
  //         "2e75e1e03e88d65e8dbc0ef36ee1a3b94ec7bdffe7ffdeccb8004ed4dd0306f3",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "X-Requested-With": "XMLHttpRequest",
  //     },
  //   };
  //   const params = new URLSearchParams();
  //   params.append("amount", `${values.price}`);
  //   params.append("currency", "SGD");
  //   params.append("name", `${name}`);
  //   params.append("email", `${email}`);
  //   params.append(
  //     "webhook",
  //     "https://desolate-cliffs-96244.herokuapp.com/webhook"
  //   );

  //   const postPayment = await axios.post(
  //     "https://api.sandbox.hit-pay.com/v1/payment-requests",
  //     params,
  //     config
  //   );

  //   window.HitPay.init(
  //     postPayment.data.url,
  //     { domain: "sandbox.hit-pay.com", apiDomain: "sandbox.hit-pay.com" },
  //     {
  //       onClose: () => {
  //         setChange(change + 1);
  //         setLoading(true);
  //         setTimeout(async () => {
  //           const getPayment = await axios.put(
  //             "https://desolate-cliffs-96244.herokuapp.com/book",
  //             //"http://localhost:4000/book",
  //             {
  //               name: name,
  //               email: email,
  //               ticket: 1,
  //               game: values.nameOfGame,
  //               amount: values.price,
  //               payment: postPayment.data.id,
  //             }
  //           );
  //           console.log(getPayment);
  //           setLoading(false);
  //           if (getPayment.status === 200) {
  //             //setShowCode(true);
  //             setData(getPayment.data);
  //           }
  //         }, 3000);
  //       },
  //     }
  //   );

  //   window.HitPay.toggle({
  //     paymentRequest: postPayment.data.id,
  //   });
  // }

  return (
    <>
      <div className="regis">Registration</div>
      <button className="front-button" onClick={handleClick}>-</button>
      <RegisPage
      show={show}
      setShow={setShow}
      finalShow={finalShow}
      setFinalShow={setFinalShow}
      name={name}
      newName={newName}
      setNewName={setNewName}
      nameChange={nameChange}
      email={email}
      newEmail={newEmail}
      setNewEmail={setNewEmail}
      emailChange={emailChange}
      mobile={mobile}
      newMobile={newMobile}
      setNewMobile={setNewMobile}
      mobileChange={mobileChange}
      oneTick={oneTick}
      setOneTick={setOneTick}
      fourTick={fourTick}
      setFourTick={setFourTick}
      sevenTick={sevenTick}
      setSevenTick={setSevenTick}
      handleClick={handleClick}
      />
      <Details
        show={show}
        setShow={setShow}
        finalShow={finalShow}
        setFinalShow={setFinalShow}
        name={name}
        newName={newName}
        setNewName={setNewName}
        nameChange={nameChange}
        email={email}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        emailChange={emailChange}
        mobile={mobile}
        newMobile={newMobile}
        setNewMobile={setNewMobile}
        mobileChange={mobileChange}
        oneTick={oneTick}
        setOneTick={setOneTick}
        fourTick={fourTick}
        setFourTick={setFourTick}
        sevenTick={sevenTick}
        setSevenTick={setSevenTick}
      />
      <FinalDetails
        show={show}
        setShow={setShow}
        finalShow={finalShow}
        setFinalShow={setFinalShow}
        confirmedShow={confirmedShow}
        setConfirmedShow={setConfirmedShow}
        name={name}
        newName={newName}
        setNewName={setNewName}
        nameChange={nameChange}
        email={email}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        emailChange={emailChange}
        mobile={mobile}
        newMobile={newMobile}
        setNewMobile={setNewMobile}
        mobileChange={mobileChange}
        oneTick={oneTick}
        setOneTick={setOneTick}
        fourTick={fourTick}
        setFourTick={setFourTick}
        sevenTick={sevenTick}
        setSevenTick={setSevenTick}

      />
      <Confirmed
      confirmedShow={confirmedShow}
      setConfirmedShow={setConfirmedShow}
      />
      {/* <HitPay 
      finalShow={finalShow} 
      setFinalShow={setFinalShow} 
      data={data}
      setData={setData}
      game={game}
      setGame={setGame}
      change={change}
      setChange={setChange}
      loading={loading}
      setLoading={setLoading}
      /> */}
    </>
  );
}
