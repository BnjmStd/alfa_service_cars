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
    url: "https://instagram.com/alfadetailersstudio",
  },
  {
    label: "Facebook",
    platform: "facebook",
    url: "https://facebook.com/alfadetailersstudio",
  },
  {
    label: "TikTok",
    platform: "tiktok",
    url: "https://tiktok.com/@alfadetailersstudio",
  },
  {
    label: "WhatsApp",
    platform: "whatsapp",
    url: "https://wa.me/5210000000000",
  },
];
