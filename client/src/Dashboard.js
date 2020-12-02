import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: 250,
  },
  dashButtonY: {
    width: 200,
    height: 150,
    backgroundColor: "#FF0000",
    color: '#ffffff',
    "&:hover": {
      color: '#FF0000', 
    },
  },
  dashButtonT: {
    width: 200,
    height: 150,
    backgroundColor:'#00acee',
    color: '#ffffff',
    "&:hover": {
      color: '#00acee', 
    },
  },
  texthead: {
    marginBottom: 25,
  },
  text: {
    display: 'flex',
    "& > *": {
    margin: theme.spacing(1)
    },
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    height: 350
  },
  youtubecard: {
    backgroundColor: '#FDD3D3'
  },
  twittercard: {
    backgroundColor: '#BCC7D9'
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const history = useHistory();

  const handleYoutubeClick = () => {
    history.push("/youtube");
  };

  const handleTwitterClick = () => {
    history.push("/twitter");
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.dashButtonY}
        variant="contained"
        onClick={handleYoutubeClick}
      >
        <h3>Youtube</h3>
      </Button>
      <Button
        className={classes.dashButtonT}
        variant="contained"
        onClick={handleTwitterClick}
      >
        <h3>Twitter</h3>
      </Button>
      <div className={classes.text}>
      <Card className={classes.youtubecard}>
        <CardContent className={classes.youtubefacts}>
          <Typography component="h2" className={classes.texthead}>
            <h4>Youtube</h4>
          </Typography>
          <ul>
            <li><h4>sample text</h4></li>
            <li><h4>sample text sample text sample text</h4></li>
          </ul>
        </CardContent>
        </Card >
        <Card className={classes.twittercard}>
        <CardContent className={classes.twitterfacts}>
          <Typography component="h2" className={classes.texthead}>
            <h4>Twitter</h4>
          </Typography>
          <ul>
            <li><h4>sample text sample text sample text </h4></li>
            <li><h4>sample text</h4></li>
          </ul>
        </CardContent>
      </Card>
      </div>
</div>
  );
}
