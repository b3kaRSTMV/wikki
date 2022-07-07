import { Link } from "react-router-dom";
import css from "../footer/Footer.module.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={css.footer}>
      <div className={css.footer__items}>
        <nav className={css.footer__items_links}>
              <div>
                <h4>{t("Products")}</h4>
                <Link to="/features">{t("Features")}</Link>
                <Link to="/pricing">{t("Pricing")}</Link>
              </div>
              <div>
                <h4>{t("Social")}</h4>
                <Link to="/twitter">{t("Twitter")}</Link>
                <Link to="/facebook">{t("Facebook")}</Link>
                <Link to="/facebook">{t("Contact Us")}</Link>
              </div>
              <div>
                <h4>{t("Legal")}</h4>
                <Link to="/privacy">{t("Privacy")}</Link>
                <Link to="/privacy">{t("Terms")}</Link>
              </div>
            </nav>
            <div className={css.footer__logo}>
              <img src="./shared/img/logo.png" alt="logo" />
              <p>
                {t("Created by awesome people")}
                <br /> {t("at")} <span>{t("Oozou")}</span>
              </p>
            </div>
          </div>
        </div>
  );
}
export default Footer;
