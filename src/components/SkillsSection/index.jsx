import React from 'react';

import {
    Container,
    Content,
    Header,
    Title,
    SkillWrapper,
    Skill,
    SkillIcon,
    SkillTitle,
    SkillDescription,
    Img
} from './SkillsElements';

import webDev from '../../assets/web_developer.svg';
import webDesign from '../../assets/web_design.svg';
import engineer from '../../assets/engineer.svg';

const SkillsSection = () => {
    return (
        <>
            <Container id="skills">
                <Content>
                    <Header>
                        <Title>My Skills</Title>
                    </Header>
                    <SkillWrapper>
                        <Skill>
                            <SkillIcon>
                                <Img src={webDesign} draggable="false" />
                            </SkillIcon>
                            <SkillTitle>Web design</SkillTitle>
                            <SkillDescription>I'm not very good at design, but I take my own way, I really like the modern look and I can imagine some things, along with my imaginations with some sites that already exist and I can do something good. I intend to study UX/UI Design and start doing more things besides sites.</SkillDescription>
                        </Skill>
                        <Skill>
                            <SkillIcon>
                                <Img src={webDev} draggable="false" />
                            </SkillIcon>
                            <SkillTitle>Web development</SkillTitle>
                            <SkillDescription>I started to like web programming after I learned Javascript. Currently 2 years ago I started building and loving sites, Love building the backend is where everything happens</SkillDescription>
                        </Skill>
                        <Skill>
                            <SkillIcon>
                                <Img src={engineer} draggable="false" />
                            </SkillIcon>
                            <SkillTitle>Reverse engineer</SkillTitle>
                            <SkillDescription>Reverse engineering was what made me focus on software programming for some time, the first time I understood how a program works I was speechless. Understanding how something has been done, seeing how it works is something fantastic, it seems like a movie thing.</SkillDescription>
                        </Skill>
                    </SkillWrapper>
                </Content>
            </Container>
        </>
    )
}

export default SkillsSection;