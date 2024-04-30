import { Box } from "@mui/material";
import { PUBLIC_URL } from "../../constants";

const getIcon = (src) => <Box component="img" 
src={`${PUBLIC_URL}${src}`} 
alt=''
sx={{ width: 16, height: 16 }} />;

const NavConfigAdmin = [
  {
    title: "Admin Dashboard",
    path: "/admin/mnwdashboard",
    icon: getIcon("/static/icons/admin-cognitive.svg"),
  },
  {
    title: "Users List",
    path: "/admin/mnwuserslist",
    icon: getIcon("/static/icons/admin-technical.svg"),
  },
  {
    title: "Events List",
    path: "/admin/mnweventslist",
    icon: getIcon("/static/icons/admin-communication.svg"),
  }
];

export { NavConfigAdmin };
