import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import AdminDashboardNavbar from "./AdminDashBoardNavbar";
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from "../../constants";
import AdminDashBoardSidebar from "./AdminDashBoardSidebar";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { setUserCount, setEventsCount } from "../../actions/adminData"

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 8,
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 8,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const AdminSidebarLayout = ({ account, setUserCount, setEventsCount }) => {
  const [open, setOpen] = useState(false);

  const fetchUserCount = async () => {
    const q = query(collection(db, "users"), where("user_name", "!=", "Admin"));
    const e = query(collection(db, "events"));
    try {
      const querySnapshot = await getDocs(q);
      const userCount = querySnapshot.docs.length;
      // console.log("Number of users (excluding admins):", userCount);
      setUserCount(userCount);

      const querySnapshot2 = await getDocs(e);
      const eventCount = querySnapshot2.docs.length;
      // console.log("Number of events:", eventCount);
      setEventsCount(eventCount)
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  useEffect(() => {
    fetchUserCount();
  }, []);

  return (
    <RootStyle>
      <AdminDashboardNavbar account={account ?? {}} onOpenSidebar={() => setOpen(true)} />
      <AdminDashBoardSidebar account={account ?? {}} isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.auth?.user,
  };
};

export default connect(mapStateToProps, { setUserCount, setEventsCount })(AdminSidebarLayout);