import { Link } from "react-router-dom";
import css from "../footer/Footer.module.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className={css.container}>
          <div className={css.footer__items}>
            <nav className={css.footer__items_links}>
              <div>
                <h4>Products</h4>
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
              </div>
              <div>
                <h4>Social</h4>
                <Link to="/twitter">Twitter</Link>
                <Link to="/facebook">Facebook</Link>
                <Link to="/facebook">Contact Us</Link>
              </div>
              <div>
                <h4>Legal</h4>
                <Link to="/privacy">Privacy</Link>
                <Link to="/privacy">Terms</Link>
              </div>
            </nav>
            <div className={css.footer__logo}>
              <img src="./shared/img/logo.png" alt="logo" />
              <p>
                Created by awesome people <br /> at <span>Oozou</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
