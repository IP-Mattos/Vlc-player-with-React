import styled from 'styled-components'
interface VolumenProps {
    volume: number
}

export const Container = styled.div`
    width: 80%;
    min-width: 400px;
    margin: 5vh auto;
    & > hr {
        border: 2px solid #d1d1d1;
    }
    & img {
        width: 40%;
    }
    @media (max-width: 1042px) {
        width: 100%;
        & img {
            width: 80%;
        }
    }
`

export const Control = styled.div`
    background-color: #f0f0f0;
    color: #000;
`
export const Bar = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & .progress {
        width: 85%;
        background-color: #cacaca;
    }
    & > input[type='range'] {
        overflow: hidden;
        height: 10px;
        appearance: none;
        border-radius: 5px;
        -webkit-appearance: none;
        background-color: #cccccc;
    }

    & > input[type='range']::-webkit-slider-thumb {
        width: 10px;
        -webkit-appearance: none;
        height: 10px;
        border-radius: 50%;
        background: #dedede;
        box-shadow: -4000px 0 0 4000px #43e5f7;
    }
    & > input[type='range']::-moz-range-thumb {
        width: 10px;
        -webkit-appearance: none;
        appearance: none;
        height: 10px;
        border-radius: 50%;
        background: #dedede;
        box-shadow: -4000px 0 0 4000px #43e5f7;
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
    width: ${(props) => props.volume * 90}%;
    & > input {
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        height: 60px;
        overflow: hidden;
    }

    & > input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 0px;
        background: black;
    }

    input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 0px;
        background: black;
    }
`
export const Percent = styled.p`
    width: 50px;
    font-size: 0.8em;
    text-align: center;
`
export const BoxVolume = styled.div`
    clip-path: polygon(90% 0%, 0% 50%, 90% 50%);
    background-color: #8a8a8a;
    margin-bottom: -45px;
`
export const Border = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Content = styled.div`
    background-color: #000;
    height: 80vh;
    width: 100%;
    position: relative;

    & ${Control} {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    & .input-text {
        background-color: #cacaca;
        width: 31.2%;
        display: flex;
        justify-content: center;
        padding-top: 50px;
        padding-bottom: 20px;
    }
`

export const Menu = styled.div`
    background-color: #f3f3f3;
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
    @media (max-width: 1042px) {
        & p {
            font-size: 0.8rem;
        }
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
        background-color: #f5f5f5;
    }
    @media (max-width: 1042px) {
        & > p {
            display: none;
        }
    }
`

export const Tittle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
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
    margin-left: auto;
    cursor: default;
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
    @media (max-width: 1042px) {
        width: 30%;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 100px);
`
export const Right = styled.div`
    background-color: #cacaca;
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    overflow-y: auto;
    & p {
        padding-bottom: 10px;
        cursor: pointer;
    }
    @media (max-width: 1042px) {
        & p {
            font-size: 0.8rem;
        }
    }
`

export const Left = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`
export const Buttons = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%; /* agregar altura al contenedor */
    overflow: hidden;
    & .panel {
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    & button {
        height: 40px;
        width: 40px;
        margin: -10px 0px;
        font-size: 1.8rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    @media (max-width: 1042px) {
        & .panel > button {
            display: none;
        }
        & .panel > button:first-child {
            display: flex;
        }
        & .panel {
            width: 10%;
        }
    }
`
export const Searchbar = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
`
