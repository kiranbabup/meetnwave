import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Drawer} from "@mui/material";
import { NavConfigAdmin } from "./NavConfigAdmin";
import useResponsive from "../../components/shortComponents/useResponsive";
import { DRAWER_WIDTH, logoName } from "../../constants";
import NavSection from "./NavSection";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AdminDashboardSidebar = ({ isOpenSidebar, onCloseSidebar, getTestQuestion }) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <>
      <Box sx={{ px: 3, py: 1.5, display: "inline-flex" }}>
        <Box component="img" 
        // src={`${PUBLIC_URL}/static/icons/python.svg`} 
        alt={logoName}
        sx={{ width: "100%", height:"3rem" }} />
        </Box>
      <NavSection 
      navConfig={NavConfigAdmin} 
      />
      <Box flexGrow={1} />
    </>
  );
  
  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
           {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
};

export default AdminDashboardSidebar