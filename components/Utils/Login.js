import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {update ,generateData , isFormValid} from './Form/FormAction';
import FormField from './Form/FormField';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';



class Login extends Component {

	state = {
        formError: false,
        formSuccess:false,
        formdata:{
         
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            
        }
    }



        updateForm = (element) =>{
            const newFormdata = update(element,this.state.formdata,'login');
            this.setState({
                formError:false,
                formdata : newFormdata
            })
           
           
    }

    submitForm = (event) =>{
               
        event.preventDefault();
        
        let dataToSumbit = generateData(this.state.formdata,'login');
        let formIsValid = isFormValid(this.state.formdata,'login')
        if(formIsValid){
           this.props.dispatch(loginUser(dataToSumbit)).then(response =>{
               if(response.payload.loginSuccess){
                   console.log(response.payload);
                   this.props.history.push('/user/dashboard')
               }else{
                   this.setState({
                       formError :true
                   })
               }
           })

        }else{
            this.setState({
                formError:true
            })
            
        }

        


    }
  


    render() {
        return (
            <div>
                  <form onSubmit={(event)=>this.submitForm(event)}>
                		<div className="group">
					<label htmlFor="email" className="label">Username</label>
                    <FormField 
                    id={'email'} 
                    formdata={this.state.formdata.email}
                    change={(element)=>this.updateForm(element)} />
				</div>
				<div className="group">
					<label htmlFor="password" className="label">Password</label>
                    <FormField  id={'password'} formdata={this.state.formdata.password}
                    change={(element)=>this.updateForm(element)} /> 
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked />
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
                <div className="group">
					<button  onClick={(event)=>this.submitForm(event)} className="button"  >Sign In</button>
                    {this.state.formError ?
                <div  style={{color :"red" , fontSize:"12px"}}>please check your data</div>
                : null
                     }
                </div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
                </form>
            </div>
        );
    }
}


export default connect()(withRouter(Login));