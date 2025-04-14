import React from "react";
import { Copyright, Icons, FooterIcons, IconsWrepper } from "./styles";
import face from "/img/fb.svg";
import insta from "/img/insta.svg";
import twitter from "/img/Group.svg";
import link from "/img/Linkedin.svg";
import { CenterContentOnScreen } from "../CenterContentOnScreen";

const Footer = () => {
  return (
    <CenterContentOnScreen>
        <FooterIcons>
      <IconsWrepper>
        <Icons src={face} />
        <Icons src={insta} />
        <Icons src={twitter} />
        <Icons src={link} />
      </IconsWrepper>
      <Copyright>Copyright ©2030 All rights reserved </Copyright>
    </FooterIcons>
    </CenterContentOnScreen>
    
  );
};

export default Footer;
