import { Box, Typography } from "@mui/material"
// import { connect } from 'react-redux';
import { Item } from "../../constants";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";

const ProfilePage = () => {

    const fetchAdminData = async () => {
        const adminData = query(collection(db, "users"), where("user_name", "===", "Admin"));
        try {
            const querySnapshot = await getDocs(adminData);
            const adminDetails = querySnapshot.docs.map(doc => doc.data());
            console.log("Admin Details List:", adminDetails);
            
        } catch (error) {
            console.error("Error fetching count:", error);
        }
    };
    
    useEffect(() => {
        fetchAdminData();
    }, []);

    return (
        <Box>
            <Item elevation={3}>
                <Typography sx={{ color: "black" }}>
                    Admin Profile
                </Typography>
            </Item>
            <Box p={1} />
            <Item elevation={3}>
                <Typography sx={{ color: "black" }}>
                    Admin Profile
                </Typography>
            </Item>
        </Box>
    )
}

export default ProfilePage;
// export default connect(mapStateToProps)(ProfilePage);