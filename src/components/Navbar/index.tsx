import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import * as S from './index.styles';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#141414' }}>
        <S.Nav active={scroll} click={click}>
          <S.NavbarContainer>
            <S.NavLogo to="/">
              <S.NavIcon />
              EXPLOR
            </S.NavLogo>
            <S.MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </S.MobileIcon>
            <S.NavMenu onClick={handleClick} click={click}>
              <S.NavItem>
                <S.NavLink to="/">Home</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink to="/images">Images</S.NavLink>
              </S.NavItem>
              {/* <S.NavItem>
                <S.NavLink to="/destinations">Destinations</S.NavLink>
              </S.NavItem> */}
            </S.NavMenu>
          </S.NavbarContainer>
        </S.Nav>
      </IconContext.Provider>
    </>
  );
};
