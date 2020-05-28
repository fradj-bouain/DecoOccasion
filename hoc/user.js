import React from 'react';

import AppBar from './AppBar';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { logoutUser} from '../actions/user_actions';




const UserLayout = (props) => {

    return (
        <div>
            <AppBar props = {props}/>
               
        </div>
    );
};

export default connect()(withRouter(UserLayout));