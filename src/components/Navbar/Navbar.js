import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.styled";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        Ultra
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
