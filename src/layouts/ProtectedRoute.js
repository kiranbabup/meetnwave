import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ type, auth }) => {
  // console.log(type);
  // console.log(auth.user);
  return auth.isAuthenticated && auth.user && auth.usertype == type ? <Outlet /> : <Navigate to="/404" replace />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
