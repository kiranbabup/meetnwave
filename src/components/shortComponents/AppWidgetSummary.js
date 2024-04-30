import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import Iconify from "./Iconify";

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

export default function AppWidgetSummary({ title, total, icon, color = "primary", sx, onPress, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        backgroundImage: (theme) => `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(theme.palette[color].dark, 0.3)} 100%)`,
          // bgcolor: "gray",
        // color: (theme) => theme.palette[color].darker,
        // bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
      onClick={()=>onPress()}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) => `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 00%, ${alpha(theme.palette[color].dark, 0.3)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle2">
        {title}
      </Typography>
    </Card>
  );
}
