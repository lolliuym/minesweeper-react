import React from "react";
import "./DisplayOfNumber.scss";

interface DisplayOfNumberProps {
  value: number;
}

const DisplayOfNumber: React.FC<DisplayOfNumberProps> = ({ value }) => {
  return (  
<div className="DisplayOfNumber">{value.toString().padStart(3, '0')}</div>
)};

export default DisplayOfNumber;
