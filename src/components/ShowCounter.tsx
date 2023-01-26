import { FC } from "react";
import DateTimeDisplay from "./DateTimeDisplay";

interface ShowCounterType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: FC<ShowCounterType> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasdhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days < 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={hours < 3} />
        <p>:</p>
        <DateTimeDisplay
          value={minutes}
          type={"Minutes"}
          isDanger={minutes < 3}
        />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Days"} isDanger={seconds < 3} />
      </a>
    </div>
  );
};

export default ShowCounter;
