import React from "react";

const concertDetails: any = [
  {
    tag: "Upcoming",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "May 21, 2026 • Gachibowli outdoor stadium - Hyderabad",
    status: "SOLD OUT",
    link: "",
  },
  {
    tag: "Selling Fast",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "June 01, 2026 • The Trust Arena - AUCKLAND",
    status: "TICKETS",
    link: "",
  },
  {
    tag: "Standard",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "June 04, 2026 • John cain Arena - MELBOURNE",
    status: "TICKETS",
    link: "",
  },
  {
    tag: "Standard",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "June 06, 2026 • Qudos Bank Arena - SYDNEY",
    status: "TICKETS",
    link: "",
  },
  {
    tag: "Standard",
    name: "VARIETE INTERNATIONALE",
    details: "April 18, 2026 • ADIDAS ARENA - PARIS",
    status: "TICKETS",
    link: "",
  },
];

function Tours() {
  return (
    <section className="w-full" id="tour">
      <div className="px-4 pt-10 max-w-4xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight">TOUR DATES</h2>
        {/* <span className="text-primary text-sm font-bold border-b-2 border-primary">
          VIEW ALL
        </span> */}
      </div>

      <div className="px-4 py-10 max-w-4xl mx-auto space-y-4">
        {concertDetails.map((item: any) => (
          <>
            <div className="glass dark:glass-dark p-5 rounded-xl flex items-center justify-between shadow-sm border border-primary/5">
              <div className="flex flex-col gap-1">
                <span
                  className={`text-[10px] font-bold tracking-widest ${item.tag == "Upcoming" ? "text-primary" : item.tag == "Selling Fast" ? "text-orange-500 " : "text-slate-400"}  uppercase`}
                >
                  {item.tag}
                </span>
                <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.details}
                </p>
              </div>
              {/* <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors">
            TICKETS
          </button> */}

              <button
                onClick={() => (window.location.href = item.link)}
                className={`bg-primary/10  text-primary  px-4 py-2 rounded-lg text-xs font-bold transition-colors ${item.status.toLowerCase().includes("sold") ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                {item.status}
              </button>
            </div>
          </>
        ))}
      </div>

      <div className="w-full bg-white h-[300px] flex justify-center">
        <img
          className="h-[300px]"
          alt="anirudh xv"
          src={
            "https://instagram.fhyd2-2.fna.fbcdn.net/v/t51.82787-15/630971780_18564388981023214_7945095131820644411_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzgyOTQ5MjEyNTgzNTQ0NDc3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=A9Kal98dd1AQ7kNvwGMwOdi&_nc_oc=AdmBdPGi-8IKOc14icPLf-RWQDPYYshvGY_n77XjzZJS6IU8GQR6ZE2fDBgDiMnU5aG2EFugXmDwym_cBheBQmEt&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fhyd2-2.fna&_nc_gid=HeAspRgp4hy5g5Ak3XDX8A&_nc_ss=8&oh=00_AfshX5S3ICjZMbzesRvx3UWv-b7sEp75STn080Z-46Gdag&oe=69A8BBAC"
          }
        />
      </div>
    </section>
  );
}

export default Tours;
