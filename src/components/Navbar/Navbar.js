import React from 'react';
import {StyledNav, StyledNavbarContainer} from './Navbar.elements';

const Navbar = () => {
    return ( 
        <>
            <StyledNav>
                <StyledNavbarContainer>
                    <StyledNavLogo to='/'>
                        <StyledNavIcon>
                            ULTRA
                        </StyledNavIcon>
                    </StyledNavLogo>
                </StyledNavbarContainer>

            </StyledNav>
        </>
     );
}
 
export default Navbar;