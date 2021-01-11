import React from 'react';
import {SocialMedia,SocialMediaWrap,SocalLogo,SocialIcons,WebsiteMediaWrap,SocialIconLink,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink,Form,FormInput,FooterContainer,FooterSubscription,FooterSubHeading,FooterSubText} from './Footer.elements';
import {Button} from '../../GlobalStyle';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return ( 
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exlusive membership.
                    </FooterSubHeading>
                    <FooterSubText>
                        U can unsubscribe at any time
                    </FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your email"/>
                        <Button fontBig>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                            <FooterLink to='/sign-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Contact us
                            </FooterLinkTitle>
                            <FooterLink to='/sign-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to='/sign-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink to='/sign-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>                
                    <SocialMediaWrap>
                        <SocalLogo to='/'>
                            <SocialIcons>
                                Procuct Page
                            </SocialIcons>
                        </SocalLogo>
                        <WebsiteMediaWrap>
                        Procuct Page (c) 2020
                        </WebsiteMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" arial-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" arial-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" arial-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" arial-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
     );
}
 
export default Footer;