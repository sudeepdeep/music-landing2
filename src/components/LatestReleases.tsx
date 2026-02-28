import { AppleMusicIcon, SpotifyIcon } from "../assets/Icons";
import { bannerSong, socialMedia, songs } from "../constants";
import Button from "./Button";
import Card from "./Card";
import Merchandise from "./Merchandise";

function SpotifyEmbed({ code }: any) {
  return (
    <iframe
      title="Anirudh"
      src={`https://open.spotify.com/embed/track/${code}`}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="flex items-center mt-8"
    />
  );
}

function LatestReleases() {
  function handleClick() {
    window.location.href = socialMedia.spotify;
  }
  return (
    <section
      className="px-4 py-10 h-auto bg-primary/5 dark:bg-primary/10"
      id="music"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-extrabold tracking-tight mb-8">
          LATEST RELEASES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="group cursor-pointer"
            onClick={() => (window.location.href = bannerSong.youtubeLink)}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-primary transition-all">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-alt="Musician playing piano in atmospheric lighting"
                style={{
                  backgroundImage: "url(" + bannerSong.youtubeThumbNail + ")",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                <span className="material-symbols-outlined text-white text-6xl opacity-90">
                  play_circle
                </span>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="font-bold text-slate-900 dark:text-white">
                {bannerSong.name}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {bannerSong.details}
              </p>
            </div>
            <div className="h-[200px]">
              <SpotifyEmbed code={bannerSong.spotifyCode} />
            </div>
          </div>
          <Card sx={"h-[500px]"}>
            <div className="flex items-center gap-4">
              <div
                className="size-16 rounded-lg bg-cover shadow-md"
                data-alt="Album cover with vibrant purple abstract art"
                style={{
                  backgroundImage:
                    "url('https://i.scdn.co/image/ab6761610000939b0f0be2054fe9594026a6b843')",
                }}
              ></div>
              <div className="flex-1 overflow-hidden">
                <h4 className="font-bold text-slate-900 dark:text-white truncate">
                  The Rockstar Era
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Album • {songs.length} Tracks
                </p>
              </div>
              <span className="material-symbols-outlined text-primary">
                equalizer
              </span>
            </div>
            <div className="space-y-2">
              {songs.map((song: any, index: any) => (
                <div className="flex items-center justify-between text-xs font-medium px-2 py-1.5 hover:bg-primary/10 rounded-lg cursor-pointer transition-colors group">
                  <span className="text-slate-400 group-hover:text-primary">
                    0{index + 1}
                  </span>
                  <span className="flex-1 px-3">
                    {song.song.split(/(#\w+)/g).map((part: any, i: any) =>
                      part.startsWith("#") ? (
                        <span key={i} className="text-primary font-semibold">
                          {part}
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      ),
                    )}
                  </span>
                  <span onClick={() => (window.location.href = song.spotify)}>
                    <SpotifyIcon h={4} />
                  </span>
                  <span
                    onClick={() => (window.location.href = song.appleMusic)}
                  >
                    <AppleMusicIcon h={4} />
                  </span>
                  {/* <span className="text-slate-400">03:24</span> */}
                </div>
              ))}
              {/* <div className="flex items-center justify-between text-xs font-medium px-2 py-1.5 hover:bg-primary/10 rounded-lg cursor-pointer transition-colors group">
                <span className="text-slate-400 group-hover:text-primary">
                  01
                </span>
                <span className="flex-1 px-3">Hukum - Tiger Ka Hukum</span>
                <span className="text-slate-400">03:24</span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium px-2 py-1.5 bg-primary/20 rounded-lg text-primary">
                <span>02</span>
                <span className="flex-1 px-3 font-bold">Bloody Sweet</span>
                <span className="material-symbols-outlined text-sm">
                  volume_up
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-medium px-2 py-1.5 hover:bg-primary/10 rounded-lg cursor-pointer transition-colors group">
                <span className="text-slate-400 group-hover:text-primary">
                  03
                </span>
                <span className="flex-1 px-3">Badass - Leo</span>
                <span className="text-slate-400">03:45</span>
              </div> */}
            </div>
            <Button
              btnTxt="LISTEN ON SPOTIFY"
              logo="spotify"
              handleClickBtn={handleClick}
            />
            {/* <button className="w-full mt-2 py-2.5 rounded-full border-2 border-primary/30 text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
              <SpotifyIcon />
              LISTEN ON SPOTIFY
            </button> */}
          </Card>
        </div>
      </div>
      <div className="max-w-4xl mx-auto h-[80%] md:mt-0 mt-[50px]">
        <Merchandise />
      </div>
      {/* <div className="h-[100vh] mt-5">
        <Gallery />
      </div> */}
    </section>
  );
}

export default LatestReleases;
