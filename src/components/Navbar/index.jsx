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
                                <Button to="home">Home</Button>
                                {/* <Button to="about">About</Button> */}
                                <Button to="skills">Skills</Button>
                                <Button to="projects">Projects</Button>
                                <Button primary={true} to="contact">Contact</Button>
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