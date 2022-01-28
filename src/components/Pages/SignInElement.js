import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Div = styled.div`
box-border: 0px 0px 10px black;
display: flex;
flex-direction: column;
margin: auto;
height: auto;
width: 30vw;
padding: 15px;

@media (min-width: 280px) and (max-width: 415px){
    width : 90vw
}

@media (min-width: 416px) and (max-width: 768px){
    width: 40vw;    
}
`;

export const Input = styled.input`
width: 100%;
margin-top: 5px;
padding: 5px;
`;

export const Button = styled.button`
width: 100px;
margin-top: 10px;
background-color: green;
color: white;
border-radius: 7px;
padding: 7px;
`;

export const BtnLink = styled(Link)`
 text-decoration: none;
 font-size: 1rem;
 margin-left: 20px;
 color: blue;
`;