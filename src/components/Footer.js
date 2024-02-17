import logo from '../assets/logo.png';
import '../styles/Footer.css'


function Footer() {
    return (
        <footer className="footer">
            <img src={logo} className='footer__image' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;