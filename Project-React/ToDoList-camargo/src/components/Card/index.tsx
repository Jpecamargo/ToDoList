import { useState } from "react";
import "./card.css";

interface CardProps {
  task: string;
  isChecked: boolean;
  onCheck?: () => void;
  onDelete?: () => void;
}

export default function Card({ task, isChecked, onCheck, onDelete }: CardProps) {
  return (
    <div className="container">
      <div className="round">
        <input type="checkbox" id="checkbox" checked={isChecked}/>
        <label htmlFor="checkbox" onClick={onCheck}></label>
      </div>
      <div className="content">
        <p>{task}</p>
      </div>
      <div className="icons">
        <button onClick={onDelete}><i className="fa fa-trash"></i></button>
      </div>
    </div>
  );
}
