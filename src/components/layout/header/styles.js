
import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-item:center;
  padding:.2rem;
  width: 100%;
  background-color:#FFB69D;
`;

export const Nav = styled.nav`

display:flex;
font-size:1.4rem;

  align-items:center;


  ul {
    list-style: none;
    margin: 0;
    padding: 0;
   
    

    li {
      display: inline-block;

      a {
        text-decoration: none;
        padding: 1rem;
        color:#1B365C;
      }
      a:hover {
       border-bottom:1px solid salmon;
        
      }
    }
  }
  @media only screen and (max-width: 768px) {
    font-size:1rem;
  }
`;


export const Logo = styled.div`
  width: 180px;
  height: 120px;
  cursor:pointer;

  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const TextLogo = styled.h1`
color:#1B365C;
font-size:2.25rem;
letter-spacing:6px;
font-stretch: expanded;
font-variant:uppercase;
font-weight:bold;
`;

export const RightIcons = styled.div`
display:flex;
justify-content: space-evenly;
font-size:2rem;


`;
export const CartIcon = styled.div`

color:#1B365C;
margin-left:2rem;
cursor:pointer;
display:flex;
align-items:center;
position:relative;

&:hover{
  color:#fff;
}

& div{
  font-size:1rem;
  font-weight:bold;
    color:white; 
    padding:.2.75rem;
    background-color:black;
    border-radius:50%;
    width:20px;
    position:absolute;
    right:-7px;
    bottom:24px;
    margin:auto;
    text-align:center;
   
  }
@media only screen and (max-width: 768px) {
  font-size:1.5rem;
}
div{
  font-size:.75rem;
  padding:.2rem;
}
`;

//media queries

