import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin: 10vh auto;
    background-color: #033;
    height: 80vh;

    & > hr {
        border: 2px solid #d1d1d1;
    }
`

export const Content = styled.div`
    background-color: #000;
    max-height: 100vh;
    overflow: auto;

    & img {
        width: 200px;
    }
`
export const Menu = styled.div`
    background-color: #fff;
    display: flex;
    color: #000;

    & > p {
        padding: 0px 20px;
    }
    & > p:hover {
        cursor: pointer;
        background-color: #4ba7f350;
    }
`
export const Tittle = styled.div`
    width: 400px;
    display: flex;
`

export const CloseMenu = styled.div`
    width: 100px;
    display: flex;
    align-self: flex-start;
    align-items: center;
    height: 30px;
    margin-left: auto;
    justify-content: space-between;
`
