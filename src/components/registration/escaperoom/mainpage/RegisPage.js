import "../assets/image10.png";
import "./RegisPagestyle.css";
import osiris from "../assets/osiris.png";
import sanatorium from "../assets/sanatorium.png";
const RegisPage = (props) => {
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
  const { handleClick } = props;
  return (
    <div className="regispage_container">
      <div className="pic">
        <div className="pic-text">
          <div className="count">the count of</div>
          <div className="monte">monte cristo</div>
          <div className="horror">HORROR | ADVENTURE</div>
        </div>
      </div>
      <div className="info">
        <div className="buy_tickets">
          BUY <span className="buy_tickets_tickets">TICKETS</span>
        </div>
        <div>
          <div className="bolted_text">Date</div>
          <div className="non_bolted_text">15 January 2022</div>
        </div>
        <div>
          <div className="bolted_text">Duration</div>
          <div className="non_bolted_text">2 hours</div>
        </div>
        <div>
          <div className="bolted_text">Price</div>
          <div>
            Individual:<span classname="non_bolted_text">$6/Person</span>
          </div>
          <div>
            Bundle of 4:<span classname="non_bolted_text">$22/Group</span>
          </div>
          <div>
            Bundle of 7:<span classname="non_bolted_text">$35/Group</span>
          </div>
        </div>
      </div>
      <div className="timeslot">
        <div className="choose">
          CHOOSE YOUR <span className="timeslots">TIMESLOTS</span>
        </div>
        <div className="buttons">
          <button className="button" onClick={handleClick}>
            <div className="books">10.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">11.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">12.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">13.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">14.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">15.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">16.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">17.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">18.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">19.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
          <button className="button" onClick={handleClick}>
            <div className="books">20.00</div>
            <div className="slots">
              <div>5</div>
              <div>SLOTS LEFT</div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="upcoming">
          CHECK OUT OUR <span>UPCOMING GAMES</span>
        </div>
        <div className="upcoming_pics">
          <img className="osiris" src={osiris} />
          <img className="sanatorium" src={sanatorium} />
        </div>
      </div>
    </div>
  );
};

export default RegisPage;
