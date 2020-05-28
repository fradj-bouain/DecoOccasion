import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/LibraryAdd';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import { connect } from 'react-redux';

import FileUpload from '../../Utils/Form/fileupload';
import MyButton from '../../Utils/MyButton'
 import {ExTextField,ControlledOpenSelect} from '../../Utils/CTextField';
 import { update, generateData, isFormValid, populateOptionFields,resetFields} from '../../Utils/Form/FormAction';
 import { addProduct, clearProduct } from '../../../actions/product_action';

 
 

class index extends Component {

   

    state ={

        user:{},
      

        formError:false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    label: 'Ex: Bed,Sofa,Table,Chaise....',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            description: {
                element: 'textarea',
                value: '',
                config:{
                    label: 'Ex: I sell this bed model zara has it color red ....',
                    name: 'description_input',
                    type: 'text',
                    placeholder: 'Enter your description'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            sellingPrice : {
              element: 'input',
              value: '',
              config:{
                  label: 'Selling Price obligatory',
                  name: 'price_input',
                  type: 'number',
                  placeholder: 'Enter your price'
              },
              validation:{
                  required: true
              },
              valid: false,
              touched: false,
              validationMessage:'',
              showlabel: true
          }, 
          originalPrice : {
            element: 'input',
            value: '',
            config:{
                label: 'Product price',
                name: 'price_input',
                type: 'number',
                placeholder: 'Enter your price'
            },
            validation:{
                required: true
            },
            valid: false,
            touched: false,
            validationMessage:'',
            showlabel: true
            },
          genre: {
                element: 'select',
                value: '',
                config:{
                    label: 'Product category',
                    name: 'genre_input',
                    options:["room","kitchen","bathroom","garden"]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            etat: {
                element: 'select',
                value: '',
                config:{
                    label: 'state',
                    name: 'etat_input',
                    options:["good","very good", "not bad","bad" ]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            color: {
                element: 'select',
                value: '',
                config:{
                    label: 'color, in stock',
                    name: 'color_input',
                    options:["red","green","yellow","pink","white","blue" ]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            phone:  {
              element: 'input',
              value: '',
              config:{
                  label: '216+....',
                  name: 'phone_input',
                  type: 'number',
                  placeholder: 'Enter your phone'
              },
              validation:{
                  required: true
              },
              valid: false,
              touched: false,
              validationMessage:'',
              showlabel: true
          },
            email: {
              element: 'input',
              value: '',
              config:{
                  label: 'Ex: prenom@gmail.com',
                  name: 'email_input',
                  type: 'email',
                  placeholder: 'Enter your email'
              },
              validation:{
                  required: true
              },
              valid: false,
              touched: false,
              validationMessage:'',
              showlabel: true
          },
            adress : {
              element: 'input',
              value: '',
              config:{
                  label: 'Ex: Number of street / avenu...',
                  name: 'adress_input',
                  type: 'text',
                  placeholder: 'Enter your adress'
              },
              validation:{
                  required: true
              },
              valid: false,
              touched: false,
              validationMessage:'',
              showlabel: true
          },
          addressSupplement : {
            element: 'input',
            value: '',
            config:{
                label: 'Ex: Next to / behind /  ....',
                name: 'adressSup_input',
                type: 'text',
                placeholder: 'Enter your Address Supplement '
            },
            validation:{
                required: true
            },
            valid: false,
            touched: false,
            validationMessage:'',
            showlabel: true
        },
        postalCode : {
          element: 'input',
          value: '',
          config:{
              label: 'Ex: 4022',
              name: 'postal_input',
              type: 'number',
              placeholder: 'Enter your code postal'
          },
          validation:{
              required: true
          },
          valid: false,
          touched: false,
          validationMessage:'',
          showlabel: true
      },
      city : {
        element: 'select',
        value: '',
        config:{
            label: 'sfax, tunis,jerba',
            name: 'city_input',
            options:["soussa","tunis","gafsa","bizert"]
        },
        validation:{
            required: true
        },
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
            images:{
                value:[],
                validation:{
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage:'',
                showlabel: false
            }
        }
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

        updateForm = (element) => {
            const newFormdata = update(element,this.state.formdata,'products');
            this.setState({
                formError: false,
                formdata: newFormdata
            })
        }

        resetFieldHandler = () => {
            const newFormData = resetFields(this.state.formdata,'products');
    
            this.setState({
                formdata: newFormData,
                formSuccess:true
            });
            setTimeout(()=>{
                this.setState({
                    formSuccess: false
                },()=>{
                    this.props.dispatch(clearProduct())
                })
            },3000)
        }
    
        submitForm= (event) =>{
            event.preventDefault();
            
            let dataToSubmit = generateData(this.state.formdata,'products');
            let formIsValid = isFormValid(this.state.formdata,'products')
             console.log("data",dataToSubmit)
            if(formIsValid){
                this.props.dispatch(addProduct(dataToSubmit)).then(()=>{
                   
                    if( this.props.products.addProduct.Success){
                        this.resetFieldHandler(); console.log("result",this.resetFieldHandler())
                    }else{
                        this.setState({formError: true})
                    }
                })
            } else {
                this.setState({
                    formError: true
                })
            }
        }


        imagesHandler = (images) => {
            const newFormData = {
                ...this.state.formdata
            }
            newFormData['images'].value = images;
            newFormData['images'].valid = true;
    
            this.setState({
                formdata:  newFormData
            })
        }
         

    render() {
        return (
            <div>
                <UserLayout/>   
           <Grid container spacing={3}>
        <Grid item xs={8} style={{marginLeft:"15%" }}>
          <Paper className={this.useStyles.paper} style={{padding:"20px" }}>
              <h1 style={{textAlign:"center" , padding:"20px"}}>      <AddIcon style={{marginRight:"20px" }} />
              I sell an article !</h1>
              <p style={{textAlign:"center"}}>You can sell everything you give to a friend or cousin without being embarrassed.
                    Then take beautiful pictures, fill this form precisely and voila!</p>

      <form noValidate autoComplete="off" onSubmit={(event)=> this.submitForm(event)}>
                                    

          <Paper className={this.useStyles.paper} style={{padding:"20px" ,margin:"20px",backgroundColor:"#bdbdbd"}}>
                <h1><AddAPhotoIcon style={{color:"#795548" , height : "40px" , width : "40px" }} /> Take 5 Photo !</h1>
                <FileUpload
                            imagesHandler={(images)=> this.imagesHandler(images)}
                            reset={this.state.formSuccess}
                        />
          </Paper>

          <Paper className={this.useStyles.paper} style={{padding:"20px" ,margin:"20px" ,backgroundColor:"#bdbdbd"}}>
                <h1><BorderColorIcon style={{color:"#795548" , height : "40px" , width : "40px" }} /> Write Your Article !</h1>
              
               <label >Object Sell</label> <ExTextField  id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element) => this.updateForm(element)}
                            />
               <label >Description</label> <ExTextField  id={'description'}
                            formdata={this.state.formdata.description}
                            change={(element) => this.updateForm(element)}
                            />
               <label>Category</label> <ControlledOpenSelect   id={'genre'}
                            formdata={this.state.formdata.genre}
                            change={(element) => this.updateForm(element)} />
               <label>State</label><ControlledOpenSelect   id={'etat'}
                            formdata={this.state.formdata.etat}
                            change={(element) => this.updateForm(element)} />
               <label>Color</label> <ControlledOpenSelect   id={'color'}
                            formdata={this.state.formdata.color}
                            change={(element) => this.updateForm(element)} />
               
          </Paper>{console.log(this.state.formdata)}


    <Paper className={this.useStyles.paper} style={{padding:"20px" ,margin:"20px" ,backgroundColor:"#bdbdbd"}}>
                <h1><LocalAtmIcon style={{color:"#795548" , height : "40px" , width : "40px" }} /> Fixed Your Price !</h1>
                <label>Selling price</label> <ExTextField  id={'sellingPrice'}
                            formdata={this.state.formdata.sellingPrice}
                            change={(element) => this.updateForm(element)}
                            />
                <label>Original price</label> <ExTextField  id={'originalPrice'}
                            formdata={this.state.formdata.originalPrice}
                            change={(element) => this.updateForm(element)}
                            />
          </Paper>


          <Paper className={this.useStyles.paper} style={{padding:"20px" ,margin:"20px" ,backgroundColor:"#bdbdbd"}}>
                <h1><PersonPinIcon style={{color:"#795548" , height : "40px" , width : "40px" }} /> Information For Contact !</h1>
                <label>Phone</label>  <ExTextField  id={'phone'}
                            formdata={this.state.formdata.phone}
                            change={(element) => this.updateForm(element)}
                           />
                <label>Email</label>  <ExTextField  id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}
                            />
                <label>Adress</label>  <ExTextField  id={'adress'}
                            formdata={this.state.formdata.adress}
                            change={(element) => this.updateForm(element)}
                            />
                <label>Address supplement</label>  <ExTextField  id={'addressSupplement'}
                            formdata={this.state.formdata.addressSupplement}
                            change={(element) => this.updateForm(element)}
                            />
                <label>Postal code</label>  <ExTextField  id={'postalCode'}
                            formdata={this.state.formdata.postalCode}
                            change={(element) => this.updateForm(element)}
                            />
                <label>City</label>  <ControlledOpenSelect  id={'city'}
                            formdata={this.state.formdata.city}
                            change={(element) => this.updateForm(element)}/>
          </Paper>
    

          <button    style={{
            width:"500px",
            height:"50px",
               marginLeft:"200px",
               marginTop:"30px",
               marginBottom:"30px",
               background : "green",   
               color:"#fff"
           }} onClick={(event) => this.submitForm(event)} >SELL </button>
           </form>

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

export default  connect(mapStateToProps)(index);