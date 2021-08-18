import React from 'react';

import {
    Content,
    Container,
    Header,
    Title,
    Description,
    ImageWrapper,
    Image,
    BtnWrapper,
    Button,
} from './HeroSectionElements';

import portfolioImg from '../../assets/portfolio_img.svg';

const HeroSection = () => {
    return (
        <>
            <Content id="home">
                <Container>
                    <Header>
                        <Title>Hello 👋, I'am <span style={{color: '#2574FC'}}>Ryan</span></Title>
                        <Description>Hello, my name is <span style={{color: '#2574FC'}}>Ryan</span>, I am currently 14 years old, I started programming with 12, learning first Javascript and that's how my passion for programming and Javascript began, today I master frontend and backend (Nodejs), I've mechi with PHP and other languages, my favorite is JS</Description>
                        <BtnWrapper>
                            <Button to="contact" primary containerId="homeContainer" smooth={50} offset={58}>Contact Me</Button>
                        </BtnWrapper>
                    </Header>
                    <ImageWrapper>
                        <Image src={portfolioImg} draggable="false" />
                    </ImageWrapper>
                </Container>
            </Content>
        </>
    )
}

export default HeroSection;