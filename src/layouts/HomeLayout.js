import { Box } from "@mui/material";
import FooterComponent from "../components/footerFiles/FooterComponent";
import MainHeaderComponent from "../components/headerFiles/HeaderCheck";

const HomeLayout = () => {
    return(
        <>
            <MainHeaderComponent/>
            <Box
                component="img"
                alt="Starting image"
                src="/static/images/pg1.jpg"
                sx={{width:"100vw", height:"100vh"}}
            />
            <FooterComponent/>
        </>
    )
}
export default HomeLayout;