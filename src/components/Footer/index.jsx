import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import {
  FooterContainer,
  FooterContent,
  DividerStyle,
  FooterBottom,
  SocialStack,
  CopyRightStyling,
  SocialMediaIconStyles,
} from "./Footer";
import FooterColumn from "../FooterColumn";
import Divider from "@mui/material/Divider";
import footerData from "../../SetUpData/footerColumnData";

import FloatingBtn from "../FloatingBtn";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {footerData.map((setup) => {
          return (
            <FooterColumn
              key={setup.id}
              title={setup.title}
              links={setup.links}
            />
          );
        })}
      </FooterContent>
      <Divider sx={DividerStyle} />
      <FooterBottom>
        <SocialStack>
          <TwitterIcon sx={SocialMediaIconStyles} />
          <FacebookIcon sx={SocialMediaIconStyles} />
          <InstagramIcon sx={SocialMediaIconStyles} />
        </SocialStack>
        <Typography variant="caption" sx={CopyRightStyling}>
          &copy; {new Date().getFullYear()} Gomerce
        </Typography>
      </FooterBottom>
      <FloatingBtn />
    </FooterContainer>
  );
};

export default Footer;
