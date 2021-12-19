import GamePage from "../GamePage";
import { heistProps } from "./constant";

export default function HGame() {
  return (
    <div>
      <GamePage {...heistProps} />
    </div>
  );
}
