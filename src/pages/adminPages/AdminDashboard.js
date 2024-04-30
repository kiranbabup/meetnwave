import { Box, Container, Grid, Typography } from "@mui/material"
import AppWidgetSummary from "../../components/shortComponents/AppWidgetSummary";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const AdminDashboard = ({ userCount, eventsCount }) => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="xl">
            <Typography sx={{ mb: 3 }} variant="h5">
                Admin Dashboard
            </Typography>
            <Box>
                <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <AppWidgetSummary title="Users" onPress={() => navigate("/admin/mnwuserslist")} total={userCount} color="success" icon={"ant-design:windows-filled"} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <AppWidgetSummary title="Events" onPress={() => navigate("/admin/mnweventslist")} total={eventsCount} color="error" icon={"ant-design:windows-filled"} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
const mapStateToProps = (state) => ({
    userCount: state.adminData.userCount,
    eventsCount: state.adminData.eventsCount,
});
export default connect(mapStateToProps)(AdminDashboard);