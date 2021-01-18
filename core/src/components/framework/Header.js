import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo_bar from './logo_bar.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  toolbarTitle: {
    flexGrow: 1,
  }
}));


export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <a href="\">
        <img src={logo_bar} alt="Logo" />
        </a>
          <Typography
            variant="h5"
            color="inherit"
            className={classes.toolbarTitle}
          >
            Insight
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
