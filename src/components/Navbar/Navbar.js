import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../global.styled";
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtnLink,
    NavIcon,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./Navbar.styled";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClicked(!clicked);
    };
    const closeMobileMenu = () => setClicked(false);

    const showButton = () => {
        if (window.innerWidth < 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            Ultra
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {clicked ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu clicked={clicked}>
                            <NavItem onClick={handleClick}>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem onClick={handleClick}>
                                <NavLinks to="/services">Services</NavLinks>
                            </NavItem>
                            <NavItem onClick={handleClick}>
                                <NavLinks to="/products">Products</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button
                                            onClick={closeMobileMenu}
                                            fontBig
                                            primary
                                        >
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
