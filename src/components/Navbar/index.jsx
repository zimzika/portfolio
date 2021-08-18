import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import {
    Navbar,
    Content,
    Header,
    Logo,
    BtnWrapper,
    Button,
    IconButton
} from './NavbarElements';

const NavbarComponent = ({toggleSidebar, isMobile}) => {
    return (
        <>
            <Navbar>
                <Content>
                    <Header>
                        <Logo>HuhRyan</Logo>
                    </Header>
                    {
                        !isMobile ? (
                            <BtnWrapper>
                                <Button to="home" containerId="homeContainer" smooth={50} offset={-58}>Home</Button>
                                {/* <Button to="about">About</Button> */}
                                <Button to="skills" containerId="homeContainer" offset={58} smooth={50}>Skills</Button>
                                {/* <Button to="projects" containerId="homeContainer" smooth={50}>Projects</Button> */}
                                <Button primary={true} to="contact" offset={58} containerId="homeContainer" smooth={50}>Contact</Button>
                            </BtnWrapper>
                        ) : (
                            <IconButton onClick={toggleSidebar}><MenuIcon/></IconButton>
                        )
                    }
                </Content>
            </Navbar>
        </>
    )
}

export default NavbarComponent;