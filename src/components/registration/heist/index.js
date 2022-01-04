import { useState, useEffect } from "react";
import Details from "../general/modals/Details";
import FinalDetails from "../general/modals/FinalDetails";
import axios from "axios";
import "./style.css";
import RegisPage from "./mainpage/RegisPage";
import Confirmed from "../general/modals/Confirmed";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
export default function Registration(props) {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [confirmedShow, setConfirmedShow] = useState(false);
  const handleClick = (slots) => {
    setShow(true);
    setOneData({
      timeSlot: slots.timeSlot,
      availableSlots: slots.availableSlots,
      price: slots.price,
    });
  };
  const [finalShow, setFinalShow] = useState(false);

  const [newName, setNewName] = useState("");
  const nameChange = (e) => {
    setNewName(e.target.value);
  };

  const [newEmail, setNewEmail] = useState("");
  const emailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const [newMobile, setNewMobile] = useState("");
  const mobileChange = (e) => {
    setNewMobile(e.target.value);
  };

  const [oneTick, setOneTick] = useState(1);

  const [data, setData] = useState([]);
  const [oneData, setOneData] = useState({
    timeSlot: "",
    availableSlots: 0,
    price: 0,
  });
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/comingsoon");

    setLoading(true);
    axios
      .get("/book/slot", {
        params: { game: "Heist" },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <RegisPage handleClick={handleClick} data={data} />
      <Details
        show={show}
        setShow={setShow}
        setFinalShow={setFinalShow}
        newName={newName}
        nameChange={nameChange}
        newEmail={newEmail}
        emailChange={emailChange}
        newMobile={newMobile}
        mobileChange={mobileChange}
        oneTick={oneTick}
        setOneTick={setOneTick}
        oneData={oneData}
        game={"Heist"}
        date={"29 January 2022"}
      />
      <FinalDetails
        setShow={setShow}
        finalShow={finalShow}
        setFinalShow={setFinalShow}
        newName={newName}
        newEmail={newEmail}
        newMobile={newMobile}
        oneTick={oneTick}
        price={oneData.price}
        data={data}
        setData={setData}
        game={"Heist"}
        time={oneData.timeSlot}
        date={"29 January 2022"}
        setConfirmedShow={setConfirmedShow}
        availableSlots={oneData.availableSlots}
        setLoading={setLoading}
      />
      <Confirmed
        confirmedShow={confirmedShow}
        setConfirmedShow={setConfirmedShow}
        setNewName={setNewName}
        setNewEmail={setNewEmail}
        setNewMobile={setNewMobile}
        setOneTick={setOneTick}
        time={oneData.timeSlot}
        date={"29 January 2022"}
        game={"Heist"}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary"></CircularProgress>
      </Backdrop>
    </>
  );
}
