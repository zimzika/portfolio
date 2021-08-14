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
                            <SkillDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolores sunt alias facere in nam tempora perferendis laborum voluptatem officia, sint natus inventore quidem vel, excepturi obcaecati unde dolorem deserunt.</SkillDescription>
                        </Skill>
                        <Skill>
                            <SkillIcon>
                                <Img src={webDev} draggable="false" />
                            </SkillIcon>
                            <SkillTitle>Web development</SkillTitle>
                            <SkillDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolores sunt alias facere in nam tempora perferendis laborum voluptatem officia, sint natus inventore quidem vel, excepturi obcaecati unde dolorem deserunt.</SkillDescription>
                        </Skill>
                        <Skill>
                            <SkillIcon>
                                <Img src={engineer} draggable="false" />
                            </SkillIcon>
                            <SkillTitle>Reverse engineer</SkillTitle>
                            <SkillDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam cum enim suscipit, sint reprehenderit ab veniam earum blanditiis deleniti, eius, vel distinctio illo? Doloribus ut perferendis culpa harum nostrum.</SkillDescription>
                        </Skill>
                    </SkillWrapper>
                </Content>
            </Container>
        </>
    )
}

export default SkillsSection;