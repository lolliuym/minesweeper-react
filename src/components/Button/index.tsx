import React from "react";
import { CellState, CellValue } from "../../types";
import "./Button.scss";

interface ButtonProps {
  row: number;
  col: number;
  onClick(rowParam: number, colParam: number): (...args: any[]) => void;
  onContext(rowParam: number, colParam: number): (...args: any[]) => void;
  state: CellState;
  value: CellValue;
}

const Button: React.FC<ButtonProps> = ({ row, col,  onClick, onContext,  state, value }) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span role="img" aria-label="bomb">
            <div className="bomb"></div>
          </span>
        );
      } else if (value === CellValue.none) {
        return null;
      }

      return <div className={`value-${value}`}></div>;
    } else if (state === CellState.flagged) {
      return (
        <span role="img" aria-label="flagged">
          <div className="flagged"></div>
        </span>
      );
    }
  };

  return (
    <div
      className={`Button ${state === CellState.visible ? "visible" : ""}  `}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row,col)}
    >
      {renderContent()}
    </div>
  );
};

export default Button;
