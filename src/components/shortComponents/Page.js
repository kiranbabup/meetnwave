import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import { Box } from "@mui/material";

const Page = forwardRef(({ children, title = "", meta, sx, py = 8, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | meetnwave`}</title>
      {meta}
    </Helmet>

    <Box
      ref={ref}
      {...other}
      component="main"
      sx={{
        flexGrow: 1,
        py: py,
        ...sx,
      }}
    >
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
