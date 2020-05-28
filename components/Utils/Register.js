import React, { Component } from 'react';
import {update ,generateData , isFormValid} from './Form/FormAction';
import FormField from './Form/FormField';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';
import Dialog  from '@material-ui/core/Dialog';


class Register extends Component {


    
	state = {
        formError: false,
        formSuccess:false,
        formdata:{
            username: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
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
            confirmPassword: {
                element: 'input',
                value: '',
                config:{
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                validation:{
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }



    updateForm = (element) =>{
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError:false,
            formdata : newFormdata
        })
       
       
}



submitForm = (event) =>{
               
    event.preventDefault();
    
    let dataToSumbit = generateData(this.state.formdata,'register');
    let formIsValid = isFormValid(this.state.formdata,'register');
    if(formIsValid){
        
        this.props.dispatch(registerUser(dataToSumbit)).then(
            response => {
                if(response.payload.success){
                    this.setState({
                        formError : false,
                        formSuccess :true
                    });
                    setTimeout(()=>{
                        this.props.history.push('/register_login');
                    },3000)
                }else{
                    this.setState({formError: true})
                }

            }).catch(e =>{
                this.setState({formError: true})
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
					<label htmlFor="username" className="label">Username</label>
					<FormField  id={'username'} formdata={this.state.formdata.username}
                    change={(element)=>this.updateForm(element)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<FormField  id={'password'} formdata={this.state.formdata.password}
                    change={(element)=>this.updateForm(element)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Repeat Password</label>
					<FormField 
                    id={'confirmPassword'} 
                    formdata={this.state.formdata.confirmPassword}
                    change={(element)=>this.updateForm(element)} />
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Email Address</label>
					<FormField 
                    id={'email'} 
                    formdata={this.state.formdata.email}
                    change={(element)=>this.updateForm(element)} />
				</div>
				<div className="group">
					<input type="submit"   onClick={(event)=>this.submitForm(event)} className="button" value="Sign Up" />
                
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div>
                </form>
                        
                <Dialog open={this.state.formSuccess}   >
                    <div className="dialog_alert">
                           <div>Congratulations !!</div>
                           <div>
                               You will be redirected to the LOGIN in a couple seconds...
                           </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default connect() (withRouter(Register));