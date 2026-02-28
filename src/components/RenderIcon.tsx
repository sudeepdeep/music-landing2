import React from "react";
import { AppleMusicIcon, SpotifyIcon } from "../assets/Icons";
import { StoreIcon } from "lucide-react";

const iconMap: any = {
  spotify: <SpotifyIcon />,
  applemusic: <AppleMusicIcon />,
  store: <StoreIcon />,
};

const RenderIcon: any = ({ type }: any) => {
  return iconMap[type] ?? <SpotifyIcon />;
};

export default RenderIcon;
