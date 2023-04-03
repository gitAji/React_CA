import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;

`;

export const Right = styled.div`
  padding: 1rem;



`;

export const Left = styled.div`
  padding: 1rem;


 
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: gray;
  border-bottom: 1px dotted black;
  padding-block:1rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-block: 2rem;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #FFB69D;
  padding:1rem;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #FFB69D;
  color: white;
  font-size: 1rem;
  border:none;
`;

export const Error = styled.p`
  color: #F79C92;
  font-size: 1rem;
  padding-block:.7rem;
`;

export const Image = styled.div`
  padding:.2rem;
  min-width:300px;
  height:350px;
  background-color:#FFB69D;
  & img {
    width: 100%;
    height: 100%;
    object-fit:cover;
   
  }
 
`;
export const Location = styled.div`
  padding-block:2rem;
 display:flex;
 justify-content:space-between;
 
`;
export const Phone = styled.div`
  padding-block:2rem;
 
 
`;