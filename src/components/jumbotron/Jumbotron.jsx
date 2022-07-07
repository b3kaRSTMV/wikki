import React from "react";
import css from "./Jumbotron.module.scss";

const Jumbotron = () => {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.content_wrapper}>
          <div className={css.text_container}>
            <p className={css.title}>
              Beautiful Wikis
              <br />
              for Teams
            </p>
            <p className={css.main_text}>
              Wikis don’t have to be ugly, complex and hard to manage. Welcome to the future of the
              Wiki.
            </p>
            <button className={css.btn}>GET STARTED - FREE FOREEVER!</button>
          </div>
          <div className={css.img_container}>
            <img
              className={`${css.box} ${css.bounce_3}`}
              src="https://d1zc83yjnlch7e.cloudfront.net/assets/showcase-51315a7025a7f372e5a4ec159874c77fc029074c577815860a6fcfb4ba3dea91.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
