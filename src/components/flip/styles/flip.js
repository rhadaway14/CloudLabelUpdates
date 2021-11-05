import styled from 'styled-components';



export const Check = styled.input`
    height: 40px;
    width: 40px;
    position: absolute;
    top:0;
    left:0;
    z-index:1;
`;

export const Card = styled.div`
    position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    width: 300px;
    height: 400px;
    transform-style: preserve-3d;
    perspective: 600px;
    transition: 0.5s;

    }
`;

export const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background: blue;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: 0.5s;

`;

export const Front = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background: #000;
    backface-visibility: hidden;
    transform: rotateY(0deg);
    transition: 0.5s;
    
`;

export const FImage = styled.img`
    object-fit: cover;
    width: 300px;
    height: 400px;

    }
`;

export const Details = styled.div`

`;


export const Wrap = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    // transform: translate(-50%, -50%);
    width: 300px;
    height: 400px;
    transform-style: preserve-3d;
    perspective: 600px;
    transition: 0.5s;


& ${Check}:checked + ${Card} {
    transform: rotateY(180deg);

}
`;



