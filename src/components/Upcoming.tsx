import React from "react";
import { upcomingTourPhotos } from "../constants";

function Upcoming() {
  return (
    <div className="md:h-[400px] flex md:flex-row flex-col justify-center gap-6 mt-5 mb-5">
      {upcomingTourPhotos.map((item: any) => (
        <img
          src={item.image}
          alt="image1"
          className="cursor-pointer"
          onClick={() => (window.location.href = item.link)}
        />
      ))}
    </div>
  );
}

export default Upcoming;
