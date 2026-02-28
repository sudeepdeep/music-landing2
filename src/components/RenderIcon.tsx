import { ShoppingCart } from "lucide-react";
import { AppleMusicIcon, SpotifyIcon } from "../assets/Icons";

const iconMap: any = {
  spotify: <SpotifyIcon />,
  applemusic: <AppleMusicIcon />,
  store: <ShoppingCart />,
};

const RenderIcon: any = ({ type }: any) => {
  return iconMap[type] ?? <SpotifyIcon />;
};

export default RenderIcon;
