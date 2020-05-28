import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';
import GridList from '../contain_dashb/GridList';
import GridSide from '../contain_dashb/GridSide';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {auth} from '../../../actions/user_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import {InputWithIcon,ExTextField,ControlledOpenSelect} from '../../Utils/CTextField';
import { any } from 'prop-types';
import {IconLabelButtons} from './Button';

class MyProfile extends Component {

    state ={

        user:{},
       value:''
      }

      


    
         useStyles = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
            paper: {
              padding: theme.spacing(2),
              textAlign: 'center',
              color: theme.palette.text.secondary,
              
              
            },
            
        }));
    
    
    
          componentDidMount(){
            this.props.dispatch(auth()).then(response =>{
              let userData =this.props.user;
              this.setState({user : userData.userData})
              console.log(userData.userData.email)

            });

           
             
          }

     
          
    render() {

        const renderGrids = () =>(
            this.props.products.bySell ?
              this.props.products.bySell.map((grid,i)=>(
                <div style={{    display: "inline-block"
              }}>
                <GridList key={i}
                          grid={grid}/></div>
              ))
              : null
          )


        return (
            <div>
            <UserLayout />
            

            <Grid container spacing={2}>

    <Grid item xs={12}>
      <Paper className={this.useStyles.paper} style={{padding:"20px" ,margin:"20px" ,backgroundColor:"#fff" , width:"800px", float:"right"}}> 
      <PermContactCalendarIcon style={{ marginLeft:"360px" , height:"60px" , width:"60px",color:"#795548"}}/>
      <h1 style={{textAlign:"center"}}>My Profile</h1>
      <p style={{textAlign:"center", marginTop:"50px",marginBottom:"50px"}}>Details of my profile</p>
      <label>Username</label> <InputWithIcon user={this.state.user.username}/>
      <label >Email</label> <InputWithIcon user={this.state.user.email}/>
   <IconLabelButtons/>
      </Paper>
      
    </Grid>
    
  </Grid>
          
  

        </div>
        );
    }
}


export default MyProfile;