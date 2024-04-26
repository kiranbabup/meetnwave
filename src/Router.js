import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import PageNotFound from "./layouts/PageNotFound";
import ProtectedRoute from "./layouts/ProtectedRoute";
// import SidebarLayout from "./layouts/sidebar";
// import Dashboard from "./pages/Dashboard";

const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
            <Route path="/" element={<HomeLayout />} />
            <Route path="/404" element={<PageNotFound />} />
            {/* <Route path="/admin" element={<AdminLogin />} /> */}

            {/* <Route path="/admindashboard" element={<ProtectedRoute type="admin" />}> */}
                {/* <Route path="" element={<SidebarLayout type="admin" />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route> */}
            {/* </Route> */}

      
    {/* <Route path="employees" element={<Employees />} />
          <Route path="worksheet" element={<Worksheet />} />
          <Route path="clients" element={<Clients />} />
        <Route path="finance" element={<Finance />} /> */}
    {/* <Route path="*" element={<Navigate to="/404" replace />} /> */ }
        </Routes>
  );
};

export default Router;
