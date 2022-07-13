import { Link } from "react-router-dom";
import css from "./LoginPage.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";

function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={css.login__forms}>
        <h2>{t("sign in")}</h2>
        <div className={css.login__links}>
          <Link to="/" className={css.link__facebook}>
            <img src="./shared/img/facebook.svg" alt="" />
            <span>{t("loginPage.facebook")}</span>
          </Link>
          <Link to="/" className={css.link__github}>
            <img src="./shared/img/git.svg" alt="" />
            <span>{t("loginPage.github")}</span>
          </Link>
          <Link to="/" className={css.link__google}>
            <img src="./shared/img/google.svg" alt="" />
            <span>{t("loginPage.google")}</span>
          </Link>
        </div>
        <div className={css.line}>
          <span>{t("loginPage.OR")}</span>
        </div>
        <form action="#">
          <div class={css.control}>
            <label for="email">{t("loginPage.Email")}</label>
            <input type="email" name="email" className={css.control__input} />
          </div>
          <div class={css.control}>
            <label for="psw">{t("loginPage.Password")}</label>
            <input type="password" name="psw" className={css.control__input} />
          </div>
          <div class={css.login__submit}>
            <div>
              <input type="checkbox" />
              <span className={css.login__text}>{t("loginPage.Remember_me")}</span>
            </div>
            <Link to="/" className={css.login__text}>
              {t("loginPage.password?")}
            </Link>
          </div>
          <div class={css.control}>
            <a href="" className={css.control__sign}>
              {t("loginPage.SIGN_IN")}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
