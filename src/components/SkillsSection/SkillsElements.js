import styled from 'styled-components';

export const Container = styled.div`
    color: black;
    background: white;
    font-family: "Nunito", sans-serif;
    margin-top: 58px;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    z-index: 1;
    height: 750px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1204px) {
        margin-top: 180px;
    }

    @media screen and (max-width: 804px) {
        margin-top: 350px;
    }
`

export const Header = styled.div`
    width: 100%;
    text-align: center;
`

export const Title = styled.h1`
    color: #2574FC;
`

export const SkillWrapper = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Skill = styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1), 0 0 6px 0 rgba(0, 0, 0, 0.1), 0 0 12px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    padding: 30px;
    margin: 20px;
    min-width: 300px;
    min-height: 264.797px;
`

export const SkillIcon = styled.div`
    width: 100%;
    max-width: 120px;
`

export const Img = styled.img`
    width: 100%;
    height: auto;
    min-height: 60px;
`

export const SkillTitle = styled.h1`
    color: #2574FC;
    font-size: 25px;
    margin-bottom: 10px;
`

export const SkillDescription = styled.p`
    text-align: center;
    font-size: 15px;
`