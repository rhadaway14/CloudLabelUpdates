import styled from 'styled-components';


export const ListContainer = styled.div`
// margin: 0;
// padding: 0;
// font-family: Inknut Antiqua, sans-serif;
// cursor: pointer;
// background: #00080c;
`;


export const UL = styled.ul`
margin: 0;
padding: 10px 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #00151f;
width: 200px;
border: 1px solid rgba(0,0,0,0.5)
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
    color: #fff;
`;



export const Check = styled.span`
    
    position: absolute;
    top: 10px;
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
        background: #000b10;
        transition: 0.5s;
        border-radious: 2px;
        transform: translateX(185px);
    }

    
`;

export const Input = styled.input`
    opacity: 0;

    &:checked + ${Check}: before {
        background: #adff00;
        box-shadow: 0 0 15px #adff00;
        transform: translateX(0px)
    }
`;