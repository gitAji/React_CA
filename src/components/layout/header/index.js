import React from 'react';
import { useSelector } from 'react-redux';
import { Head, Logo, LogoImage, Nav, RightIcons, CartIcon } from './styles';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import logo from './logo.png';

const Header = () => {
  const cart = useSelector((state) => state.cart); //cart state from the store

  return (
    <>
      <Head>
       
        <Logo>
          <Link to='/'>
            <LogoImage src={logo} alt='logo' />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
        
            <li>
              <Link to='/contact'>Contacts</Link>
            </li>
          </ul>
        </Nav>
        <RightIcons>
          <CartIcon>
            <Link to ='/cart' style={{ color: '#1B365C', hover: { color: 'white' } }}><ShoppingCartOutlined /></Link>
            <div>{cart.items.length}</div>
          </CartIcon>
          <CartIcon>
            <HeartOutlined />
          </CartIcon>
        </RightIcons>
      </Head>
    </>
  );
};

export default Header;
