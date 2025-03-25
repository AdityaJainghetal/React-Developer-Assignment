// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s;

  &:hover {
    color: #21a1f1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Communion App</p>
      <div>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#services">Services</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </div>
    </FooterContainer>

    
  );
};

export default Footer;