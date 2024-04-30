import { Box } from "@mui/material";
import FooterComponent from "../components/footerFiles/FooterComponent";
import MainHeaderComponent from "../components/headerFiles/HeaderCheck";
import { mainbgcolor } from "../constants";

const HomeLayout = () => {
    return(
        <Box sx={{backgroundColor: mainbgcolor}}>
            <MainHeaderComponent/>
            <Box
                component="img"
                alt="Starting image"
                src="/static/images/pg1.jpg"
                sx={{width:"100%", height:"100vh"}}
            />
            <FooterComponent/>
        </Box>
    )
}
export default HomeLayout;