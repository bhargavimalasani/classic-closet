import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        return(
                <div className='sign-in'>
                    <h2>I Already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            type='email' 
                            name='email' 
                            label='email'
                            handleChange={this.handleChange}
                            value={this.state.email} 
                        required />
                        
                        <FormInput 
                            type='password' 
                            name='password'
                            label='password' 
                            ohandleChange={this.handleChange}
                            value={this.state.password} 
                        required />
                        
                         <CustomButton type="submit">
                            Sign In
                         </CustomButton>
                    </form>

                </div>
        ) ;
    }
}


export default SignIn;