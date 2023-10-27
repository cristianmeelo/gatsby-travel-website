import styled from 'styled-components';
import { Link } from 'gatsby';
import { DiScala } from 'react-icons/Di';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101522;
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
`;

export const SocialIcon = styled(DiScala)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-family: 'Ubuntu', sans-serif;
`;

export const SocialIcons = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
