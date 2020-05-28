import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import Layout from './hoc/layout';
import Auth from './hoc/auth';
import App from './App';
import UserDashboard from './components/user';
import sell from './components/user/sell';
import MyOrder from './components/user/Myorder';
import MyProfile from './components/user/Myprofile';
import MyFurniture from './components/user/Myfurniture';
import Product from './components/user/Product';


const Routes = () => {
  return(
    //<Layout>
    
      <Switch>
        <Route path="/user/sell"   component={Auth(sell,true)}/> 
         <Route path="/user/dashboard"   component={Auth(UserDashboard,true)}/>
         <Route path="/user/product/:id"   component={Auth(Product,true)}/>
         <Route path="/user/my_profile"   component={Auth(MyProfile,true)}/>
         <Route path="/user/my_furniture"   component={Auth(MyFurniture,true)}/>
         <Route path="/user/my_order"   component={Auth(MyOrder,true)}/>
         <Route path="/user/my_banking_information"   component={Auth(UserDashboard,true)}/>
         <Route path="/user/contact_us"   component={Auth(UserDashboard,true)}/>
         <Route path="/" exact   component={Auth(App,false)}/>
      </Switch>      
 //</Layout>
 
  )
}

export default Routes;