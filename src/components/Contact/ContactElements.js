import styled from 'styled-components';

export const Container = styled.div`
    color: black;
    background: white;
    font-family: "Nunito", sans-serif;
    margin-top: 58px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1205px) {
        margin-top: 360px;
    }

    @media screen and (max-width: 805px) {
        margin-top: 680px;
    }
`

export const Content = styled.div`
    display: flex;
    // z-index: 1;
    height: 650px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    display: flex;
    // z-index: 1;
    align-items: center;
    // justify-content: space-between;
    flex-direction: row;
    border-radius: 4px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.2), 0 0 5px 0 rgba(0,0,0,0.2);
    width: 85%;
    height: 550px;
`

export const ImgWrapper = styled.div`
    height: 100%;
    width: 40%;
    background: #3F3D56;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 805px) {
        display: none;
    }
`

export const Image = styled.div`
    margin: 30px;
    max-width: 300px;
`

export const Img = styled.img`
    width: 100%;
    height: auto;
    min-height: 200px;
`

export const Text = styled.p`
    margin-top: 20px;
    color: white;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    height: 100%;
    width: calc(100% - 40%);
    margin-top: 40px;

    @media screen and (max-width: 805px) {
        width: 100%;
    }
`

export const Header = styled.div`

`

export const Title = styled.h1`
    color: #3F3D56;
`

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5px;

    @media screen and (max-width: 805px) {
        justify-content: center;
    }
`

export const FormInput = styled.input`
    outline: none;
    border: none;
    margin: 10px;
    background-color: #EEF3FA;
    width: 80%;
    padding: 18px;
    border-radius: 2px;
`

export const TextArea = styled.textarea`
    outline: none;
    border: none;
    margin: 10px;
    background-color: #EEF3FA;
    width: 80%;
    padding: 18px;
    border-radius: 2px;
    font-family: "Nunito", sans-serif;
    resize: none;
    height: 120px;
`

export const SendButton = styled.input`
    outline: none;
    border: none;
    width: 65%;
    height: 57px;
    // padding: 20px 130px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #2574FC;
    color: white;
    margin-top: 12px;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #123a7e;
    }
`