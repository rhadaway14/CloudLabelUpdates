import styled from 'styled-components';

export const ListContainer = styled.div`
    margin: 0;
    padding: 0;
`;

export const Center = styled.div`
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // width: 100%;
    // transform: translate(-50%,-50%);
    text-align: center;
`;

export const Label = styled.label`
    font-size: 18px;
    
`;

export const Input = styled.input`
    position: relative;
    top: 5px;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    outline: none;
    transition: 0.5s;
    margin-right: 10px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #000;
        box-sizing: border-box;
        transition: 0.5s;
    }

    &:checked:before {
        border-left: none;
        border-top: none;
        width: 10px;
        border-color: #000;
        transform: rotate(45deg) translate(5px, -10px);
    }
`;