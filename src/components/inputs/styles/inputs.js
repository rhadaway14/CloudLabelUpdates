import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    padding: 20px;
    border-radius: 15px;

`;

export const Title = styled.h2`
    width: 100%;
    color: #fff;
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
`;

export const Row = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
`;

export const Col = styled.div`
    position: relative;
    // width: 100%;
    padding: 0 10px;
    margin: 30px 5px 10px;
    transition: 0.5s;
`;

export const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    color: #fff;
`;

export const InputBoxTextArea = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    color: #fff;
    padding: 10px 0;
`;


export const Text = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    line-height: 40px;
    font-size: 18px;
    padding: 0 10px;
    display: block;
    transition: 0.5s;
    pointer-events: none;
`;

export const Line = styled.span`
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: 0.5s;
    border-radius: 2px;
    pointer-events: none;
`;

export const Input = styled.input`
    position: absolute;
    width: 100% ;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border:none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    z-index: 1;
    color: #000;

    &:focus + ${Text}, &:valid + ${Text} {
        top: -35px;
        left: -10px;
    }

    &:focus ~ ${Line}, &:valid ~ ${Line} {
        height: 100%
    }
`;


export const TextArea = styled.textarea`
    height: 100%;
    resize: none;
    position: absolute;
    width: 100% ;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border:none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    z-index: 1;
    color: #000;

    &:focus + ${Text}, &:valid + ${Text} {
        top: -35px;
        left: -10px;
    }

    &:focus ~ ${Line}, &:valid ~ ${Line} {
        height: 100%
    }
    
`;

export const Submit = styled.input`
    border: none;
    padding: 7px 35px;
    cursor: pointer;
    outline: none;
    background: #fff;
    color: #000;
    font-size: 18px;
    border-radius: 2px;

    &:submit + ${Container} {
        background: white;
    }
`;