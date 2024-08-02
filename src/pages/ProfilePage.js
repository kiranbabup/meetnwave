import { Box, Card, CardContent, Typography } from "@mui/material";
import MainHeaderComponent from "../components/headerFiles/HeaderCheck";

const ProfilePage = () => {

    return (
        <Box>
            <MainHeaderComponent />
            <Box sx={{ height: { xs: "72px", sm: "64px" }, backgroundColor: "blue" }} />
    
            <Box sx={{
                display: "flex", flexDirection:  "column", alignItems: "center",
                background:"lightgray"
            }}>
                <Box
                    component="img"
                    src="https://firebasestorage.googleapis.com/v0/b/meeting-app-1b9aa.appspot.com/o/photos%2Fbanners%2FBDv9UkyM5cdU6hSn6TupIvmVJCx2%2F20230725_192328.jpg?alt=media&token=19504ca7-7472-4bbd-a350-bbcf336b9c78"
                    alt="MeetMe Logo"
                    sx={{ width: "100%", height: { xs: "9rem", md: "22rem" }, position: "relative", }}
                />
                <Box sx={{
                    width: { xs: "100px", md: "200px" }, height: { xs: "100px", md: "200px" },
                    border: { xs: "3px solid gold", md: "5px solid gold" }, borderRadius: "50%",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    overflow: "hidden", position: "absolute", top: { xs: "10.5rem", md: "10rem" },
                }}>
                    <Box sx={{
                        width: { xs: "92px", md: "186px" }, height: { xs: "92px", md: "186px" },
                        border: { xs: "3px solid silver", md: "5px solid silver" }, borderRadius: "50%",
                        overflow: "hidden",
                    }}>
                        <Box
                            component="img"
                            src="https://firebasestorage.googleapis.com/v0/b/meeting-app-1b9aa.appspot.com/o/photos%2Fprofiles%2FBDv9UkyM5cdU6hSn6TupIvmVJCx2%2F1000024634.jpg?alt=media&token=4d37b471-b5af-4deb-a2a4-3cbf16d485b6"
                            alt="MeetMe Logo"
                            sx={{ width: "100%", height: "100%", }}
                        />
                    </Box>
                </Box>
                <Box p={{ xs: 4, md: 8 }} />

                <Box>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography>P Kiran Babu</Typography>
                            <Box p={1} />
                            <Typography>Software Developer</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;