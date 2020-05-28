import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';
import { getProductDetail, clearProductDetail } from '../../../actions/product_action';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class index extends Component {
    state={
        data : {},
        image : []
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
        const id = this.props.match.params.id;
        console.log(id)
        this.props.dispatch(getProductDetail(id)).then(response=>{
            if(!this.props.products.prodDetail){
                this.props.history.push('/');
            }
            this.setState({data : this.props.products.prodDetail,
                image  : this.props.products.prodDetail.images
                           
            })
        })
    }

    componentWillUnmount(){
       // this.props.dispatch(clearProductDetail())
    }

    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url
        }
    }

    render() {
        return (
            
            <div>
                 <UserLayout/>  
                  
                  {console.log("product",this.state.data)}
                <Grid container spacing={2}>
        <Grid item xs={4} >
          <Paper className={this.useStyles.paper} style={{padding:"10px",height:"600px" , backgroundPosition : 'center',width:"400px" , background:`url(${this.renderCardImage(this.state.image)}) no-repeat`}} >
</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={this.useStyles.paper} style={{padding:"10px"  }}><div style={{fontSize:"35px" , textAlign:"center" , margin:"20px"}}>Plus Détail </div></Paper>
          <Paper className={this.useStyles.paper} style={{padding : "20px"}}> 
              <h3><span style={{color:"green"}}>Nom de Produit : </span> {this.state.data.name}</h3>
              <h3><span style={{color:"green"}}>Description de Produit :</span>  {this.state.data.description}</h3>
              <h3><span style={{color:"green"}}>prix de vendre de Produit :</span>   {this.state.data.sellingPrice} DT</h3>
              <h3><span style={{color:"green"}}>Genre de Produit :   </span>{this.state.data.genre}</h3>
              <h3><span style={{color:"green"}}>Etat de Produit :  </span> {this.state.data.etat}</h3>
              <h3><span style={{color:"green"}}>Color de Produit : </span>  {this.state.data.color}</h3>
             
            <button style={{
            width:"500px",
            height:"50px",
               marginLeft:"200px",
               marginTop:"30px",
               marginBottom:"30px",
               background : "green",   
               color:"#fff"}}>Acheter Maintenant</button>
          </Paper>
        </Grid>
        
      </Grid>
              
      


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(index);;