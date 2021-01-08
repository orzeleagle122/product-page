import React, {useState} from 'react';
import {StyledNav, StyledNavbarContainer,StyledNavLogo,StyledNavIcon,MobileIconHamburger} from './Navbar.elements';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

const Navbar = () => {
    const [click,setClick]=useState(false);

    const handleClick=()=>setClick(!click);
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
                    </StyledNavbarContainer>
                </StyledNav>
            </IconContext.Provider>
        </>
     );
}
 
export default Navbar;