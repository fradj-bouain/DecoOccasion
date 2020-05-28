import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { any, array } from 'prop-types';


/////////////////////////////////////////// Select Option //////////////////////////////

const useStyles2 = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 600,
  },
}));


export  function ControlledOpenSelect({formdata,change,id}) {
  const classes = useStyles2();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
 //console.log(formdata.config.options)
 
  const options = formdata.config.options.map((element, index) =>
    // expression goes here:
    <MenuItem value={element}>   {element} </MenuItem>
  );

  const showError = () =>{
    let errorMessage = null;

    if(formdata.validation && !formdata.valid){

        errorMessage = (
            <div className="" style={{color : "red" , fontSize : "12px"}}>
                {formdata.validationMessage}
            </div>
        )
    }

    return errorMessage;

}
  
  const renderTemplate = () => {
    let formTemplate = null;
    console.log()

    switch(formdata.element){
        case('select'):
        formTemplate = (
            <div style={{margin:"5px" , paddingBottom:"20px" }}>
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onBlur={(event)=> change({event,id,blur:true})}
          value={formdata.value}
          onChange={(event)=> change({event,id}) }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options}      
          
        </Select>
      </FormControl>
                {showError()}
            </div>
        )
    break;

        default:
            formTemplate = null;

    }
    return formTemplate;
}
  return (
    <div>
      
      {renderTemplate()}
  
    
    </div>
  );
}


/////////////////////////////////////////// Text Field //////////////////////////////


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 600,
      margin: theme.spacing(1),
    },
  },
}));



  

export  function ExTextField({formdata,change,id}) {

    const classes = useStyles();

    const showError = () =>{
      let errorMessage = null;

      if(formdata.validation && !formdata.valid){

          errorMessage = (
              <div className="" style={{color : "red" , fontSize : "12px"}}>
                  {formdata.validationMessage}
              </div>
          )
      }

      return errorMessage;

}

    const renderTemplate = () => {
      let formTemplate = null;
      console.log()

      switch(formdata.element){
          case('input'):
          formTemplate = (
              <div style={{margin:"15px"}}>
                 
      <TextField
        id="outlined-secondary"
        variant="outlined"
        color="secondary"
        {...formdata.config}
        value = {formdata.value}
        onBlur={(event)=> change({event,id,blur:true}) }
        onChange={(event)=>change({event,id})} 
        type="text" className="input"
      />

                 {showError()}
              </div>
          )
          break;
          case('select'):
          formTemplate = (
              <div className="formBlock">
                
                  <select
                      value={formdata.value}
                      onBlur={(event)=> change({event,id,blur:true})}
                      onChange={(event)=> change({event,id}) }
                  >
                      <option value="">Select one</option>
                      {
                          formdata.config.options.map(item=>(
                              <option 
                                  key={item.key} 
                                  value={item.key}
                              >
                                  {item.value}
                              </option>
                          ))
                      }
                  </select>
                  {showError()}
              </div>
          )
      break;
          case('textarea'):
          formTemplate = (
              <div  style={{margin:"15px"}}>
                 
                                    <form className={classes.root} >

                  <TextField
        id="outlined-secondary"
        variant="outlined"
        color="secondary"
                      {...formdata.config}
                      value={formdata.value}
                      onBlur={(event)=> change({event,id,blur:true})}
                      onChange={(event)=> change({event,id}) }
                  /></form>
                  {showError()}
              </div>
          )
          break;
          default:
              formTemplate = null;

      }
      return formTemplate;
  }

    return (
      <div>
      {renderTemplate()}
  </div>

  );
}



/////////////////////////////////////////// Input With Icon //////////////////////////////


const useStyles3 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export  function InputWithIcon(props) {
  const classes = useStyles3();

  return (
    <div>
      <FormControl className={classes.margin}>       
       <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label={props.user} />
          </Grid>
        </Grid>
      </div>
      
      </FormControl>
     
    </div>
  );
}