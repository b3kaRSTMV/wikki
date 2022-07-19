import css from "./Register.module.scss";

const Register = () => {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.content_wrapper}>
          <div className={css.text_container}>
            <h1 className={css.main_title}>Get Started for Free!</h1>
            <p className={css.main_text}>Sign up and create your wiki instantly using...</p>
          </div>
          <div className={css.social_networks_container}>
            <div className={css.facebook}>
              <img className={css.icon} src="/images/register/facebook.png" alt="logo" />
              <h3 className={css.social_networks_text}>FACEBOOK</h3>
            </div>
            <div className={css.github}>
              <img className={css.icon} src="/images/register/github.png" alt="logo" />
              <h3 className={css.social_networks_text}>GITHUB</h3>
            </div>
            <div className={css.google}>
              <img className={css.icon} src="/images/register/google.png" alt="logo" />
              <h3 className={css.social_networks_text}>GOOGLE</h3>
            </div>
          </div>
          <div className={css.dividing_block}>
            <div className={css.first_hr}></div>
            <div className={css.dividing_div}>OR</div>
            <div className={css.second_hr}></div>
          </div>
          <div className={css.input_block}>
            <input className={css.input} type="text" placeholder="Company Name" />
            <input className={css.input} type="text" placeholder="Your Name" />
            <input className={css.input} type="text" placeholder="Email Address" />
            <input className={css.input} type="text" placeholder="Choose Password" />
            <button className={css.btn}>GET STARTED-FREE FOREVER</button>
          </div>
          <p className={css.footer_text}>
            By clicking "Get Started - Free Forever!" I agree to SlimWiki's Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
