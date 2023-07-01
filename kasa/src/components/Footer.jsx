import '../styles/Footer.css';
import whiteLogo from '../assets/kasaLogoWhite.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <img src={whiteLogo}/>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    );
}

export default Footer;