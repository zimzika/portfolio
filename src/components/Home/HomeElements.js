import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const Content = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 100%;
    // box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3), 0 0 8px 0 rgba(0, 0, 0, 0.3), 0 0 12px 0 rgba(0, 0, 0, 0.3);
    flex-direction: column;
    overflow: auto;
`