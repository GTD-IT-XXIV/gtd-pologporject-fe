import { useState , useRef} from "react";
import Details from "./Details";
import FinalDetails from "./FinalDetails";

export default function Registration(props) {
  const [show,setShow]= useState(false);
  const handleClick = () =>{
    setShow(true);
  }
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

  return (
  <><div>Registration</div>
  <button onClick={handleClick}>-</button>
  <Details 
  show ={show} 
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
  show ={show} 
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
  </>
  );
}
