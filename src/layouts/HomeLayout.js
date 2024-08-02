import { Box } from "@mui/material";
import FooterComponent from "../components/footerFiles/FooterComponent";
import MainHeaderComponent from "../components/headerFiles/HeaderCheck";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";

const HomeLayout = () => {
    return (
        <Box>
            <MainHeaderComponent />
            <Box sx={{height: {xs:"72px", sm:"64px"}, backgroundColor:"blue"}} />
            <Box
                component="img"
                alt="Starting image"
                src="/static/images/pg1.jpg"
                sx={{ width: "100%", height: {xs:"35vh", sm:"94vh"} }}
            />
            <SectionTwo />
            <SectionThree />
            <FooterComponent />
        </Box>
    )
}
export default HomeLayout;