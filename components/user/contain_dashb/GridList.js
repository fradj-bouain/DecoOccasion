import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import profile from '../../../resources/grid-list/profile.jpg';
import img2 from '../../../resources/grid-list/camera.jpg';
import Link from '@material-ui/core/Link';


import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProductsBySell , getProductsByArrival} from '../../../actions/product_action';


const useStyles = makeStyles({
  card: {
    maxWidth: 220,
    maxHeight:270,
    minWidth:220,
    minHeight:270,
    margin: 5,
    

    
    
  },
  media: {
    height: 100,
  },

  
});





const MediaCard =(props)=> {
  const classes = useStyles();
  
  const renderCardImage=(images)=>{
    if(images.length > 0){
        return images[0].url
    } 
  }

  return ( 
  <Link href={`/user/product/${props.grid._id}`}    style={{  textDecoration: 'none'}} >
 
    <Card className={classes.card}  style={{background:`url(${renderCardImage(props.grid.images) })`, backgroundSize: ' 150px'  , backgroundPosition : 'center',  backgroundRepeat:'no-repeat' ,  borderRadius: '25px',}}>
       <CardContent style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
          <Typography gutterBottom variant="h5" component="h2" className="gl-Typography" style={{fontSize:"15px" , fontWeight:"bold"}} >
            {props.grid.name}
            <IconButton aria-label={`info about`}  >
                  <FavoriteBorderIcon />
                </IconButton>
          </Typography>
{console.log("shop",props)}
          
        </CardContent>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          title="Contemplative Reptile"
        />
       
      </CardActionArea>
      <CardActions style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
   
        <Button size="small" color="primary">
      
                  <img src={profile} className="gl-img" />
                
        </Button>

        <Typography gutterBottom variant="h5" component="h2" className="gl-Typography" >
            {props.grid.sellingPrice } DT
          </Typography>
        
      </CardActions>
    </Card>
    </Link>
  );
}





export default MediaCard ;