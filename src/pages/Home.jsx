import { CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home_container">
        <Grid container>
          <Grid item xs={12} sm={6} md={4} p={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  News
                </Typography>
                <p>Latest informations</p>
                <Link to="/news">
                  <Button variant="contained">See more</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} p={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardContent className="card_container">
                <Typography gutterBottom variant="h4" component="div">
                  Team
                </Typography>
                <p>Latest informations</p>
                <Link to="/team">
                  <Button variant="contained">Team info</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6} p={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardContent className="card_container">
                <Typography gutterBottom variant="h4" component="div">
                  Matches
                </Typography>
                <p>Latest informations</p>
                <Link to="/matches">
                  <Button variant="contained">See more</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6} p={2}>
            <Card sx={{ borderRadius: 5 }}>
              <CardContent className="card_container">
                <Typography gutterBottom variant="h4" component="div">
                  Matches
                </Typography>
                <p>Latest informations</p>
                <Link to="/matches">
                  <Button variant="contained">See more</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
