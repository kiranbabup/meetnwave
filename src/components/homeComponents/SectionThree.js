import { Box, Card, Typography } from "@mui/material";
import { displayProperties } from "../../constants";
import card1 from "../../images/cards/card1.jpeg";
import card2 from "../../images/cards/card2.jpg";

const SectionThree = () => {
    return (
        <Box style={displayProperties} sx={{ py: { xs: 1, sm: 10 }, }} >
            <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" }, fontWeight: "bold" }}>NFC CARDS</Typography>
            <Box width="80%" sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: 1 }}>
                <Card sx={{ width: "380px", height: "250px", display: "flex" }}>
                    <Box width="50%" >
                        <Box sx={{
                            width: "100%", height: "100%",
                            backgroundImage: `url(${card2})`,
                            backgroundSize: "100%",
                        }} >
                            <Box sx={{ width: "100%", height: "100%", '&:hover': { backgroundColor: "#42a5f552", width: "100%", height: "100%", } }} />
                        </Box>
                    </Box>
                    <Box width="50%"></Box>
                </Card>
            </Box>
        </Box>
    )
}
export default SectionThree;