import React from "react";
import "../styles/Header.css";

export default function Text(props) {
  return (
    <div className='Header'>
        <p className="page-title">{props.title}</p>
    </div>
  );
}
