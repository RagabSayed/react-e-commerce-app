import React from 'react';
import Footer from './Footer';
import Root from './Root';
import OurStore from './AboutCompon/OurStore';
import AboutStatistics from './AboutCompon/AboutStatistics';
import OurTeam from './AboutCompon/OurTeam';
import OurServices from './HomeComp/OurServices';

export default function About() {
    
    return (
        <div>
            <Root />
            <OurStore />
            <AboutStatistics />
            <OurTeam />
            <OurServices />
            <Footer />
        </div>
    )
}
