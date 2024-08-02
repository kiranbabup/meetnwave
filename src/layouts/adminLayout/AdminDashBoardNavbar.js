import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import AdminAccountPopover from "./AdminAccountPopover";
import { APP_BAR_DESKTOP, APP_BAR_MOBILE, DRAWER_WIDTH, whiteColor, dodgerBlueColor } from "../../constants";
import Iconify from "../../components/shortComponents/Iconify";

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APP_BAR_MOBILE,
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up("lg")]: {
    minHeight: APP_BAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function AdminDashboardNavbar({ account, onOpenSidebar }) {

  return (
    <RootStyle elevation={5}>
      <ToolbarStyle sx={{ backgroundColor:dodgerBlueColor}}>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Typography variant="subtitle2" fontWeight={500} sx={{color:whiteColor}}>
          Admin Pannel
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <AdminAccountPopover account={account} />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
