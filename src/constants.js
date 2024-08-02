import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

export const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "NFC Cards",
    link: "",
  },
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Signup",
    link: "",
  },
  {
    title: "Login",
    link: "",
  },
];

export const logoName = "MEET ME"

export const dodgerBlueColor = "dodgerblue";
export const grayBG = "#3b3837";
export const whiteColor = "white";
export const blackColor = "black";
export const avatarBGColor = "#009BA5"

// admin login details validation
export const phoneRegExp = /\b\d{10}\b/;
export const phnValid = "Phone number must be a valid number";
export const phnoReq = "Phone number is required";
export const pwdLen = 6;
export const pwdValid = "Password must be atleast 6 characters";
export const pwdReq = "Password is required";

export const APP_BAR_MOBILE = 64;
export const APP_BAR_DESKTOP = 64;
export const DRAWER_WIDTH = 240;
export const MENU_OPTIONS = [
  // {
  //   label: "Home",
  //   icon: "eva:home-fill",
  //   linkTo: "/admin-dashboard/",
  // },
  // {
  //   label: "Admin Profile",
  //   icon: "eva:person-fill",
  //   linkTo: "/admin/mnwadminprofile",
  // },
  // {
  //   label: "Settings",
  //   icon: "eva:settings-2-fill",
  //   linkTo: "/admin-dashboard",
  // },
];
export const PUBLIC_URL = process.env.PUBLIC_URL;

export const PaperItem = styled(Paper)(({ theme }) => ({
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

export const displayProperties = {
  display: "flex", flexDirection: "column", alignItems: "center",
}