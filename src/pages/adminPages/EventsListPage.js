import { Box, Typography } from "@mui/material"
import { connect } from 'react-redux';
import { Item } from "../../constants";
import CustomPaginationActionsTable from "../../components/shortComponents/CustomPaginationActionsTable";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";

const EventsListPage = ({ eventsCount }) => {
    const [eventsListData, setEventsListData] = useState([]);

    const fetchEventsData = async () => {
        const eList = query(collection(db, "events"));
        try {
            const querySnapshot = await getDocs(eList);
            const eventsList = querySnapshot.docs.map(doc => doc.data());
            console.log("Events List:", eventsList);
            setEventsListData(eventsList);
        } catch (error) {
            console.error("Error fetching count:", error);
        }
    };
    
    useEffect(() => {
        fetchEventsData();
    }, []);
    console.log("Events List Data:", eventsListData);

    function createData(a, b, c, d, e, f, g, h) {
        return { a, b, c, d, e, f, g, h: String(h)};
      }
      const columns = [
        { id: 'a', label: 'S.No' },
        { id: 'b', label: 'User Name' },
        { id: 'c', label: 'Event Name' },
        { id: 'd', label: 'Event Category' },
        { id: 'e', label: 'Event Date'},
        { id: 'f', label: 'Event added ids', align:'center'  },
        { id: 'g', label: 'Likes', align:'center' },
        { id: 'h', label: 'isEvent Ended'}
    ];
      const rows = eventsListData.map((event, index) => (createData(index+1,
        event.user_name,
        event.event_name,
        event.event_category,
        event.event_date,
        event.event_added_ids.length,
        event.likes.length,
        event.isEvent_ended,
    )));

    return (
        <Box>
            <Item elevation={3}>
                <Typography sx={{ color: "black" }}>
                    No of Events : {eventsCount}
                </Typography>
            </Item>
            <Box p={1} />
            <CustomPaginationActionsTable columns={columns} rows={rows} />
        </Box>
    )
}

const mapStateToProps = (state) => ({
    eventsCount: state.adminData.eventsCount,
});

export default connect(mapStateToProps)(EventsListPage);