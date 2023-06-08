import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 0.2rem;
  width: 100%;
  background-color: #ffb69d;
`;

export const Nav = styled.nav`
  display: flex;
  font-size: 1.4rem;

  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;

      a {
        text-decoration: none;
        padding: 1rem;
        color: #1b365c;
      }

      a:hover {
        border-bottom: 1px solid salmon;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  
 
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding:12px;

      a {
        text-decoration: none;
        padding: 1rem;
        color: #1b365c;
      }

      a:hover {
        border-bottom: 1px solid salmon;
      }
    }
  @media only screen and (min-width: 768px) {
    display: none;

  }
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 180px;
  height: 120px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
    padding: 5px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextLogo = styled.h1`
  color: #1b365c;
  font-size: 2.25rem;
  letter-spacing: 6px;
  font-stretch: expanded;
  font-variant: uppercase;
  font-weight: bold;
`;

export const RightIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  padding: 5px;
  cursor: pointer;
`;
export const CartIcon = styled.div`
  color: #1b365c;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: #fff;
  }

  & div {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    padding: 0.2.75rem;
    background-color: black;
    border-radius: 50%;
    width: 20px;
    position: absolute;
    right: -7px;
    bottom: 24px;
    margin: auto;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  div {
    font-size: 0.5rem;
    padding: 0.2rem;
  }
`;
