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
    height: 750px;
    width: 1200px;
    transform: skewY(-25deg) translateY(-500px);
    overflow:hidden;
    position: fixed;
    top: 0;
    left: 0;
`;

export const Words = styled.p`
    font-size: 30px;
    color: Black;
    font-family: Inknut Antiqua, sans-serif;
    font-weight: 700;
    padding-left: 20px;
    padding-right: 20px;
    // width: 15vw;
`;

export const Search = styled.p`
    font-size: 20px;
    color: white;
    margin-bottom: 0px;
    font-family: Inknut Antiqua, sans-serif;
    font-weight: 700;
    // padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled.h1`
font-size: 50px;
color: black;
font-family: Cardo, sans-serif;
font-weight: 700;
// position: fixed;
// bottom: 0px;
// right: 50px;
`;

export const TitleTop = styled.h1`
font-size: 50px;
color: black;
font-family: Cardo, sans-serif;
font-weight: 700;
padding: 15px;
// position: fixed;
// Top: 0px;
// left: 30px;
border: 5px solid black;
text-align: center;
`;