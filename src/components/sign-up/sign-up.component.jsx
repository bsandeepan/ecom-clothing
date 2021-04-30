import React, {useState} from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';


const SignUp = ({ signUpStart }) => {
    const initialCredentials = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [userCredentials, setCredentials] = useState(initialCredentials);
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match. Check again.");
            return;
        }
        signUpStart(email, password, displayName);
        // clear credential fields
        setCredentials(initialCredentials);
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]:value });
    }

    return (
        <div className="sign-up">
            <h2 className="title">New to our store?</h2>
            <span>Sign up with your details today!</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' label='Display Name' 
                    value={displayName} 
                    onChange={handleChange} 
                required />
                <FormInput type='email' name='email' label='Email' 
                    value={email} 
                    onChange={handleChange} 
                required />
                <FormInput type='password' name='password' label='Password' 
                    value={password} 
                    onChange={handleChange} 
                required />
                <FormInput type='password' name='confirmPassword' label='Confirm Password' 
                    value={confirmPassword} 
                    onChange={handleChange} 
                required />
                
                <div className="buttons">
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
});

export default connect(null, mapDispatchToProps)(SignUp);