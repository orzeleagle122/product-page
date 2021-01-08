import React, {useState,useEffect} from 'react';
import {NavItemBtn,NavBtnLink, StyledNav, StyledNavbarContainer,StyledNavLogo,StyledNavIcon,MobileIconHamburger,NavMenu,NavItem,NavLinks} from './Navbar.elements';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../GlobalStyle';

const Navbar = () => {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton)
    return ( 
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <StyledNav>
                    <StyledNavbarContainer>
                        <StyledNavLogo to='/'>
                            <StyledNavIcon/>
                            ULTRA
                        </StyledNavLogo>
                        <MobileIconHamburger onClick={handleClick}>
                            {click?<FaTimes/>:<FaBars/>}
                        </MobileIconHamburger>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button?(
                                    <NavBtnLink to="/sing-up">
                                        <Button primary>SING UP</Button>
                                    </NavBtnLink>
                                ):(
                                    <NavBtnLink to='/sing-up'>
                                        <Button fontBig primary>
                                            SING UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </StyledNavbarContainer>
                </StyledNav>
            </IconContext.Provider>
        </>
     );
}
 
export default Navbar;