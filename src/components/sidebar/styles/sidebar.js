import styled from 'styled-components';

export const Background = styled.section`
    ddisplay: flex;
    flex-direction: column;
    padding: 5px 15px;
    padding-bottom: 30px;
    max-width: 25%;
    // justify-content: space-evenly;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(150,150,150,0.4);
    border-radius: 15px;
    margin: 25px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
`;

export const Container = styled.div`
// height: auto;
display: flex;
// background: black;
flex-wrap: wrap;
// padding: 5px;
align-items: center;
margin: 0px auto;
`;

export const Title = styled.h2`
color: rgba(255,255,255,.9);
// display: flex;
// text-align: center;
margin: 5px ;
// text-shadow: 5px 5px rgba(100,100,100,1)
`;

export const SideButton = styled.p`
cursor: pointer;
font-size:20px;
margin-top: 5px;
margin-left: auto;
margin-right: auto;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 10px 30px;
`;