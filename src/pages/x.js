import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import "./argon.css"
import { Box, Button, Typography } from "@mui/material";
import fbgif from "../images/gifs/facebook-icon.gif";
import instagif from "../images/gifs/Instagram-icon.gif";
import linkgif from "../images/gifs/Linkedin-icon.gif";
// import phgif from "../images/gifs/Phone-icon.gif";
import txgif from "../images/gifs/Twitter-icon.gif";
import webgif from "../images/gifs/Web-icon.gif";
import wtsgif from "../images/gifs/Wtsapp-icon.gif";
import utgif from "../images/gifs/Youtube-icon.gif";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
// import { useParams, useNavigate } from 'react-router-dom';
import withRouter from './withRouter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PhoneLinked from "../components/shortComponents/PhoneLink";

class ProfileId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAbout: false,
      isCat: false,
      user: null,
      codeData: "Loading... Please wait...",
    };
    this.mainRef = React.createRef();
  }

  async componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;

    const { id } = this.props.params;

    if (id) {
      const userRef = doc(db, "users", id);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        this.setState({ user: userSnap.data() });
      } else {
        // console.log("No such user!");
        // this.setState({ codeData: "Sorry, Access Denied." });
        this.props.navigate("/404");
      }
    }
  }

  calculateAge(dob) {
    if (!dob) {
      return " ";
    }
    const [day, month, year] = dob.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  toggleAbout = () => {
    this.setState({ isAbout: !this.state.isAbout });
  }

  toggleCat = () => {
    this.setState({ isCat: !this.state.isCat });
  }

  render() {
    const { user } = this.state;
    // console.log(user);
    if (!user) {
      return <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "99vh" }}
      >
        <Typography>{this.state.codeData}</Typography>
      </Box>;
    }

    // const age = this.calculateAge(user.dob);

    const socialLinks = user.social_media_links || {};

    return (
      <>
        <main className="profile-page" ref={this.mainRef}>
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
                    {/* <Col className="order-lg-2 order-1 d-flex justify-content-center" lg="3"> */}
                    <Box sx={{ position: "relative" }}>

                      <Box sx={{
                        borderRadius: "50% !important",
                        border: "3px solid silver !important",
                        width: "180px",
                        height: "180px",
                        position: "absolute",
                        overflow: "hidden",
                        transition: "all 0.15s ease",
                        transform: "translate(-50%, -30%)",
                        '&:hover': {
                          transform: "translate(-50%, -33%)"
                        }
                      }} >
                        <Box
                          component="img"
                          alt="..."
                          src={user.profile_url}
                          sx={{
                            maxWidth: "180px",
                          }}
                        />
                      </Box>
                    </Box>
                    {/* </Col> */}
                    {/* <Col
                      className="order-lg-3 order-2 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions card-profile-stats">
                        <div >
                          <span className="heading">{user.followers ? user.followers.length : 0}</span>
                          <span className="description">Followers</span>
                        </div>
                      </div>
                    </Col>
                    <Col className="order-lg-1 order-2" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">{user.following ? user.following.length : 0}</span>
                          <span className="description">Following</span>
                        </div>
                      </div>
                    </Col> */}
                  </Row>
                  <Box p={6} />
                  <div className="text-center mt-4">
                    {user.name && <h3>
                      {user.name.trim()}
                      {/* <span className="font-weight-light">, {age}</span> */}
                    </h3>}
                    {user.city && <div className="h6 font-weight-300">
                      {user.city.trim()}, {user.state && user.state}
                    </div>}
                    {user.designation && <div className="h6">
                      {user.designation.trim()}, {user.working_at && user.working_at}
                    </div>}
                    <div>
                      {user.education && (user.education.university_name && user.education.university_name)}
                    </div>
                  </div>

                  <div className="mt-3 py-2 border-top text-center">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: { xs: "1rem", md: "2rem" }, flexWrap: "wrap" }}>
                      {user.phone_number !== 0 && user.phone_number &&
                        // <a href={`tel:${user.phone_number}`}>
                        //   <Box component="img"
                        //     src={phgif}
                        //     sx={{
                        //       width: 50,
                        //       height: 50,
                        //       objectFit: 'cover'
                        //     }}
                        //     // onClick={() => window.open(`tel:${user.phone_number}`)}
                        //   />
                        // </a>
                        <PhoneLinked phoneNumber={user.phone_number} />
                        }
                      {user.phone_number !== 0 && user.phone_number &&
                        <a href={`https://wa.me/${user.phone_number}`}>
                        <Box component="img"
                          src={wtsgif}
                          sx={{
                            width: 50,
                            height: 50,
                            objectFit: 'cover'
                          }}
                          // onClick={() => window.open(`https://wa.me/${user.phone_number}`)}
                        />
                        </a>}
                      {socialLinks.twitter_url && (
                        <Box component="img"
                          src={txgif}
                          sx={{ width: 50, height: 50, objectFit: 'cover', cursor: 'pointer' }}
                          onClick={() => window.open(socialLinks.twitter_url, "_blank")}
                        />
                      )}
                      {socialLinks.insta_url && (
                        <Box component="img"
                          src={instagif}
                          sx={{ width: 50, height: 50, objectFit: 'cover', cursor: 'pointer' }}
                          onClick={() => window.open(socialLinks.insta_url, "_blank")}
                        />
                      )}
                      {socialLinks.linkedin_url && (
                        <Box component="img"
                          src={linkgif}
                          sx={{ width: 50, height: 50, objectFit: 'cover', cursor: 'pointer' }}
                          onClick={() => window.open(socialLinks.linkedin_url, "_blank")}
                        />
                      )}
                      {socialLinks.fb_url && (
                        <Box component="img"
                          src={fbgif}
                          sx={{ width: 50, height: 50, objectFit: 'cover', cursor: 'pointer' }}
                          onClick={() => window.open(socialLinks.fb_url, "_blank")}
                        />
                      )}
                      {socialLinks.website_url && (
                        <Box component="img"
                          src={webgif}
                          sx={{ width: 50, height: 50, objectFit: 'cover', cursor: 'pointer' }}
                          onClick={() => window.open(socialLinks.website_url, "_blank")}
                        />
                      )}
                      {socialLinks.yt_url && (
                        <Box component="img"
                          src={utgif}
                          sx={{ width: 50, height: 50, objectFit: 'cover', cursor: 'pointer' }}
                          onClick={() => window.open(socialLinks.yt_url, "_blank")}
                        />
                      )}
                    </Box>
                  </div>

                  <div className="mt-2 py-2 border-top text-center">
                    <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", textAlign: "center" }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>About Me</Typography>
                      {user.about ? <Typography sx={{ pl: 2 }}>{user.about}</Typography>
                        :
                        "Ask Me to know More about Me."}
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", textAlign: "center" }}>
                      <Button variant="contained" color="info" onClick={this.toggleAbout} >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          <span style={{ margin: '0 auto' }}>About Me</span>
                          {this.state.isAbout ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </Box></Button>
                      <Box p={1} />
                      {this.state.isAbout && <>{user.about ? <Typography sx={{ textIndent: "2rem", textAlign: "start" }}>{user.about}</Typography>
                        :
                        "Ask Me to know More about Me."}</>}
                    </Box>
                    <Box p={1} />

                    <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", }}>
                      <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>Catalogue</Typography>
                      {user.catalouge_urls ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                        {user.catalouge_urls.map((c, i) => {
                          return (
                            <Box
                              component="img"
                              key={i}
                              alt="..."
                              src={c}
                              sx={{ width: "200px", }}
                            />
                          )
                        })}
                      </Box> : <Typography textAlign="center">No Catalogue's available</Typography>}
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", }}>
                      <Button variant="contained" color="info" onClick={this.toggleCat} >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          <span style={{ margin: '0 auto' }}>Catalogue</span>
                          {this.state.isCat ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </Box>
                      </Button>
                      <Box p={1} />
                      {this.state.isCat && <>{user.catalouge_urls ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        {user.catalouge_urls.map((c, i) => {
                          return (
                            <Box
                              component="img"
                              key={i}
                              alt="..."
                              src={c}
                              sx={{ width: "120px", }}
                            />
                          )
                        })}
                      </Box> : <Typography textAlign="center">No Catalogue's available</Typography>}</>}
                    </Box>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main >
      </>
    );
  }
}

// export default (props) => {
//   const params = useParams();
//   return <ProfileId {...props} match={{ params }} />;
// };
// export default withRouter(ProfileId); 