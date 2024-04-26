// ----------------------------------------------------------------------

export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          // "& .Mui-focused": {
          //   color: `${theme.palette.secondary.main} !important`,
          // },
          // "& .Mui-focused fieldset": {
          //   borderColor: `${theme.palette.secondary.main} !important`,
          // },
        },
      },
    },
  };
}
