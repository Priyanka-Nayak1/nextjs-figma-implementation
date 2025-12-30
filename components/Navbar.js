import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import cart from '../public/cart.svg'
import profile from '../public/profile.svg'
import search from '../public/search.svg'
import navbar from '../public/navbar.svg'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledNavbar>
        {/* <Logo></Logo>

        <NavLinks>
          <Link href="/">Shop</Link>
          <Link href="/">On Sale</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Brands</Link>
        </NavLinks>

        <SearchBox>
          <Image src={search} alt="search" />
          <input placeholder="Search for products..." />
        </SearchBox>

        <Icons>
          <Image src={cart} alt="cart" />
          <Image src={profile} alt="profile" />
        </Icons> */}

        <Image src={navbar}/>
      </StyledNavbar>
    </NavbarWrapper>
  );
};

export default Navbar

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 13px;
  margin-bottom: 13px;
  margin-left: 8px;
  margin-right: 8px;
`;

const StyledNavbar = styled.nav`
  width: 1240px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 40px;
`;

// const Logo = styled.div`
//   font-weight: 700;
//   font-size: 24px;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 24px;

//   a {
//     text-decoration: none;
//     color: #000;
//     font-size: 14px;
//   }
// `;

// const SearchBox = styled.div`
//   flex: 1;
//   max-width: 400px;

//   display: flex;
//   align-items: center;
//   gap: 8px;

//   background: #f0f0f0;
//   border-radius: 62px;
//   padding: 8px 16px;

//   input {
//     border: none;
//     outline: none;
//     background: transparent;
//     width: 100%;
//   }
// `;

// const Icons = styled.div`
//   display: flex;
//   gap: 16px;
//   align-items: center;
// `;
