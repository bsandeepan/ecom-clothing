import React from 'react';

import Directory from '../../components/directory/directory.component';
// import './home.styles.scss';
import {HomePageContainer} from "./home.styles";

const HomePage = () => (
    // <div className='homepage'>
    //     <Directory/>
    // </div>

    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;