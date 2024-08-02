import { Box, Typography } from "@mui/material"
import { connect } from 'react-redux';
import { PaperItem, blackColor } from "../../constants";
import CustomPaginationActionsTable from "../../components/shortComponents/CustomPaginationActionsTable";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";

const UsersListPage = ({ userCount }) => {
    const [usersListData, setUsersListData] = useState([]);

    const fetchUsersData = async () => {
        const uList = query(collection(db, "users"), where("user_id", "!=", "Admin"));
        try {
            const querySnapshot = await getDocs(uList);
            const usersList = querySnapshot.docs.map(doc => doc.data());
            console.log("Users List:", usersList);
            setUsersListData(usersList);
        } catch (error) {
            console.error("Error fetching count:", error);
        }
    };
    
    useEffect(() => {
        fetchUsersData();
    }, []);
    console.log("Users List Data:", usersListData);

    function createData(a, b, c, d, f) {
        return { a, b, c, d, f};
      }
      const columns = [
        { id: 'a', label: 'S.No' },
        { id: 'b', label: 'User Name' },
        { id: 'c', label: 'Phone No' },
        { id: 'd', label: 'EMail' },
        // { id: 'e', label: 'No.of Contacts', align:'center' },
        { id: 'f', label: 'Ac Status' },
    ];
      const rows = usersListData.map((user, index) => (createData(index+1, user.name, user.phone_number, user.email, user.account_status)));
    //   user.contacts.length,
    return (
        <Box>
            <PaperItem elevation={3}>
                <Typography sx={{ color: blackColor }}>
                    No of Users : {userCount}
                </Typography>
            </PaperItem>
            <Box p={1} />
            <CustomPaginationActionsTable columns={columns} rows={rows} />
        </Box>
    )
}

const mapStateToProps = (state) => ({
    userCount: state.adminData.userCount,
});

export default connect(mapStateToProps)(UsersListPage);