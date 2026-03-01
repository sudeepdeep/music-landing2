export const socialMedia = {
  instagram: "https://www.instagram.com/anirudhofficial/?hl=en",
  apple: "https://music.apple.com/jo/artist/anirudh-ravichander/480976476",
  amazon: "https://music.amazon.in/artists/B006841J6G/anirudh-ravichander",
  facebook: "https://www.facebook.com/anirudhofficial/",
  youtube: "https://www.youtube.com/channel/UC1mupr-2YbkxQVmcO3ve6SA",
  spotify: "https://open.spotify.com/artist/4zCH9qm4R2DADamUHMCa6O",
  x: "https://x.com/anirudhofficial",
  pieceofrock: "https://pieceofrock.com/",
};

export const songs: any = [
  {
    song: "23 theme - #AA23",
    spotify: "https://open.spotify.com/track/3Zfq0a19kF3wGMmqxolt3d",
    appleMusic:
      "https://music.apple.com/us/album/23-theme-from-aa23/1869032080?i=1869032083",
    timeplay: "",
  },
  {
    song: "#FeelTheThrill - ICC T20 World Cup",
    spotify: "https://open.spotify.com/track/5twpjpIR0Ym3E4pk5yqXMH",
    appleMusic:
      "https://music.apple.com/us/album/feel-the-thrill-icc-mens-t20-world-cup-official-event/1873206742",
    timeplay: "",
  },
  {
    song: "Bloody Valentine - #DC",
    spotify: "https://open.spotify.com/track/2UtxQtTo90v8HpEQwyS6Ss",
    appleMusic:
      "https://music.apple.com/us/album/bloody-valentine-from-dc-single/1877252141",
    timeplay: "",
  },
  {
    song: "Enakena - #LIK",
    spotify: "https://open.spotify.com/track/5oieVOqzZzYEgmrOis1gbU",
    appleMusic:
      "https://music.apple.com/us/album/pattuma-from-love-insurance-kompany/1856570866?i=1856570964",
    timeplay: "",
  },
  {
    song: "Aaja Raaja - #KHxRK",
    spotify: "https://open.spotify.com/track/5yKz9IRNzuWJiwXERpfVY3",
    appleMusic:
      "https://music.apple.com/us/album/aaja-raja-from-kh-x-rk-reunion-single/1878964512",
    timeplay: "",
  },
  {
    song: "#AayaSher - #Paradise",
    spotify: "https://open.spotify.com/album/47i89HeDSUWHJGFT1wzAWP",
    appleMusic:
      "https://music.apple.com/us/album/aaya-sher-from-the-paradise-single/1880003998",
    timeplay: "",
  },
  {
    song: "Thalapathy Kacheri - #JanaNayagan",
    spotify: "https://open.spotify.com/album/0TthxobhZuRUVweIhTUwuc",
    appleMusic:
      "https://music.apple.com/us/album/thalapathy-kacheri-from-jana-nayagan/1851697488?i=1851697489",
    timeplay: "",
  },
  {
    song: "Monica - #Coolie",
    spotify: "https://open.spotify.com/track/2t1pEpxPz91KldW7C0FyZv",
    appleMusic:
      "https://music.apple.com/us/album/monica-from-coolie-tamil/1826025329?i=1826025330",
    timeplay: "",
  },
];

export const bannerSong: any = {
  name: "AA 23 Announcement Video | Icon Star Allu Arjun | Lokesh Kanagaraj | Anirudh | Mythri Movie Makers",
  youtubeLink: "https://www.youtube.com/watch?v=6hqduA_fUqE",
  youtubeThumbNail: "https://img.youtube.com/vi/6hqduA_fUqE/hqdefault.jpg",
  details: "8.6M Views • Jan 14, 2026",
  spotifyCode: "3Zfq0a19kF3wGMmqxolt3d",
};

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Tour", url: "#tour" },
      { name: "Store", url: "#store" },
    ],
  },
  {
    title: "Store",
    links: [{ name: "Piece of rock", url: "https://pieceofrock.com/" }],
  },
  {
    title: "Social",
    links: [],
  },
];

export const concertDetails: any = [
  {
    tag: "Upcoming",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "May 21, 2026 • Gachibowli outdoor stadium - Hyderabad",
    status: "SOLD OUT",
    link: "https://in.bookmyshow.com/events/rockstar-anirudh-xv-15-years-with-you/ET00486479",
    city: "hyderabad",
  },
  {
    tag: "Selling Fast",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "June 01, 2026 • The Trusts Arena - AUCKLAND",
    status: "TICKETS",
    link: "https://www.maestroproductions.com/events/40",
    city: "auckland",
  },
  {
    tag: "Standard",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "June 04, 2026 • John cain Arena - MELBOURNE",
    status: "TICKETS",
    link: "https://www.maestroproductions.com/events/39",
    city: "melbourne",
  },
  {
    tag: "Standard",
    name: "Rockstar Anirudh XV - 15 years with you",
    details: "June 06, 2026 • Qudos Bank Arena - SYDNEY",
    status: "TICKETS",
    link: "https://www.maestroproductions.com/events/42",
    city: "sydney",
  },
  {
    tag: "Standard",
    name: "VARIETE INTERNATIONALE",
    details: "April 18, 2026 • ADIDAS ARENA - PARIS",
    status: "TICKETS",
    link: "https://billetterie.adidasarena.com/fr/manifestation/anirudh-billet/idmanif/651086/codtypadh/FTT/numadh/01/codeconf/FTMS01",
    city: "paris",
  },
];

export const mainCity = "hyderabad";
export const customLink = "https://www.maestroproductions.com";
export const upcomingTourPhotos: any = [
  {
    link: concertDetails.find((item: any) => item.city === mainCity).link,
    image:
      "https://instagram.fhyd2-3.fna.fbcdn.net/v/t51.82787-15/639502561_18569272423023214_5026255310055413904_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=100&ig_cache_key=MzgzNjU3OTc1OTUxODkwMjEzNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=pV-FO91J7HEQ7kNvwH6JUUT&_nc_oc=AdlMlPPDz5qCNWT6feLUGcy0griDVuksDvyz6gMUHCBIRZwOBoItJlmuhprqR5ksGZieCDCqbnPUXVKBhkqeYT9F&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fhyd2-3.fna&_nc_gid=WdvqgUCAZCnUMitlTM_1Zg&_nc_ss=8&oh=00_AftFyhkmP62G_akjAqAy2-KYM2zF9bsmnx1srmL19Ir3eg&oe=69AA09F3",
  },
  {
    link: customLink,
    image:
      "https://instagram.fhyd2-3.fna.fbcdn.net/v/t51.82787-15/642646431_18571936276023214_7908618614582043556_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=107&ig_cache_key=Mzg0MTUyMTM0ODk2MzkzMDEwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTY4OC5zZHIuQzMifQ%3D%3D&_nc_ohc=4b6CQVjXsBsQ7kNvwFM6I4s&_nc_oc=AdmWakCdZCR8zpb-HezQKmta9Nbh2FjbH06fkGLnJEJ2rYPF135nTQqOVQOuNpNchPUEygBnt-52Krdcy_rY4vAd&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fhyd2-3.fna&_nc_gid=QM6ttjhjjP-hSgJOVK7w3A&_nc_ss=8&oh=00_Afu1xzqPm4XFZwlEcZbNfKZxsIjPKgTy8LSs8k-WyYLrOQ&oe=69AA0CA5",
  },
  {
    link: concertDetails.find((item: any) => item.city === "paris").link,
    image:
      "https://instagram.fhyd2-3.fna.fbcdn.net/v/t51.82787-15/642532737_18571621132023214_1893530310995551076_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=102&ig_cache_key=Mzg0MDM5NzYyOTI1NjMxNDA5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=aDIAWkMu_kgQ7kNvwFZ9ooC&_nc_oc=Adm3AlehBg24Y1aE2Y0dp77J4DoR7a8m8Ld53CmVCVBLgFup20UauaQgpgm__y4pPPcQjjQzm-q6vsF0BQfdUHlh&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fhyd2-3.fna&_nc_gid=QM6ttjhjjP-hSgJOVK7w3A&_nc_ss=8&oh=00_Afteb6D75f7IqX1294Un9OhmMz_fCDuD2dTEUAr8ZhaSJA&oe=69AA0D16",
  },
];

export const MONTHLY_LISTENERS = 23_653_910;
export const COUNTRIES = 184;
export const STREAMS = 13;
export const DURATION = 2000;

export const privacyPolicyLink = "";
export const termsLink = "";
export const cookieLink = "";
