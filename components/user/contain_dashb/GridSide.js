import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MyBotton from '../../Utils/MyButton';
import profile from '../../../resources/grid-list/profile.jpg';
import img from '../../../resources/grid-list/bike.jpg';


const useStyles = makeStyles({
  card: {
    maxWidth: 320,
    margin: 3,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({user}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
        <img src={profile} className="gs-img" />
          <Typography gutterBottom variant="h5" component="h2" className="gs-name">
            Welcome {user.username} !
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
             <MyBotton bck='green'
                       color='#fff'
                       link="/user/sell"
                       text="I sell an articl"/>
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Articls
        </Button>
        <Button size="small" color="primary">
          
        </Button>
      </CardActions>
    </Card>
  );
}