import * as React from "react";
import LogoDark from '../assets/images/logo-dark.svg'; 
import LogoLight from '../assets/images/logo-light.svg'; 
import ConnectWalletButton from "../components/ConnectWalletButton"; 
import { Link, NavLink } from 'react-router-dom';
import themecoloriconWhite from '../assets/images/theme-color-icon.svg';
import themecoloriconBlack from '../assets/images/theme-color-icon-black.svg';
import  useLocalStorage  from 'localstorage-react';

function Header() {
    const [theme, setTheme] = useLocalStorage('zeta_domains_theme');

    React.useEffect(()=> {
        var bodytag = document.getElementsByTagName("body");
        if(theme === "darkTheme") { 
            bodytag[0].classList.remove('whiteTheme');
            bodytag[0].classList.add("darkTheme");
        } else if(theme === "whiteTheme") {
            bodytag[0].classList.remove('darkTheme');
            bodytag[0].classList.add("whiteTheme");
        } else {
            bodytag[0].classList.remove('darkTheme');
            bodytag[0].classList.add("whiteTheme");
        }
    }, []);

    //const menuRef = useRef();
    function toogleTheme (e){
        var themeicon = document.getElementsByClassName("changeTheme");
        var bodytag = document.getElementsByTagName("body");

        if(theme === "darkTheme") {
            bodytag[0].classList.remove('darkTheme');
            themeicon[0].classList.remove('active');
            setTheme("whiteTheme");
        } else if(theme === "whiteTheme") {
            bodytag[0].classList.add('darkTheme');
            themeicon[0].classList.add('active');
            setTheme("darkTheme");
        } else {
            bodytag[0].classList.remove('darkTheme');
            themeicon[0].classList.remove('active');
            setTheme("whiteTheme");
        } 
    }

    function closeMobileMenu(e){
        var menuIcon = document.getElementsByClassName("mm");
        var bodytag = document.getElementsByTagName("body")
        var controlsContent = document.getElementsByClassName('controls-content');
        bodytag[0].classList.remove('menuOn');
        menuIcon[0].classList.remove('active');
        controlsContent[0].classList.remove('active');
    }

    function openMobilMenu(e) {
        
        var menuIcon = document.getElementsByClassName("mm");
        var bodytag = document.getElementsByTagName("body");
        var controlsContent = document.getElementsByClassName('controls-content');
 
        if (menuIcon[0].className.indexOf("active") != -1) {
            bodytag[0].classList.remove('menuOn');
            menuIcon[0].classList.remove('active');
            controlsContent[0].classList.remove('active');
        } else {
            bodytag[0].classList.add('menuOn');
            menuIcon[0].classList.add('active');
            controlsContent[0].classList.add('active');
        }
        return false;
    }
    return ( 
        <header>
            <div className="container-fluid d-flex align-items-center justify-content-between">
            <NavLink to="/">
                <h1 id="logo">
                        <img src={theme === "darkTheme"? LogoLight: LogoDark} alt="Zeta Name Services" />
                        <span>Zeta Domains</span>
                </h1>
            </NavLink>
            <div className="controls-content">
                <nav>
                    <ul className="d-flex">
                        <li><Link onClick={(e) => closeMobileMenu(e)} to="/account">My Domains</Link></li>
                        <li>
                            <a className="changeTheme" onClick={(e) => toogleTheme(e)}>
                                <img className="moonwhite" src={themecoloriconWhite} />
                                <img className="moonblack"  src={themecoloriconBlack} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
             <ConnectWalletButton></ConnectWalletButton>
             <a onClick={ (e)=> openMobilMenu(e) }  className="mm" href="#"><span></span><span> </span><span></span></a>
            </div> 
        </header>
        
     );
}

export default Header;