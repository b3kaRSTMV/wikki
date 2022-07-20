import css from "./Register.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";

const Register = () => {
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.content_wrapper}>
          <div className={css.text_container}>
            <h1 className={css.main_title}>{t("register.main_title")}</h1>
            <p className={css.main_text}>{t("register.main_text")}</p>
          </div>
          <div className={css.social_networks_container}>
            <div className={css.facebook}>
              <img className={css.icon} src="/images/register/facebook.png" alt="logo" />
              <h3 className={css.social_networks_text}>{t("register.facebook")}</h3>
            </div>
            <div className={css.github}>
              <img className={css.icon} src="/images/register/github.png" alt="logo" />
              <h3 className={css.social_networks_text}>{t("register.github")}</h3>
            </div>
            <div className={css.google}>
              <img className={css.icon} src="/images/register/google.png" alt="logo" />
              <h3 className={css.social_networks_text}>{t("register.google")}</h3>
            </div>
          </div>
          <div className={css.dividing_block}>
            <div className={css.first_hr}></div>
            <div className={css.dividing_div}>{t("register.or")}</div>
            <div className={css.second_hr}></div>
          </div>
          <form className={css.input_block}>
            <div className={css.input_wrapper}>
              <img
                className={css.input_icon}
                src="/images/register/Name.png"
                alt="Company name icon"
              />
              <input className={css.input} type="text" placeholder={t("register.company_name")} />
            </div>
            <div className={css.input_wrapper}>
              <img className={css.input_icon} src="/images/register/yourName.png" alt="Name icon" />
              <input className={css.input} type="text" placeholder={t("register.your_name")} />
            </div>
            <div className={css.input_wrapper}>
              <img className={css.input_icon} src="/images/register/email.png" alt="Email icon" />
              <input className={css.input} type="text" placeholder={t("register.email_address")} />
            </div>
            <div className={css.input_wrapper}>
              <img
                className={css.input_icon}
                src="/images/register/password.png"
                alt="Password icon"
              />
              <input className={css.input} type="password" placeholder={t("register.password")} />
            </div>
            <button className={css.btn}>{t("register.btn_text")}</button>
          </form>
          <p className={css.footer_text}>{t("register.footer_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
