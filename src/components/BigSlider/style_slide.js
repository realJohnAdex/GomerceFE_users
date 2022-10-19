// import styled from '@emotion/styled';
// import { Button, Modal, Typography} from "@mui/material";
// import { cyan } from '@mui/material/colors';
// import { Box } from "@mui/system";

// import { Button} from "@mui/material";

import styled from "styled-components";
import { mobile } from '../../responsive'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 5;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translate(${props=> (props.position*-80)}vw)
`;

export const Slide = styled.div`
    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`;

export const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

export const Image = styled.img`
    height: 80%;
    margin: 0 auto;
    padding: 20px 0 20px 80px;
    ${mobile({margin: '0 auto', padding: '0', minWidth: '360px'})}
`;

export const InfoContainer = styled.div`
     flex: 2;
     display: flex;
     flex-flow: column wrap;
     padding: 10px 30px;
     justify-content: 'flex-start';
     align-items: flex-start;
    ${mobile({display: 'none'})}
`;

export const Title = styled.h1`
    font-size: 40px;
`;

export const Description = styled.p`
    margin: 50px 150px 50px 0;
    font-size: 18px;
    font-weight: 500;
    /* letter-spacing: 3px; */
`;

export const Button = styled.button`
    width: fit-content;
    outline: none;
    border:2px solid lightgray;
    padding: 10px;
    font-size: 20px;
    background:transparent;
    cursor: pointer;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover{
        border: 2px solid white;
        color: white;
        background-color: orange;
        -webkit-transform: scale(0.98, 0.98);
        transform: scale(0.98, 0.99);
    }
`;