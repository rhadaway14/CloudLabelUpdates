import styled from 'styled-components';

export const ButSeriously = styled.section`

`;

export const Round = styled.div`
font-family: Inknut Antiqua, sans-serif;
cursor: pointer;
font-size: 16px;
font-weight: 700;
margin-top: 15px;
// margin-left: auto;
// margin-right: auto;
background-color: rgba(255,255,255,0);
border-radius: 50%;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 0px 15px;
text-align: center;
color: white;
position: fixed;
right: 20px;


&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;

export const Pill = styled.div`
font-family: Inknut Antiqua, sans-serif;
cursor: pointer;
font-size:35px;
font-weight: 700;
margin-top: 15px;
// margin-left: auto;
// margin-right: auto;
// background-color: rgba(185, 235, 255,1);
// border-radius: 15px;
// box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
// border-top: 1px solid rgba(255,255,255,0.5);
// border-left: 1px solid rgba(255,255,255,0.5);
padding: 5px 5x;
color: black;
// text-align: center;
// text-shadow: 2px 2px 5px black;
// width: 175px;
transition: 1s;
text-decoration: none;
// z-index: 1;

&:hover {
    letter-spacing: 3px;
}
`;

export const Rec = styled.div`
font-family: Cardo, sans-serif;
cursor: pointer;
font-size: 20px;
font-weight: 700;
width: 80px;
margin: 15px auto;
background: white;
border: none;
padding: 15px 30px;
color: black;
border: 2px solid black;
transition: 1s ease-in-out;
text-decoration: none;


&:hover {
    color: white;
    background: black;
}
`;