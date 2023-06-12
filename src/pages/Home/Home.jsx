import React from 'react';
import Banner from "./Banner/Banner"
import Classes from './Classes/Classes';
import Instructors from './instructor/Instructors';
const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes />
            <Instructors />
        </div>
    );
};

export default HomePage;