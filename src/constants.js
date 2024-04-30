import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

export const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/404",
  },
  {
    title: "Contact us",
    link: "/404",
  }
];

export const logoName = "MEET'n'WAVE"
export const mainbgcolor = "dodgerblue";
export const mainColor = "white";

export const phoneRegExp = /\b\d{10}\b/;

export const APP_BAR_MOBILE = 64;
export const APP_BAR_DESKTOP = 64;
export const DRAWER_WIDTH = 240;
export const MENU_OPTIONS = [
  // {
  //   label: "Home",
  //   icon: "eva:home-fill",
  //   linkTo: "/admin-dashboard/",
  // },
  {
    label: "Admin Profile",
    icon: "eva:person-fill",
    linkTo: "/admin/mnwadminprofile",
  },
  // {
  //   label: "Settings",
  //   icon: "eva:settings-2-fill",
  //   linkTo: "/admin-dashboard",
  // },
];
export const PUBLIC_URL = process.env.PUBLIC_URL;

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 40,
  width: 300,
  lineHeight: '60px',
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  marginLeft: "1rem"
}));
