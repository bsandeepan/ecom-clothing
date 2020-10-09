import React from 'react';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './signin-up.styles.scss';

const SignInUpPage = () => (
    <section className="sign-in-up-page">
        <SignIn />
        <SignUp />
    </section>
);

export default SignInUpPage;