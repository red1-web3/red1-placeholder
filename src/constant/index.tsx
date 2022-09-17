import { ClientsData, JobCompanyName, SiderData } from "../types";
import devOps from "/websiteDemo/devOps.png";
import netflix from "/websiteDemo/netflix.png";
import airport from "/websiteDemo/airport-transfer.png";
import outside from "/websiteDemo/outside.png";

export const jobCompanyName: JobCompanyName[] = [
  {
    comapany: "Our Timeline",
    date: "Augast 2021 - October 2021",
    role: "Juniour Creative developer",
  },
  {
    comapany: "Black Water",
    date: "November 2021 - February 2021",
    role: "Freelnce Creative developer",
  },
  {
    comapany: "Digital Gregg",
    date: "September 2022 - October 2022",
    role: "Senior Creative developer",
  },
];

export const clientsData: ClientsData[] = [
  {
    logo: "clients/cambrex-logo.svg",
    text: "",
  },
  {
    logo: "clients/castrol-logo.svg",
    text: "",
  },
  {
    logo: "clients/ice-logo.svg",
    text: "",
  },
  {
    logo: "clients/id-mobile-logo.svg",
    text: "",
  },
  {
    logo: "clients/kpmg-logo.svg",
    text: "",
  },
  {
    logo: "clients/pepsi-logo.svg",
    text: "",
  },
  {
    logo: "clients/reece-logo.svg",
    text: "",
  },
  {
    logo: "clients/sma-logo.svg",
    text: "",
  },
  {
    logo: "clients/ulaw-logo.svg",
    text: "",
  },
];

export const sliderData: SiderData[] = [
  {
    image: devOps,
    url: "https://dev-ops-landing-page.vercel.app/",
  },
  {
    image: netflix,
    url: "netflix-six-tau.vercel.app",
  },
  {
    image: airport,
    url: "https://airport-transfer-six.vercel.app",
  },
  {
    image: outside,
    url: "https://outside-yacht-club.vercel.app",
  },
];
