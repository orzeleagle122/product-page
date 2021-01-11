import React from 'react';
import {FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink,Form,FormInput,FooterContainer,FooterSubscription,FooterSubHeading,FooterSubText} from './Footer.elements';
import {Button} from '../../GlobalStyle';

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
                            <FooterLink to='/sing-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Contact us
                            </FooterLinkTitle>
                            <FooterLink to='/sing-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to='/sing-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink to='/sing-up'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms od Services</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterContainer>
        </>
     );
}
 
export default Footer;