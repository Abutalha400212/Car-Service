import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Popular from './Popular';
import Service from './Service';
import Team from './Team';

const Home = () => {
    return (
        <div>
<Banner/>
<AboutUs/>
<Service/>
<Popular/>
<Team/>
        </div>
    );
};

export default Home;