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
  // {
  //   label: "Facebook",
  //   platform: "facebook",
  //   url: "https://facebook.com/alfadetailersstudio",
  // },
  // {
  //   label: "TikTok",
  //   platform: "tiktok",
  //   url: "https://tiktok.com/@alfadetailersstudio",
  // },
  {
    label: "WhatsApp",
    platform: "whatsapp",
    // Usar el número exportado desde getPhoneNumber.ts
    url: `https://wa.me/${CLIENT_PHONE_NUMBER.replace(/\D/g, "")}`,
  },
];
