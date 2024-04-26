import { Box, useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { items, mainColor, mainbgcolor } from "../../constants";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logoImage: {
    height: "auto",
    width: "100%",
    maxWidth: "80px",
  },
  menuItem: {
    textAlign: "center",
    fontSize: "20px",
    margin: "0px 26px",
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
    "&:after": {
      content: '" "',
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "-10px",
      height: "2px",
      background: theme.palette.secondary.main,
      width: "100%",
      transform: "scale(0, 1)",
      transformOrigin: "left center",
      transition: "all .15s ease-in-out",
    },
    "&:hover": {
      "&:after": {
        transform: "scale(1, 1)",
      },
    },
  },
}));

const FooterComponent = () => {
  const { pathname, hash } = useLocation();
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const match = (path) => (path ? !!matchPath(`${pathname}${hash}`, path) : false);

  return (
    <Box sx={{ height: "40vh", backgroundColor: mainbgcolor, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
      <Box py={1} >
        <a href="/" title="Meet'n'Wave" style={{ textDecoration: "none", fontSize: "2rem", color: mainColor}}>
          {/* <img className={classes.logoImage} src={trigger ? "/static/icons/logo.png" : "/static/icons/logo.png"} alt="logo" /> */}
          Meet'n'Wave
        </a>
      </Box>
      <Box>
        {items.map((item, index) => (
          <Box key={index} sx={{ display: "flex", height: "50px", alignItems: "center" }}>
            <Box
              className={classes.menuItem}
              component={!item.isDialog ? RouterLink : item.target ? "a" : "div"}
              {...(item.target && { href: item.link, target: "_blank" })}
              sx={{ color: match(item.link) ? "secondary.main" : trigger ? "white" : "black" }}
              to={item.link}
            >
              {item.title}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FooterComponent;