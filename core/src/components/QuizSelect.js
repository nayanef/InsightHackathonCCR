import React from "react";
import Header from "./framework/Header";
import Footer from "./framework/Footer";
import ConnectApi from "../api/ConnectApi";
import logo from '../logo.png';


// MaterialUI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

export const QuizSelect = () => {
  const classes = useStyles();
  const API_URL = "http://127.0.0.1:8000/quiz/";
  const [dataState] = ConnectApi(API_URL);

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <img width="100%" src={logo} alt="Logo" />
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Estudar não é perder tempo, estudar é investir tempo.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {dataState.data.map((q) => (
            <Grid item key={q.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={q.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h6" color="textPrimary">
                      Testes sobre o tópico
                    </Typography>
                  </div>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      Vamos lá?
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    href={"http://localhost:3000/r/"+q.title}
                  >
                    Começar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer/>
      </Container>
      
    </React.Fragment>
  );
};

export default QuizSelect;
