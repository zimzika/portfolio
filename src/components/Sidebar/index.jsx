import React from 'react';

import CloseIcon from '@material-ui/icons/Close';

import {
    Navbar,
    Close,
    Logo,
    Header,
    SidebarWrapper,
    SidebarItems,
    Item
} from './SidebarElements';

const Sidebar = ({toggleSidebar}) => {
    return (
        <>
            <Navbar>
                <Close onClick={toggleSidebar}><CloseIcon/></Close>
                <Header>
                    <Logo>HuhRyan</Logo>
                </Header>
                <SidebarWrapper>
                    <SidebarItems>
                        <Item onClick={toggleSidebar} to="home">Home</Item>
                        {/* <Item onClick={toggleSidebar} to="about">About</Item> */}
                        <Item onClick={toggleSidebar} to="skills">Skills</Item>
                        <Item onClick={toggleSidebar} to="projects">Projects</Item>
                        <Item onClick={toggleSidebar} to="contact" primary>Contact</Item>
                    </SidebarItems>
                </SidebarWrapper>
            </Navbar>
        </>
    )
}

export default Sidebar;