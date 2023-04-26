import styled from 'styled-components'
interface VolumenProps {
    volume: number
}

export const Container = styled.div`
    width: 80%;
    min-width: 400px;
    margin: 10vh auto;
    height: 80vh;
    & > hr {
        border: 2px solid #d1d1d1;
    }
    & img {
        width: 40%;
    }
`

export const Control = styled.div`
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        height: 100%;
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .progress {
            width: 70%;
        }
    }

    & > p {
        text-align: center;
        width: 25%;
    }
`
export const Volumen = styled.div<VolumenProps>`
    background: rgb(100, 100, 107);
    background: -moz-linear-gradient(
        90deg,
        rgba(100, 100, 107, 1) 0%,
        rgba(107, 162, 113, 1) 13%,
        rgba(59, 140, 40, 1) 91%,
        rgba(255, 142, 13, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(100, 100, 107, 1) 0%,
        rgba(107, 162, 113, 1) 13%,
        rgba(59, 140, 40, 1) 91%,
        rgba(255, 142, 13, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(100, 100, 107, 1) 0%,
        rgba(107, 162, 113, 1) 13%,
        rgba(59, 140, 40, 1) 91%,
        rgba(255, 142, 13, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#64646b",endColorstr="#ff8e0d",GradientType=1);
    display: flex;
    align-items: end;
    height: 60px;
    width: ${(props) => props.volume * 100}%;

    & > input {
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        height: 60px;
    }

    & > input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 60px;
        width: 0px;
        background: black;
    }
`
export const Percent = styled.p`
    color: #fff;
    width: 50px;
    font-size: 0.8em;
    position: fixed;
    margin: 90vh;
`
export const BoxVolume = styled.div`
    background-color: white;
    height: 40px;
    clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
    overflow: hidden;
    width: 12%;
`

export const Content = styled.div`
    background-color: #000;
    height: 80vh;
    position: relative;
    overflow: hidden;
    & ${Control} {
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 0;
    }
`
export const Menu = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 30px;
    color: #000;
    overflow: hidden;

    & > p {
        padding: 0px 20px;
        font-size: 0.9rem;
    }

    & > p:hover {
        cursor: pointer;
        background-color: #e7e7e750;
    }
`

export const SecondMenu = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 20px;
    color: #000;
    overflow: hidden;

    & > p {
        padding: 0px 20px;
        font-size: 0.8rem;
    }

    & > p:hover {
        cursor: pointer;
        background-color: #e7e7e750;
    }
`

export const Tittle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    background-color: #cacaca;
    & img {
        padding: 4px;
        width: 25px;
    }
`

export const CloseMenu = styled.div`
    width: 15%;
    display: flex;
    align-self: flex-start;
    align-items: center;
    height: 100%;
    background-color: #cacaca;
    margin-left: auto;
    justify-content: space-between;

    & p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & p:last-child:hover {
        background-color: #ff0000;
        color: #fff;
        transition: all 300ms;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
`
export const Right = styled.div`
    width: 40%;
`

export const Left = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`
