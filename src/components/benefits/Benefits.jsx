import css from "./Benefits.module.scss";
const Benefits = () => {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div>
          <h1 className={css.title}>How can SlimWiki help your team?</h1>
        </div>
        <div>
          <h4 className={css.main_text}>
            Simple, versatile and powerful features and incredibly low friction content creation
            mean that your team spend their time focussing on your business.
          </h4>
        </div>
        <div className={css.card_container}>
          <div className={css.title_container}>
            <h2 className={css.card_title}>BEAUTIFUL LAYOUT & TYPOGRAPHY</h2>
          </div>
          <img src="/images/benefits/typography_img.png" alt="logo" className={css.img} />
          <div className={css.main_text_container}>
            <h3 className={css.card_main_text}>
              We have thought carefully about design so you don’t have to. You need only focus on
              your content, we make it look amazing
            </h3>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.card_main_text_container_reverse}>
            <h3 className={css.card_main_text_reverse}>
              Simple drag/drop placement and layout of images and files helps you produce rich,
              useful content easily
            </h3>
          </div>
          <img src="/images/benefits/media_img.png" alt="logo" className={css.img} />
          <div className={css.card_title_container_reverse}>
            <h2 className={css.card_title_reverse}>FILES & MEDIA</h2>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.title_container}>
            <h2 className={css.card_title}>PAGE HISTORY</h2>
          </div>
          <img src="/images/benefits/history_img.png" alt="logo" className={css.img} />
          <div className={css.main_text_container}>
            <h3 className={css.card_main_text}>
              Every change made is stored so it is easy to compare pages, quickly see who made which
              changes and revert changes
            </h3>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.card_main_text_container_reverse}>
            <h3 className={css.card_main_text_reverse}>
              Your data is secure, backed up and exportable at all times.
            </h3>
          </div>
          <img src="/images/benefits/private_img.png" alt="logo" className={css.img} />
          <div className={css.card_title_container_reverse}>
            <h2 className={css.card_title_reverse}>PRIVATE & SECURE</h2>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.title_container}>
            <h2 className={css.card_title}>PAGE VISIBILITY & TEAMS</h2>
          </div>
          <img src="/images/benefits/teams_img.png" alt="logo" className={css.img} />
          <div className={css.main_text_container}>
            <h3 className={css.card_main_text}>
              Content can be visible to your whole company, restricted to a specific Team of people
              or visible only to the content creator
            </h3>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.card_main_text_container_reverse}>
            <h3 className={css.card_main_text_reverse}>
              Careful optimization of the user experience and fast performance means a low barrier
              for content creation and editing
            </h3>
          </div>
          <img src="/images/benefits/fast_img.png" alt="logo" className={css.img} />
          <div className={css.card_title_container_reverse}>
            <h2 className={css.card_title_reverse}>FAST & EFFICIENT</h2>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.title_container}>
            <h2 className={css.card_title}>MOBILE & DESKTOP</h2>
          </div>
          <img src="/images/benefits/mobile_img.png" alt="logo" className={css.img} />
          <div className={css.main_text_container}>
            <h3 className={css.card_main_text}>
              SlimWiki looks stunning on desktop, tablet or phone. Our fully responsive design
              adjusts perfectly to fit all your devices
            </h3>
          </div>
        </div>
        <div className={css.card_container}>
          <div className={css.card_main_text_container_reverse}>
            <h3 className={css.card_main_text_reverse}>
              Coming soon - Choose a layout that matches the culture and style of your team
            </h3>
          </div>
          <img src="/images/benefits/templates_img.png" alt="logo" className={css.img} />
          <div className={css.card_title_container_reverse}>
            <h2 className={css.card_title_reverse}>PROFESSIONALLY DESIGNED TEMPLATES</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
