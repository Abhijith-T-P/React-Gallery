import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "../Style.css";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function District() {
  return (
    <div>
      <CssBaseline />
      <div className="class.Navbar">
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Gallery</Typography>
          </Toolbar>
        </AppBar>
      </div>

      <main style={{ paddingTop: "64px" }}>
        <div>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" gutterBottom>
              Photo Album
            </Typography>
            <Typography
              variant="subtitle1 "
              color="textSecondary"
              align="center"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              neque ab eos, illum placeat nisi qui dignissimos sint ad? Vitae
              consequuntur porro non aperiam voluptatum quis ex! Corporis, fuga
              obcaecati.
            </Typography>
            <div className="button">
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button variant="outlined">See my photo </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Uplaod photo
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className="cardGrid" maxWidth="lg">
            <Grid container spacing={4}>
              {card.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className="card">
                    <CardMedia
                      className="cardMedia"
                      component="img"
                      src={`https://source.unsplash.com/random/`}
                      alt="Random"
                    />

                    <CardContent className="cardContent">
                      <Typography variant="h5" gutterBottom>
                        Title {card}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure ipsa obcaecati sed illum odio quidem non facilis
                        aliquid dolor deserunt?
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" className="viewButton">
                        Viev
                      </Button>
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default District;
