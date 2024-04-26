export default function Tab(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          // minWidth: 48,
          // minHeight: 48,
          padding: theme.spacing(1),
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          textTransform: "none",
          // fontWeight: 500,
          "&:not(:last-child)": {
            marginRight: 20,
          },
          // "&.Mui-selected": {
          //   color: theme.palette.grey[800],
          // },
        },
      },
    },
  };
}
