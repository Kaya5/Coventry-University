import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "../styles/Scroll.css";

export default function Scroll() {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  const handleScrollDown = () => {
    window.scrollTo(0, 5000);
  };

  return (
    <div className="scroll-div">
      <ArrowCircleUpIcon
        onClick={handleScrollUp}
        className="scrollbar"
        style={{ fontSize: "calc(24px + 1.8vw)" }}
      />

      <ArrowCircleDownIcon
        onClick={handleScrollDown}
        className="scrollbar"
        style={{ fontSize: "calc(22px + 1.8vw)" }}
      />
    </div>
  );
}
