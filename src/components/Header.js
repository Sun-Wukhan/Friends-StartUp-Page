import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa';
import { menuItems } from './data/MenuItems';
import { Button } from './Button';

const Header = () => {
  return (
    <Nav>
      <NavbarLink to="/">Lotus Security
      <img src="https://prod-cdn-01.storenvy.com/product_photos/24372207/white_20lotus_original.jpg"/>
      </NavbarLink>
      <HamburgerMenu/>
      <NavMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarLink to={item.link} key={index}>{item.title}</NavbarLink>
        ))} */}
      </NavMenu>
      <NavButton><Button round="true" to="/contact">Contact Us</Button></NavButton>
      </Nav>
  )
}

export default Header 

const Nav = styled.nav`
background: transparent; 
background-color: rgba(0, 0, 0, 0.8);
backdrop-filter: saturate(180%), blur(20px);
display: flex;
position: relative;
width: 100%;
z-index: 999;
justify-content: space-between;
padding: 0.5rem calc((100vh - 1300px)/ 2);

`
const NavbarLink = styled(Link)`
color: white;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
display: flex;
align-items: center; 
font-size: 25px;

img {
  border-radius: 200px;
  width: 5rem;
  margin-left: 1rem;
}
;
`

const HamburgerMenu = styled(FaBars)`
display: none;
color: white;

@media screen and (max-width: 768px) {
  display: block; 
  position: absolute;
  top: 0; 
  right: 0;
  transform: translate(-100%, 75%); 
  font-size: 1.8rem;
  cursor: pointer;
}`

const NavMenu = styled.div`
display: flex; 
align-items: center; 
margin-right: -15px;

@media screen  and (max-width: 768px){
  display: none; 
}
`;

const NavButton = styled.div`
display: flex; 
align-items: center; 
margin-right: 20px;


@media screen and (max-width: 768px) {
  display: none;
}
`