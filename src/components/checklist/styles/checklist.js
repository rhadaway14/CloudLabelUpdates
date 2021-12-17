import styled from 'styled-components';


export const ListContainer = styled.div`
// margin: 0;
// padding: 0;
font-family: Inknut Antiqua, sans-serif;
// cursor: pointer;
// background: #00080c;
`;


export const UL = styled.ul`
margin: 15px 10px;
padding: 10px 10px;
font-family: Inknut Antiqua, sans-serif;
// position: absolute;
// top: 0;
// left: 50%;
// transform: translate(-50%, -50%);
background: #fff;
width: 150px;
border: 1px solid rgba(0,0,0,0.5);
border-radius: 15px;

`;

export const LI = styled.li`
    list-style: none;
    position: relative;
    padding: 10px 0px ;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    
    
    &:last-child {
        border-bottom: none;
    }
`;

export const Label =  styled.label`
    cursor: pointer;
    padding-left: 30px;
    font-size: 18px;
    color: #000;
`;



export const Check = styled.span`
    
    position: absolute;
    top: 22.5px;
    left: 0;
    width: 20px;
    height: 20px;
    background:#000;
    display: block;
    box-sizing: border-box;
    border-radius: 4px;

    &:before {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        bottom: 3px;
        right: 3px;
        background: #fff;
        transition: 0.5s ease-in-out;
        border-radious: 2px;
        transform: translateX(185px);
    }

    
`;

export const Input = styled.input`
    opacity: 0;

    &:checked + ${Check}: before {
        background: #fff;
        box-shadow: 0 0 15px #0f6da1;
        transform: translateX(0px)
    }
`;