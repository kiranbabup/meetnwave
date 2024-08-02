// import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import { MenuItem, Avatar, IconButton } from "@mui/material";
import { useAlertContext } from "../../components/shortComponents/AlertProvider";
import MenuPopover from "../../components/shortComponents/MenuPopover";
import { connect } from "react-redux";
import { authLogout } from "../../actions/auth";
import { avatarBGColor, whiteColor } from "../../constants";

const AdminAccountPopover = ({ account, authLogout }) => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const { showAlertDialog } = useAlertContext();

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    showAlertDialog({
      title: "Logout",
      description: "Are you sure, you want to log out?",
      agreeCallback: () => {
        authLogout();
        navigate("/adminmnwlogin");
      },
    });
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar
          // src={account.user?.pic}
          sx={{ bgcolor: avatarBGColor, color: whiteColor }}
        />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 2,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        {/* <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack> */}
        {/* <Divider sx={{ borderStyle: "dashed" }} /> */}
        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>Logout</MenuItem>
      </MenuPopover>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.auth,
  };
};
export default connect(mapStateToProps, { authLogout })(AdminAccountPopover);