import React, { Component } from 'react';
import UserLayout from '../../hoc/user';
import GridList from './contain_dashb/GridList';
import GridSide from './contain_dashb/GridSide';
import img    from '../../resources/grid-list/bike.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {auth} from '../../actions/user_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProductsBySell} from '../../actions/product_action'




class UserDashboard extends Component {

  state ={

    user:{}
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
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(auth()).then(response =>{
          let userData =this.props.user;
          this.setState({user : userData})
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
        <Grid item xs={4} >
          <Paper className={this.useStyles.paper} style={{padding:"80px"}}> <GridSide user ={this.state.user} /></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={this.useStyles.paper} style={{padding:"10px"  }}> { renderGrids()}</Paper>
          
        </Grid>
        
      </Grid>
              
      

            </div>

        );
    }
}

const mapStateToProps =(state) =>{
 
  return {
   
    products : state.products,
    user : state.user.userData
  }
 
}

export default connect(mapStateToProps)(withRouter(UserDashboard));