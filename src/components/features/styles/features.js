
import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 5px;
justify-content: center;
// margin-top: 25vh;
`;

export const Card = styled.div`
width: 27.5vw;
height: 27.5vh;
// padding: 5px 15px;
// background: rgba(0,0,0,0.1);
border-radius: 15px;
margin: 30px;
box-shadow: 10px 10px 20px rgb(185, 235, 255);
border-top: 1px solid rgba(185, 235, 255,0.5);
border-left: 1px solid rgba(185, 235, 255,0.5);
backdrop-filter: blur(5px);
min-width: 400px;
min-height: 250px;

transition: 2s;

&:hover {
    // box-shadow: 0 0 5px  white,
    //     0 0 15px  white,
    //     0 0 30px  white,
    //     0 0 60px  white;
    // box-shadow: 0 0 5px  blue,
    //     0 0 15px  blue,
    //     0 0 30px  blue,
    //     0 0 60px  blue;
    
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
}

`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: 0px 40%;
border-radius: 15px;
filter: grayscale(100%);
transition: 1.5s;

${Card}:hover & {
    filter: grayscale(0%);
}

}
`;

export const Section = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
// margin: 25px;
// margin-left: 40px;
// font-family: 'Michroma', sans-serif;
display: flex;
justify-content: start;
`;

export const Statement = styled.div`
font-family: Inknut Antiqua, sans-serif;
font-size: 40px;
color: white;
// text-shadow: 0px 0px 1px white;
//                 2px -2px 2px black,
//                 -2px 2px 2px black,
//                 -2px -2px 2px black;
// font-family: 'Michroma', sans-serif;
font-weight: 700;
`;

export const Sub = styled.div`
font-size: 25px;
color: black;
// position: absolute;
// top: 0;
// left: 200%;
font-family: 'Michroma', sans-serif;
filter: opacity(0%);
margin-top: 0px;
margin-left: 8vw;
transform: translateY(-100px);

${Card}:hover & {
    
    transition: 1s;
    filter: opacity(100%);
    color: white;
}
`;



export const FButton = styled.div`
font-family: 'Michroma', sans-serif;
cursor: pointer;
font-size:20px;
margin-top: 25px;
// margin-left: auto;
// margin-right: auto;
background-color: rgba(185, 235, 255,1);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 10px 30px;
color: white;
text-align: center;
text-shadow: 2px 2px 5px black;
width: 175px;
transition: 1s;
text-decoration: none;
z-index: 1;

&:hover {
    letter-spacing: 2px;
}
`;
