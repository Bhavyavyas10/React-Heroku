import "./App.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Logo from "./Images/Logo.png";
import AppDeveloper from "./Images/AppDeveloper.jpg";
import Developer from "./Images/Developer.png";
import Graphic from "./Images/Graphic.png";
import UI from "./Images/UI.jpg";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ChatIcon from "@material-ui/icons/Chat";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import Freelance from "./Images/freelance-websites.jpg";
import { SearchOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className="navBody">
        <div>
          <img src={Logo} alt="Kruwork" height="68%" width="30%" />
        </div>
        <div className="navBody1">
          <div className="button1" onClick={() => {}}>
            <div className="text">About Us</div>
          </div>
          <div className="button1">
            <div className="text">Contact</div>
          </div>
          <div className="button1">
            <div className="text">Services</div>
          </div>
          <div className="button1" onClick={() => {}}>
            <div className="text">Pricing</div>
          </div>
          <div className="button">
            <div className="text">LOGIN</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={Freelance}
          alt="Not loaded"
          height="600px"
          width="1800px"
          style={{ opacity: "0.7" }}
        />
        <div
          style={{
            position: "absolute",
            marginTop: "135px",
            marginLeft: "-850px",
          }}
        >
          <div style={{ color: "#f8f8ff", }}>
            <h1>Be and Hire </h1>
          </div>
          <div style={{ marginTop: "-25px", color: "#f8f8ff" , }}>
            <h1>The Best Freelancer </h1>
          </div>
          <div style={{ marginTop: "-10px" , color: "#f8f8ff" }}>
            <h5>Find out the best Freelancer to deliver </h5>
          </div>
          <div style={{ marginTop: "-19px" , color: "#f8f8ff" }}>
            <h5> your Projects</h5>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Our Services</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-30px",
        }}
      >
        <div>
          <h4 style={{ color: "#d3d3d3" }}>
                Monetize Your Creative Ideas With Us and 
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-40px",
            }}
          >
            <h4 style={{ color: "#d3d3d3" }}>Our Community</h4>
          </div>
        </div>
      </div>
      <div className="buttonPanel">
        <div>
          <Carousel
            width="600px"
            dynamicHeight={false}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={false}
          >
            <div className="h-128">
              <img src={AppDeveloper} className="h-small" />
              <p className="legend">App Developer</p>
            </div>
            <div className="h-128">
              <img src={Developer} className="h-full" />
              <p className="legend">Web Developer</p>
            </div>
            <div className="h-128">
              <img src={Graphic} className="h-full" />
              <p className="legend">Graphic Designer</p>
            </div>
            <div className="h-128">
              <img src={UI} className="h-full" />
              <p className="legend">UI Designer</p>
            </div>
          </Carousel>
        </div>
        <div>
          <div>
            <main>
              {/* Hero unit */}

              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: "0px 0 30px 0",
                  }}
                >
                  <Grid xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia>
                          <AddPhotoAlternateIcon style={{ fontSize: 60 }} />
                        </CardMedia>
                      </div>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Browse portfolios
                        </Typography>
                        <Typography>
                          Find professionals you can trust by browsing their
                          samples of previous work and reading their profile
                          reviews.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia>
                          <ChatIcon style={{ fontSize: 60 }} />
                        </CardMedia>
                      </div>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Live chat
                        </Typography>
                        <Typography>
                          You can live chat with your freelancers to get
                          constant updates on the progress of your work.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Grid xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia>
                          <CheckBoxIcon style={{ fontSize: 60 }} />
                        </CardMedia>
                      </div>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Track progress
                        </Typography>
                        <Typography>
                          Keep up-to-date and on-the-go with our time tracker,
                          and mobile app.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia>
                          <HeadsetMicIcon style={{ fontSize: 60 }} />
                        </CardMedia>
                      </div>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          24/7 support
                        </Typography>
                        <Typography>
                          We're always here to help. Our support consists of
                          real people who are available 24/7.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </main>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "180px" }}></div>
      <div className="navBody1">
        <p style={{ margin: "30px 20px" }}>&#169; All rights reserved</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook" area-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter" area-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://myaccount.google.com/">
              <i class="fab fa-google-plus-g" area-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i class="fab fa-linkedin" area-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i class="fab fa-instagram" area-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
