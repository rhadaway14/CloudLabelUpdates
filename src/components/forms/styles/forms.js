import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const Card = styled.div`
width: 85vw;
height: 80vh;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 5px 15px;
background: rgba(255,255,255,0.1);
border-radius: 15px;
margin: 25px auto;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
backdrop-filter: blur(2px);
transition: 1s;
`;

export const Frame = styled.div`
// width: 50vw;
// height: 65vh;
display: flex;
flex-direction: column;
padding: 5px 15px;
background: rgba(255,255,255,0.1);
border-radius: 15px;
margin: 70px 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
backdrop-filter: blur(2px);
transition: 1s;

&:hover {
    // height: 100vh;
    // width: 100vw;
`;

export const Title = styled.h1`
font-family: Inknut Antiqua, sans-serif;
cursor: pointer;
font-size: 40px;
font-weight: 700;
color: white;
margin: 5px auto;
margin-bottom: 0px;
`;

export const Input = styled.input`
font-size: 1rem;
font-weight: 700;
padding: .35em .3em;
letter-spacing: 1px;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
width: 15em;
color: white;
margin: .5vh .5vw;
transition: 1s;

&::placeholder {
    color: white;
}

&:focus {
    outline: none;
}

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}

&::placeholder {
    color: dark grey;
}
`;

export const Name = styled.input`
font-size: 1.25rem;
font-weight: 700;
padding: .35em .3em;
letter-spacing: 1px;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
width: 15em;
color: white;
margin: 0 auto;
margin-bottom: 20px;

&:focus {
    outline: none;
}

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;

export const Button = styled.p`
font-family: Inknut Antiqua, sans-serif;
cursor: pointer;
font-weight: 700;
font-size: 25;
margin-top: 15px;
margin-left: auto;
margin-right: auto;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 5px 15px;
color: grey;

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;

export const Comment = styled.textarea`
resize: none;
padding: .35em .3em;
width: 300px;
height: auto;
margin: 0 auto;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
font-size: 1.25rem;
color: white;

&:focus {
    outline: none;
}

&:hover {
    box-shadow: 0 0 5px  white,
                0 0 15px  white,
                0 0 30px  white,
                0 0 60px  white;
    }
`;

export const Res = styled.h4`
color: white;
height: 16px;
margin: 5px auto;
`;

export const Pnum = styled.input`
font-size: 1.25rem;
font-weight: 700;
padding: .35em .3em;
letter-spacing: 1px;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
width: 15em;
color: white;
margin: 0 auto;

&:focus {
    outline: none;
}

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;
