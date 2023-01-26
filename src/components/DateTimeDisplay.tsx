import { FC } from "react";

interface DateTimeDisplayType {
  value: number;
  type: string;
  isDanger: boolean;
}

const DateTimeDisplay: FC<DateTimeDisplayType> = ({
  value,
  type,
  isDanger,
}) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
