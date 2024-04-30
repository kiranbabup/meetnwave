import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import PageNotFound from "./layouts/PageNotFound";
import ProtectedRoute from "./layouts/ProtectedRoute";
import AdminLogin from "./layouts/AdminLogin";
import AdminSidebarLayout from "./layouts/adminLayout/indexAdmin";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
import UsersListPage from "./pages/adminPages/UsersListPage";
import EventsListPage from "./pages/adminPages/EventsListPage";
import ProfilePage from "./pages/adminPages/ProfilePage";

const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
            <Route path="/" element={<HomeLayout />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/adminmnwlogin" element={<AdminLogin />} />

            <Route path="/admin" element={<ProtectedRoute type="admin" />}>
                <Route path="" element={<AdminSidebarLayout type="admin" />}>
                    <Route path="mnwdashboard" element={<AdminDashboard />} />
                    <Route path="mnwuserslist" element={<UsersListPage />} />
                    <Route path="mnweventslist" element={<EventsListPage />} />
                    <Route path="mnwadminprofile" element={<ProfilePage />} />
                    
                </Route>
            </Route>

      
    {/* <Route path="employees" element={<Employees />} />
          <Route path="worksheet" element={<Worksheet />} />
          <Route path="clients" element={<Clients />} />
        <Route path="finance" element={<Finance />} /> */}
    {/* <Route path="*" element={<Navigate to="/404" replace />} /> */ }
        </Routes>
  );
};

export default Router;
