import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import * as S from './index.styles';

export const Footer = () => {
  return (
    <S.Container>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <S.SocialLogo to="/">
            <S.SocialIcon />
          </S.SocialLogo>
          <S.WebsiteRights>EXPLOR C {new Date().getFullYear()}</S.WebsiteRights>
          <S.SocialIcons>
            <S.SocialIconLink href="/" target="_blank" ari-label="Facebook">
              <FaFacebook />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" ari-label="Instagram">
              <FaInstagram />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" ari-label="Youtube">
              <FaYoutube />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" ari-label="Twitter">
              <FaTwitter />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" ari-label="Linkedin">
              <FaLinkedin />
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.Container>
  );
};
