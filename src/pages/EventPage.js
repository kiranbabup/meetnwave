import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import "./event.css"
import "./argon.css"
import { Box, Button, Typography } from "@mui/material";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BaseComponent from "./BaseComponent";
import withRouter from "./withRouter";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: this.props.params.id,
      userProfileUrl: null,
    };
  }
  
  async componentDidMount() {
    const { eventId } = this.state;
    console.log(eventId);

    try {
      const userDocRef = doc(db, "events", eventId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userIDString = userDocSnap.data().user_id;

        if (userIDString) {
          await this.fetchUserProfile(userIDString);
        }

      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  }

  fetchUserProfile = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userDocRef);

      console.log(userDocSnap.exists());
      console.log(userDocSnap.data());
      if (userDocSnap.exists()) {
        this.setState({ userProfileUrl: userDocSnap.data().profile_url });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };

  renderEvent = (eventData) => {
    console.log(eventData);

    const { userProfileUrl } = this.state;
    console.log(userProfileUrl);

    return (
      <main className="event-page" ref={this.mainRef}>
        <section className="section-profile-cover section-shaped my-0">
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

          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>

        <section className="section">
          <Container>
            <Card className="card-event shadow">
              <div className="px-4">
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    component="img"
                    alt="..."
                    src={eventData.media_url}
                    sx={{ maxWidth: { xs: "300px", md: "400px" }, maxHeight: "300px", }}
                  />
                </Box>
                <Box p={1} />
                <Box sx={{ display: "flex", alignItems: "center", height: "2.5rem" }}>
                  <Box sx={{ width: "20%" }}>
                    <Box
                      component="img"
                      alt="..."
                      src={userProfileUrl ? userProfileUrl : "https://firebasestorage.googleapis.com/v0/b/meeting-app-1b9aa.appspot.com/o/profileicon.png?alt=media&token=b8901d06-c5fa-4185-af07-b9752f3e9548"}
                      sx={{ maxHeight: "2.5rem", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box sx={{ width: "80%" }}></Box>
                </Box>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    );
  }

  render() {
    return (
      <BaseComponent collectionName="events" render={this.renderEvent} params={this.props.params} navigate={this.props.navigate} />
    );
  }
}

export default withRouter(EventPage);
