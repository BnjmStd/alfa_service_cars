import { CLIENT_PHONE_NUMBER } from "./getPhoneNumber";

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "whatsapp"
  | "youtube"
  | "x";

export type SocialLink = {
  label: string;
  platform: SocialPlatform;
  url: string;
};

export const SOCIALS: SocialLink[] = [
  {
    label: "Instagram",
    platform: "instagram",
    url: "https://www.instagram.com/alfa.detailers?igsh=MW11ODlvMTlocmxkZw%3D%3D&utm_source=qr",
  },
  {
    label: "Facebook",
    platform: "facebook",
    url: "https://www.facebook.com/share/17stJ4MLWF/?mibextid=wwXIfr",
  },
  {
    label: "TikTok",
    platform: "tiktok",
    url: "https://www.tiktok.com/@alfadetailers?_r=1&_t=ZM-92wMcKOOMSi",
  },
  {
    label: "WhatsApp",
    platform: "whatsapp",
    url: `https://wa.me/${CLIENT_PHONE_NUMBER.replace(/\D/g, "")}`,
  },
];
