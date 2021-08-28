import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Navbar = styled.nav`
    display: flex;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(35, 35, 35);
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
`

export const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
`

export const Header = styled.div`
    margin-bottom: 45px;
`

export const Logo = styled.h1`
    font-size: 40px;
    user-select: none;
`

export const SidebarWrapper = styled.div`

`

export const SidebarItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`

export const Item = styled(Link)`
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
    text-align: center;

    &:hover {
        background-color: ${props => props.primary ? "#123a7e" : "#2574FC"};
        color: white;
    }
`