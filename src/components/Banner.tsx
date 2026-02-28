import React, { useEffect, useRef, useState } from "react";
import { SpotifyIcon } from "../assets/Icons";
import { COUNTRIES, DURATION, MONTHLY_LISTENERS, STREAMS } from "../constants";

function useCountUp(target: number, duration: number) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return count;
}

function Banner() {
  const count = useCountUp(COUNTRIES, DURATION);
  const listenersCount = useCountUp(MONTHLY_LISTENERS, DURATION);
  const streamsCount = useCountUp(STREAMS, DURATION);

  return (
    <div className="w-full">
      {/* Image + overlaid cards on md+ */}
      <div className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://trt.group/wp-content/uploads/2024/03/kpp-anirudh-gallery-3.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light dark:to-background-dark" />

        {/* Cards — overlaid on md+, hidden on mobile (shown below instead) */}
        <div className="hidden md:flex absolute inset-0 flex-col items-start justify-center pb-7 px-6">
          <StatCard>
            <h1 className="text-slate-600 dark:text-slate-300 text-2xl font-bold">
              {count.toLocaleString()}
              <br />
              <span className="text-sm flex gap-2 justify-center items-center">
                Countries <SpotifyIcon h={5} />
              </span>
            </h1>
          </StatCard>
        </div>

        <div className="hidden md:flex absolute inset-0 flex-col items-start justify-start pt-[200px] pl-[300px]">
          <StatCard>
            <h1 className="text-slate-600 dark:text-slate-300 text-2xl font-bold">
              {streamsCount.toLocaleString()} Billion
              <br />
              <span className="text-sm flex gap-2 justify-center items-center">
                Streams on <SpotifyIcon h={5} />
              </span>
            </h1>
          </StatCard>
        </div>

        <div className="hidden md:flex absolute inset-0 flex-col items-end justify-center pb-7 px-6">
          <StatCard wide>
            <h1 className="text-slate-600 dark:text-slate-300 text-2xl font-bold">
              {listenersCount.toLocaleString()}
              <br />
              <span className="text-sm flex gap-2 justify-center items-center">
                Monthly Listeners on <SpotifyIcon h={5} />
              </span>
            </h1>
          </StatCard>
        </div>

        <h3 className="absolute font-barlow italic font-extrabold text-black md:text-[100px] text-2xl inset-0 flex items-end justify-center pb-4 md:pb-[170px]">
          ANIRUDH
          <span
            className="hidden md:block text-transparent"
            style={{ WebkitTextStroke: "3px black" } as React.CSSProperties}
          >
            RAVICHANDER
          </span>
          <span
            className="block md:hidden text-transparent"
            style={{ WebkitTextStroke: "1px black" } as React.CSSProperties}
          >
            RAVICHANDER
          </span>
        </h3>
      </div>

      {/* Cards — shown only on mobile, stacked below the image */}
      <div className="flex md:hidden flex-row flex-wrap justify-center gap-4 px-4 py-6">
        <StatCard>
          <h1 className="text-slate-600 dark:text-slate-300 text-xl font-bold">
            {count.toLocaleString()}
            <br />
            <span className="text-sm flex gap-1 justify-center items-center">
              Countries <SpotifyIcon h={4} />
            </span>
          </h1>
        </StatCard>

        <StatCard>
          <h1 className="text-slate-600 dark:text-slate-300 text-xl font-bold">
            {streamsCount.toLocaleString()} Billion
            <br />
            <span className="text-sm flex gap-1 justify-center items-center">
              Streams on <SpotifyIcon h={4} />
            </span>
          </h1>
        </StatCard>

        <StatCard wide>
          <h1 className="text-slate-600 dark:text-slate-300 text-xl font-bold">
            {listenersCount.toLocaleString()}
            <br />
            <span className="text-sm flex gap-1 justify-center items-center">
              Monthly Listeners on <SpotifyIcon h={4} />
            </span>
          </h1>
        </StatCard>
      </div>
    </div>
  );
}

function StatCard({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`glass listener-card dark:glass-dark p-6 rounded-xl text-center shadow-2xl border border-white/40 ${
        wide ? "md:w-[280px] w-[340px]" : "w-[160px]"
      }`}
    >
      {children}
    </div>
  );
}

export default Banner;
