import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Navbar = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    user-select: none;
    background-color: white;
    // background-color: black ;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px 0 100px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.2);
    min-height: 58px;

    @media screen and (max-width: 900px) {
        padding: 0 50px 0 50px;
    }
`

export const Header = styled.div`

`

export const Logo = styled.h1`
    user-select: none;
`

export const BtnWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
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
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.primary ? "#123a7e" : "#2574FC"};
        color: white;
    }
`

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    outline: 0;
    border: 0;
    padding: 15px 25px;
    margin: 5px;
    background-color: transparent;
    color:rgb(30, 30, 30);
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: transparent;
        color: rgb(10, 10, 10);
    }
`