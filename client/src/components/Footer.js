import React from "react";
import styled from "styled-components";
import facebook from "../image/social/facebook.svg";
import linkedIn from "../image/social/linkedIn.svg";
import pinterest from "../image/social/pinterest.svg";
import twitter from "../image/social/twitter.svg";
import { StyledImage } from "./Image";
import Green from '../image/design/green.svg';

const StyledWrapper = styled.footer`
  background: #fafafa;
  border-top: 1px solid #d8d8d8;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 200px;
  z-index: 6;
  display: flex;
  justify-content: center;
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  margin:79px 0 0 20%;
`;
const StyledLink = styled.a`
  padding-right: 25.74px;
`;
const StyledFooter = styled.nav`
  width: 100%;
  overflow-y: hidden;
`;

function Footer() {
  return (
    <StyledWrapper>
      <StyledFooter>
        <StyledLinkWrapper>
          <StyledLink href="https://www.linkedin.com/">
            <img src={linkedIn} alt="LinkedIn" />
          </StyledLink>
          <StyledLink href="https://twitter.com/i/flow/login">
            <img src={twitter} alt="twitter" />
          </StyledLink>
          <StyledLink href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" />
          </StyledLink>
          <StyledLink href="https://www.pinterest.ca/">
            <img src={pinterest} alt="pinterest" />
          </StyledLink>
        </StyledLinkWrapper>
        <StyledImage src={Green} alt="Green" top={'0'} right={'8%'} />
      </StyledFooter>
    </StyledWrapper>
  );
}

export default Footer;
