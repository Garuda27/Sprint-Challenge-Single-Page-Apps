import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia'
// import { style } from '@material-ui/system';
import CardContent from '@material-ui/core/CardContent'; 

export default function CharacterCard (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardMedia className={classes.media} image={props.char.image} title=""/>
        <CardContent>
          <h1 className={classes.name}>{props.char.name}</h1>
          <h2 className={classes.status}>{`{$props.char.species} ${props.char.status}`}</h2>
          <p>{`Location- ${props.char.location.name}`}</p>
          <p>{`Origin- ${props.char.origin.name}`}</p>
        </CardContent>

      </CardActionArea>
    </Card>
  )
}

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
  name:{
    margin: 0,
  },
  status: {
    color: 'gray',
    margin: 0,
    padding: 0,
  },
});

