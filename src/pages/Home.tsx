import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Tours from "../components/Tours";
import NavbarLatest from "../components/NavbarLatest";
import "../App.css";
import LatestReleases from "../components/LatestReleases";
import { XIcon } from "lucide-react";
import AniHyd from "../assets/anirudh-hyd.jpg";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="">
        <NavbarLatest />
      </div>

      {showBanner && (
        <>
          <div className="absolute z-10 top-0 w-[100vw] h-[100vh] bg-black/55"></div>
          <div className="fixed h-auto w-[70%] mx-auto mt-[5%] md:top-4 top-16 left-4 right-4 bg-black border border-white/50 text-white p-4 text-center z-50 liquid-glass2">
            <XIcon
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setShowBanner(false)}
            />
            <div className="flex justify-center items-center">
              <img
                src={
                  "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-rockstar-anirudh-xv-15-years-with-you-0-2026-2-23-t-6-42-24.jpg"
                }
                className="hidden md:block"
                alt="anirudh-hyderabad"
              />
              <img
                src={AniHyd}
                className="block md:hidden"
                alt="anirudh-hyderabad"
              />
            </div>
          </div>
        </>
      )}
      <Banner />
      <Tours />
      <LatestReleases />
      <Footer />
    </div>
  );
}

export default Home;
