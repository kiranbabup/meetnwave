import PropTypes from "prop-types";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Box, List, ListItemText, ListItemIcon, ListItemButton, ListItem } from "@mui/material";
import { whiteColor, dodgerBlueColor } from "../../constants";

export const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  minWidth: 38,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ListItemStyle2 = styled((props) => <ListItem disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const ListItemIconStyle2 = styled(ListItemIcon)({
  width: 22,
  height: 22,
  minWidth: 54,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const useStyles = makeStyles((theme) => ({
  activeRootStyle: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "blue",
  },
}));

function NavItem({ item, active }) {
  const classes = useStyles();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info } = item;

  return (
    <ListItemStyle className={isActiveRoot ? classes.activeRootStyle : null} component={RouterLink} to={path}
      sx={{
        backgroundColor: dodgerBlueColor, color: whiteColor,
        '&:hover': {
          backgroundColor: 'blue',
        },
      }}>
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  console.log(navConfig);
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item, index) => (
          <Box sx={{ mb: 1 }}>
            <NavItem key={index} item={item} active={match} />
          </Box>
        ))}
      </List>
    </Box>
  );
}
