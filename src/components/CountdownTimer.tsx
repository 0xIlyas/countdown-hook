import { FC } from "react";
import ExpiredNotice from "./ExpiredNotice";
import ShowCounter from "./ShowCounter";
import { useCountdown } from "../hooks/useCountdown";

interface CountdownTimerProps {
  targetDate: number;
}

const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds < 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
