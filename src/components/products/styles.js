import styled from "styled-components";

export const Bottom = styled.div `
display:flex;
justify-content:center;
padding:1rem;

`;
export const Button = styled.button `
padding-block:1rem;
padding-inline:6rem;
background-color:salmon;
color:#fff;
border:none;
&:hover{
    background-color:#F79C92;

}`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #f0f2e8;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.div`
width: 100%;
  height: 300px;
  border-radius: 4px 4px 0 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit:cover;
   
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  padding-block:1rem;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export const PriceDiv=styled.div`
display:flex;
justify-content:space-between;
`;
export const CardPrice = styled.h3`
 padding-block:1rem;
 color:#FF6E4A;

  `;
  export const CardOffer = styled.h3`
align-self:center;
 color:#FF6E4A;
  font-weight:bold;
  background-color:#FAC514;
  padding-inline:1rem;
  border-radius:2px;

  `;