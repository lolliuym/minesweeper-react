import React from "react";
import "./DisplayOfNumber.scss";

interface DisplayOfNumberProps {
  value: number;
}

const DisplayOfNumber: React.FC<DisplayOfNumberProps> = ({ value }) => {
  return (
    <div className="DisplayOfNumber">
      {value < 0
        ? `-${Math.abs(value).toString().padStart(2, "0")}`
        : value.toString().padStart(3, "0")}
    </div>
  );
};

export default DisplayOfNumber;
