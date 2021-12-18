import GamePage from "../GamePage";
import { casefileProps } from "./constant";

export default function CFGame() {
  return (
    <div>
      <GamePage {...casefileProps} />
    </div>
  );
}
