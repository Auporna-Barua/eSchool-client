import React from 'react';
import Banner from "./Banner/Banner"
import Classes from './Classes/Classes';
import Instructors from './instructor/Instructors';
import Faq from './FAQ/Faq';
const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes />
            <Instructors />
            <Faq />
        </div>
    );
};

export default HomePage;