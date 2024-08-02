import { Box, Typography } from "@mui/material";
import { displayProperties, whiteColor } from "../../constants";
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';
import freeShipping from "../../images/free-shipping.png";
import lifetime from "../../images/lifetime.png";

const SectionTwo = () => {
    return (
        <Box style={displayProperties} sx={{ py: { xs: 1, sm: 10 } }} >
            <Typography sx={{ fontSize: { xs: "1.4rem", sm: "3rem" }, fontWeight: "bold" }}>Don't Try So Hard To Network</Typography>

            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <Box style={displayProperties} sx={{ width: "300px", py: 1, }}>
                    <Box component="img" alt="Free shipping" src={freeShipping} sx={{ height: "10rem" }} />
                    <Typography sx={{ fontWeight: "bold", fontStyle: 'italic', fontSize: "1.5rem" }} >Free Shipping</Typography>
                </Box>
                <Box style={displayProperties} sx={{ width: "300px", py: 1 }}>
                    <Box sx={{ height: "10rem", display: "flex", alignItems: "center" }}>
                        <Box sx={{ height: "6rem", width: "10rem", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", backgroundColor: "black", color: whiteColor, fontSize: "1.5rem", fontWeight: "bold" }} >YOUR<br />LOGO</Box>
                    </Box>
                    <Typography sx={{ fontWeight: "bold", fontStyle: 'italic', fontSize: "1.5rem" }} >Your Branding</Typography>
                </Box>
                <Box style={displayProperties} sx={{ width: "300px", py: 1 }}>
                    <Box sx={{ height: "10rem", display: "flex", alignItems: "center", }}>
                        <AppShortcutRoundedIcon sx={{ fontSize: "6rem", color: "black", }} />
                    </Box>
                    <Typography sx={{ fontWeight: "bold", fontStyle: 'italic', fontSize: "1.5rem" }} >Free Mobile App</Typography>
                </Box>
                <Box style={displayProperties} sx={{ width: "300px", py: 1 }}>
                    <Box sx={{ height: "10rem", display: "flex", alignItems: "center" }}>
                        <Box component="img" alt="LifeTime Validity" src={lifetime} sx={{ height: "6rem" }} />
                    </Box>
                    <Typography sx={{ fontWeight: "bold", fontStyle: 'italic', fontSize: "1.5rem" }} >Life Time Validity</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default SectionTwo;