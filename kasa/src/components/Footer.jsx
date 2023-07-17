
import whiteLogo from '../assets/kasaLogoWhite.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <img src={whiteLogo} alt="logo KASA white"/>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    );
}

export default Footer;