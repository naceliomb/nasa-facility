import LogoWhite from '../../assets/images/logoWhite.png';
import './style.css';
function Header() {
    return (
        <div className="header-main">
            <div className="logo-container">
                <img className='logo-white' src={LogoWhite} />
            </div>
            <div className="main-menu">
                <span className="main-menu_item"><a href="#">home</a></span>
                <span className="main-menu_item"><a href="#">feature</a></span>
                <span className="main-menu_item"><a href="#">license</a></span>
                <span className="main-menu_item"><a href="#">about</a></span>
            </div>
        </div>
    );
}

export default Header;