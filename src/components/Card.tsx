import React from "react";
import { SpotifyIcon } from "../assets/Icons";

function Card({ children, sx }: any) {
  return (
    <div
      className={`glass dark:glass-dark rounded-xl p-4 flex flex-col gap-4 border border-primary/20 shadow-xl ${sx}`}
    >
      {children}
    </div>
  );
}

export default Card;
