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
                        <Item onClick={toggleSidebar} smooth={50} to="home" containerId="homeContainer" offset={-500}>Home</Item>
                        {/* <Item onClick={toggleSidebar} to="about">About</Item> */}
                        <Item onClick={toggleSidebar} smooth={50} to="skills" containerId="homeContainer">Skills</Item>
                        <Item onClick={toggleSidebar} smooth={50} to="projects" containerId="homeContainer">Projects</Item>
                        <Item onClick={toggleSidebar} smooth={50} to="contact" containerId="homeContainer" primary>Contact</Item>
                    </SidebarItems>
                </SidebarWrapper>
            </Navbar>
        </>
    )
}

export default Sidebar;