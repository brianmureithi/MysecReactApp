import React, {useState,Component} from 'react';
import Axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";


const emailRegex = RegExp(/^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/);

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length >0 && (valid = false);  
           });

           Object.values(rest).forEach(val => {
             val ===null && (valid=false)
           });
    return valid; 

};



class Login extends Component {
  
   


  
    constructor(props){
    super(props);
this.state=
{
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    formErrors:{
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }
};

}


handleSubmit = e => {
e.preventDefault();


if (formValid(this.state)){
    console.log(`
    --SUBMITTING--
    First Name: ${this.state.firstName}
    Last ame: ${this.state.lastName}
    Email: ${this.state.email}
    Password: ${this.state.password}
    `)
    
  


}
else{
    console.error("Form INVALID - DiSPLAY ERROR MESSAGE");
}
};
 handleChange = e => {
     e.preventDefault();
     const{name,value} = e.target;
     let formErrors = this.state.formErrors;

    
     switch (name){
         case 'firstName':
             formErrors.firstName = value.length<3 ? 
             "minimum 3 characters required" : "";
           
             break;
             case 'lastName':
                formErrors.lastName = value.length<3 ? 
                 "minimum 3 characters required" : "";
                
                 break;
               
                case 'email':
                    formErrors.email = emailRegex.test(value) && value.length>0 ?
                      "valid email address" : "Invalid email address";
                     
                      break;
                    case 'password':
                        formErrors.password = value.length<6 ? 
                        "minimum 6 characters required" : "";
                       
                        break;
                        default:
                            break;
     }

this.setState({formErrors ,[name]:value}, () => console.log(this.state))
 };
render(){
    const {formErrors} = this.state;
    return <div className="wrapper">
        <div className="form-wrapper">
           <h1>Create Account</h1> 
           <form onSubmit={this.handleSubmit} noValidate>
          
            <div className="firstName">
                <label htmlFor="firstName">First Name</label>
               <input 
               className={formErrors.firstName.length>0 ?"error" : null}
               placeholder="First name"
                type="text" 
                name="firstName"
               noValidate 
               onChange={this.handleChange}/> 
               {formErrors.firstName.length>0 &&(
                   <span className="errorMessage">{formErrors.firstName}</span>
               )}
             </div>

             <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
               <input 
               className={formErrors.lastName.length>0 ?"error" : null}
               placeholder="Last name"
                type="text" 
                name="lastName"
               noValidate 
               onChange={this.handleChange}/> 
                {formErrors.lastName.length>0 &&(
                   <span className="errorMessage">{formErrors.lastName}</span>
               )}
             </div>

             <div className="email">
                <label htmlFor="email">Email</label>
               <input 
               className={formErrors.email.length>0 ?"error" : null}
               placeholder="Email"
                type="email" 
                name="email"
               noValidate 
               onChange={this.handleChange}/> 
                {formErrors.email.length>0 &&(
                 <span className={formErrors.email.length<20 ? "validresponse":"errorMessage"}>
                     {formErrors.email}
                     </span>
               )}
             </div>

             <div className="password">
                <label htmlFor="password">Password</label>
               <input 
               className={formErrors.password.length>0 ?"error" : null}
               placeholder="Password"
                type="password" 
                name="password"
               noValidate 
               onChange={this.handleChange}/> 
                {formErrors.password.length>0 &&(
                   <span className="errorMessage">{formErrors.password}</span>
               )}
             </div>
              <div className="createAccount">
                  <button className="submit" type="submit">Create Account</button>
             <small>Already Have an Account?</small>
              </div>
           </form>
        </div>
    </div>
}
}
export default Login;

    {/*const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    function validateForm(){
        return email.length>0 && password.length>0;
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <div className="Login">
            <Form onSubmit ={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg"  controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoFocus
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );*/}

                                                          

