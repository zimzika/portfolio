import React, { useState } from 'react';

import {
    Container,
    Content
} from './HomeElements';
import { useMediaQuery } from '@material-ui/core';

import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';

import HeroSection from '../HeroSection/index';
import SkillSection from '../SkillsSection/index';
import ContactSection from '../Contact/index';

const Home = () => {
    const [openedSidebar, setOpenedSidebar] = useState(false);

    const sidebarToggler = () => {
        setOpenedSidebar(!openedSidebar);
    }

    const isMobile = useMediaQuery('(max-width: 900px)');

    return (
        <>
            <Container>
                <Content id="homeContainer">
                    <Navbar isMobile={isMobile} toggleSidebar={sidebarToggler} />
                    {
                        isMobile && openedSidebar ? <Sidebar toggleSidebar={sidebarToggler} /> : <></>
                    }
                    <HeroSection />
                    <SkillSection />
                    <ContactSection />
                </Content>
            </Container>
        </>
    )
}

export default Home;