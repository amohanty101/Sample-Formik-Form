import React from "react";
import './App.css';
// TODO: import useFormik from formik library
import{useFormik} from 'formik'

// TODO: add a const called formik assigned to useFormik()
  function App() {
    const formik =useFormik({
      initialValues : {
        name:'',
        email:'',
        password:''
      },
      onSubmit: values =>{
        console.log('form:', values);
        alert("Login Successful");
      },
      validate: values =>{
        let errors = {};
        if(!values.name)errors.name = "Field required";

        if(!values.email) {
          errors.email = "Field required";}
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Username should be an email';
          }

        if(!values.password)errors.password = "Field required";
        return errors;
      }
    });

    return (
      <div>
        {/*
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      */}
        <form onSubmit={formik.handleSubmit}>
          <div id='name'>Name
          <input name='name' type='text' onChange ={formik.handleChange}
          value={formik.values.name}/>
  
          {formik.errors.name ? <div style ={{color:'red'}}>{formik.errors.name}</div>:null}
          </div>
          
          <div>Email
          <input 
          name='email'
           id='emailField' 
           type='text'
            onChange ={formik.handleChange}
          value={formik.values.email}
          />
          {formik.errors.email ? <div style ={{color:'red'}}>{formik.errors.email}</div>:null}
          </div>
          
          <div>Password
          <input 
          name='password'
           id ="pswField" 
           type='text' 
           onChange ={formik.handleChange}
          value={formik.values.password}
          />
          </div>
          <br />

          
          {formik.errors.password ? (<div id ='pswError' style ={{color:'red'}}>
          {formik.errors.password}
          </div>
          ) :null}
            
            
            <button id='submitBtn' type='submit'>Submit</button>
        </form>
        
      </div>
    );
  }
  
    
}

export default App;
