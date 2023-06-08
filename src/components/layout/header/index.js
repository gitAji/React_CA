import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Head,
  Logo,
  LogoImage,
  Nav,
  RightIcons,
  MenuIcon,
  MobileMenu,
} from "./styles";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "./logo.png";
import { Drawer } from "antd";

const Header = () => {
  const cart = useSelector((state) => state.cart); //cart state from the store
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    console.log("menu clicked");
  };
  return (
    <>
      <Head>
        <Logo>
          <Link to="/">
            <LogoImage src={logo} alt="logo" />
          </Link>
        </Logo>
        <Drawer
          closable={false}
          width={200}
          placement="right"
          open={menuOpen}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MobileMenu
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/contact">Contacts</Link>
              </li>
            </ul>
          </MobileMenu>
        </Drawer>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </Nav>
        <RightIcons>
          <Link
            to="/cart"
            style={{ color: "#1B365C", hover: { color: "white" } }}
          >
            <ShoppingCartOutlined />
          </Link>
          <div
            style={{
              fontSize: "1rem",
              padding: 5,
              backgroundColor: "#333",
              color: "#fff",

              borderRadius: 5,
            }}
          >
            {cart.items.length}
          </div>

          <MenuIcon>
            <MenuOutlined onClick={openMenu} />
          </MenuIcon>
        </RightIcons>
      </Head>
    </>
  );
};

export default Header;
