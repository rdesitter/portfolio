import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <ul className="footer__social__list">
                    <li className="footer__social__list--item"><a href="#" className="footer__social__list--link socicon-facebook"></a></li>
                    <li className="footer__social__list--item"><a href="#" className="footer__social__list--link socicon-linkedin"></a></li>
                    <li className="footer__social__list--item"><a href="#" className="footer__social__list--link socicon-twitter"></a></li>
                    <li className="footer__social__list--item"><a href="#" className="footer__social__list--link socicon-instagram"></a></li>
                </ul>
            </div>
            <div className="footer__copyright">
                <p>Copyright ©{new Date().getFullYear()}. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;