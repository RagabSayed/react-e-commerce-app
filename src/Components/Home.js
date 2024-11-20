import React from 'react';
import Carsouel from './HomeComp/CarsouelComp/Carsouel';
import DrawerMenu from './HomeComp/DrawerMenu';
import Grid from '@mui/material/Grid2';
import Footer from './Footer';
import Root from './Root';
import TodaySec from './HomeComp/TodaySec';
import Category from './HomeComp/Category';
import BestSelling from './HomeComp/BestSelling';
import EnhanceSec from './HomeComp/EnhanceSec';
import NewArrival from './HomeComp/NewArrival';
import OurServices from './HomeComp/OurServices';
import GoToTop from './GoToTop';
import ExploreProducts from './HomeComp/ExploreProducts';

export default function Home() {
    return (
        <div>
            <Root />
            <GoToTop showIcon={'400px'}/>
            <Grid container sx={{ m: {xs: '0 1%', md: '0 6% 0 1.5%'}}}>
                <Grid size={{xs: 0, md: 4}}>
                    <DrawerMenu />
                </Grid>
                <Grid size={{xs: 12, md: 8}}>
                    <Carsouel />
                </Grid>
            </Grid>
            <TodaySec />
            <hr style={{margin: '60px 5%', opacity: '0.4'}} className="hr-line"/>
            <Category />
            <hr style={{margin: '60px 5%', opacity: '0.4'}} className="hr-line"/>
            <BestSelling />
            <EnhanceSec />
            <ExploreProducts />
            <NewArrival />
            <OurServices />
            <Footer />
        </div>
    )
}
