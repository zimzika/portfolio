import styled from 'styled-components';

import {Link} from 'react-scroll';

export const Content = styled.div`
    margin-top: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;

    @media screen and (max-width: 1400px) {
        margin-top: 80px;
    }

    @media screen and (max-width: 728px) {
        margin-top: 70px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 80px;
    width: 100%;
    // height: 100%;
    max-width: 1400px;

    @media screen and (max-width: 1400px) {
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }
`

export const Header = styled.header`
    // margin-Top: 45px;
    max-width: 600px;
    text-align: center;

    @media screen and (max-width: 1400px) {
        margin-top: 58px;
    }
`

export const Title = styled.h1`
    margin-bottom: 10px;
`

export const Description = styled.span`
    color: rgb(60,60,60);
    font-size: 18px;
`

export const ImageWrapper = styled.div`
    width: 100%;
    user-select: none;
    max-width: 555px;

    // @media screen and (max-width: 1400px) {
    //     width: 30%;
    // }

    // @media screen and (max-width: 900px) {
    //     width: 45%;
    // }

    // @media screen and (max-width: 500px) {
    //     width: 85%;
    // }
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    min-height: 250px;
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const Button = styled(Link)`
    outline: 0;
    border: 0;
    padding: 15px 25px;
    margin: 5px;
    background-color: ${props => props.primary ? "#2574FC" : "transparent"};
    color: ${props => props.primary ? "white" : "#2574FC"};
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    user-select: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.primary ? "#123a7e" : "#2574FC"};
        color: white;
    }
`