import styled from 'styled-components';


export const Background = styled.img`
    object-fit: fill;
    // object-position: 0px 45%;
    width: 100vw;
    height: 100vh;
    // display: flex;
    // flex-direction: column;
    // padding: 5px 15px;
    // padding-bottom: 30px;
    // max-width: 25%;
    // justify-content: space-evenly;
    position: absolute;
    left: 0;
    top: 0;
    // height: 100%
    // width: 100%
    // background: red;
    // border-radius: 15px;
    // margin: 25px;
    // box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    // border-top: 1px solid rgba(255,255,255,0.5);
    // border-left: 1px solid rgba(255,255,255,0.5);
    // backdrop-filter: blur(5px);
`;

export const Overlay = styled.div`
    background: black;
    height: 100vh;
    width: 100vw;
    transform: skewY(-30deg) translateY(-50vw);
    overflow:hidden;
    position: absolute;
`;

export const Words = styled.p`
    font-size: 35px;
    color: white;
    font-family: Inknut Antiqua, sans-serif;
    font-weight: 700;
    

    &:hover {
        transition: 1s;
        letter-spacing: 2px;
    }
`;

export const Title = styled.h1`
font-size: 50px;
color: black;
font-family: Cardo, sans-serif;
font-weight: 700;
position: absolute;
bottom: 25vw;
left: 40vw;
`;