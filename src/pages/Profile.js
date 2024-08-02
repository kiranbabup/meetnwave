import React, { Component } from "react";
import { Card, Container, Row, Col } from "reactstrap";
import "./argon.css"
import { Box, Button, Typography } from "@mui/material";
import fbgif from "../images/gifs/facebook-icon.gif";
import instagif from "../images/gifs/Instagram-icon.gif";
import linkgif from "../images/gifs/Linkedin-icon.gif";
import phgif from "../images/gifs/Phone-icon.gif";
import txgif from "../images/gifs/Twitter-icon.gif";
import webgif from "../images/gifs/Web-icon.gif";
import wtsgif from "../images/gifs/Wtsapp-icon.gif";
import utgif from "../images/gifs/Youtube-icon.gif";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAbout: false,
      isCat: false,
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  toggleAbout = () => {
    this.setState({ isAbout: !this.state.isAbout });
  }
  toggleCat = () => {
    this.setState({ isCat: !this.state.isCat });
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}

            <Box className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </Box>

            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--400">
                <div className="px-4">

                  <Row className="justify-content-center">
                    <Col className="order-lg-2 order-1" lg="3">
                      <div className="card-profile-image">
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../images/team-4-800x800.jpg")}
                        />
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 order-2 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions card-profile-stats">

                        <div >
                          {/* followers */}
                          <span className="heading">20</span>
                          <span className="description">Followers</span>
                        </div>
                      </div>
                    </Col>
                    <Col className="order-lg-1 order-2" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          {/* following */}
                          <span className="heading">89</span>
                          <span className="description">Following</span>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="text-center mt-4">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      Bucharest, Romania
                    </div>
                    <div className="h6">
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      University of Computer Science
                    </div>
                  </div>

                  <div className="mt-3 py-5 border-top text-center">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: { xs: "1rem", md: "2rem" }, flexWrap: "wrap" }}>
                      <Box component="img"
                        src={phgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={wtsgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={txgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={instagif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={linkgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={fbgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={webgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                      <Box component="img"
                        src={utgif}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'cover'
                        }} />
                    </Box>
                  </div>
                  <div className="mt-2 py-5 border-top text-center">
                    <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", }}>
                      <Typography sx={{fontWeight:"bold", fontSize:"2rem"}}>About Me</Typography>
                      <Typography textAlign="justify">
                        I'm kiran my about im sjhvkuyd asdvas,mh dajhycvas akshvc,ahs ahsvc,aj ,hasvca,h ,hjsvca  ,jhavsc  ,hsvca, s jhscv ,ajsh c as,jcbaljsb.ac asbhcb a,sjhcvah ahsvc.h a.sjcbaj a.kscjba .jksbc;ajsbc a.sjcb cms asjcb ;uo csjcbubsx 
                      </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", }}>
                      <Button variant="contained" color="info" onClick={this.toggleAbout}>About Me</Button>
                      <Box p={1} />
                      {this.state.isAbout && <Typography textAlign="justify">I'm kiran my about im sjhvkuyd asdvas,mh dajhycvas akshvc,ahs ahsvc,aj ,hasvca,h ,hjsvca  ,jhavsc  ,hsvca, s jhscv ,ajsh c as,jcbaljsb.ac asbhcb a,sjhcvah ahsvc.h a.sjcbaj a.kscjba .jksbc;ajsbc a.sjcb cms asjcb ;uo csjcbubsx</Typography>}
                    </Box>
                    <Box p={2} />

                    <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", }}>
                      <Typography sx={{fontWeight:"bold", fontSize:"2rem"}}>Catalogue</Typography>
                      <Typography textAlign="justify">
                        I'm kiran my about im sjhvkuyd asdvas,mh dajhycvas akshvc,ahs ahsvc,aj ,hasvca,h ,hjsvca  ,jhavsc  ,hsvca, s jhscv ,ajsh c as,jcbaljsb.ac asbhcb a,sjhcvah ahsvc.h a.sjcbaj a.kscjba .jksbc;ajsbc a.sjcb cms asjcb ;uo csjcbubsx 
                      </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", }}>
                      <Button variant="contained" color="info" onClick={this.toggleCat}>Catalogue</Button>
                      <Box p={1} />
                      {this.state.isCat && <Typography textAlign="justify">I'm kiran my about im sjhvkuyd asdvas,mh dajhycvas akshvc,ahs ahsvc,aj ,hasvca,h ,hjsvca  ,jhavsc  ,hsvca, s jhscv ,ajsh c as,jcbaljsb.ac asbhcb a,sjhcvah ahsvc.h a.sjcbaj a.kscjba .jksbc;ajsbc a.sjcb cms asjcb ;uo csjcbubsx</Typography>}
                    </Box>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Profile;
