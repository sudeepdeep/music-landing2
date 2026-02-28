import { useEffect, useState } from "react";
import Button from "./Button";
import { socialMedia } from "../constants";

const merchandise = [
  {
    title: "The P.O.R Hukum Tee",
    merchUrl:
      "https://pieceofrock.com/cdn/shop/files/w4.png?v=1729586914&width=990",
    merchType: "full-front",
  },
  {
    title: "The P.O.R Hukum Tee",
    merchUrl:
      "https://pieceofrock.com/cdn/shop/files/w5.png?v=1729586915&width=990",
    merchType: "full-back",
  },
  {
    title: "The P.O.R Hukum Tee",
    merchUrl:
      "https://pieceofrock.com/cdn/shop/files/w3.png?v=1729586915&width=990",
    merchType: "full-back",
  },
  {
    title: "The P.O.R Hukum Tee",
    merchUrl:
      "https://pieceofrock.com/cdn/shop/files/w2_56f61f8b-548c-4822-b445-54faa9316373.png?v=1729658642&width=990",
    merchType: "full-back",
  },
  {
    title: "The P.O.R Hukum Tee",
    merchUrl:
      "https://pieceofrock.com/cdn/shop/files/w6_0cdc27cd-83e9-44d6-ac51-581bf933fd08.png?v=1729658642&width=990",
    merchType: "t-front",
  },
  {
    title: "The P.O.R Hukum Tee",
    merchUrl:
      "https://pieceofrock.com/cdn/shop/files/w7_32628d27-cb40-4b4e-b2c2-602c4fffe500.png?v=1729658642&width=990",
    merchType: "t-back",
  },
];

function getVisibleCount() {
  // SSR-safe: default to 3, but read window on client
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function Merchandise() {
  const [index, setIndex] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  // Re-calculate on resize
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount());

  useState(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setIndex((i) => Math.min(i, merchandise.length - newCount));
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  const canPrev = index > 0;
  const canNext = index < merchandise.length - visibleCount;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setIndex((i) => Math.min(merchandise.length - visibleCount, i + 1));

  const visible = merchandise.slice(index, index + visibleCount);

  const handleClick = (url: string) => {
    setPreviewUrl(url);
    setIsLocked(true);
  };

  const handleOverlayClick = () => {
    setPreviewUrl(null);
    setIsLocked(false);
  };

  const dotCount = merchandise.length - visibleCount + 1;

  return (
    <div className="max-w-4xl mx-auto h-auto px-6 sm:px-0" id="merchandise">
      <p className="text-2xl font-extrabold tracking-tight mb-8">MERCHANDISE</p>

      <p className="text-primary font-semibold">The P.O.R Hukum Tee</p>
      <p className="text-[12px] mb-4">
        The Official Hukum Tour Edition tee with the rockstar's signature
        printed.
      </p>

      <div className="flex flex-col items-center">
        {/* Fullscreen overlay */}
        {previewUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-zoom-out"
            onClick={handleOverlayClick}
          >
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-[85vh] max-w-[85vw] object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="relative flex items-center h-auto w-full">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className="absolute left-0 z-10 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white shadow hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            aria-label="Previous"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Items */}
          <div className="flex gap-4 overflow-hidden w-full px-8">
            {visible.map((item: any, i: number) => (
              <div
                key={index + i}
                className="flex-shrink-0  h-[500px] overflow-hidden rounded-md cursor-zoom-in transition-transform duration-200 hover:scale-[1.02]"
                style={{
                  width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 16) / visibleCount}px)`,
                }}
              >
                <img
                  onClick={() => handleClick(item.merchUrl)}
                  src={item.merchUrl}
                  alt={item.title ?? `Merchandise ${index + i + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            className="absolute right-0 z-10 translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white shadow hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            aria-label="Next"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? "bg-neutral-900 w-4" : "bg-neutral-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <Button
          btnTxt="visit store"
          logo="store"
          handleClickBtn={() =>
            (window.location.href = socialMedia.pieceofrock)
          }
          sx="w-[150px] mt-[40px]"
        />
      </div>
    </div>
  );
}
