import GamePage from "../GamePage";
import { escapeRoomProps } from "./constant";

export default function ERGame() {
  return (
    <div>
      <GamePage {...escapeRoomProps} />
    </div>
  );
}
