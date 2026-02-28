import React from "react";
import RenderIcon from "./RenderIcon";

function Button({ btnTxt, logo = "", handleClickBtn, sx = "" }: any) {
  return (
    <button
      type="button"
      onClick={handleClickBtn}
      className={`w-full mt-2 py-2.5 rounded-full border-2 border-primary/30 text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all ${sx}`}
    >
      {logo && <RenderIcon type={logo} />}
      {btnTxt}
    </button>
  );
}

export default Button;
