import React from "react";

import landingPage from "../img/landingPage.png";
import landingPageMobile from "../img/landingPage-mobile.jpg";
import vinmonpolet from "../img/vinmonopolet.png";
import vinmonpoletMobile from "../img/vinmonopolet-mobile.png";
import docs from "../img/docs.png";
import docsMobile from "../img/docs-mobile.jpg";
import pomodoro from "../img/pomodoro.png";
import pomodoroMobile from "../img/pomodoro-mobile.jpg";
import survey from "../img/survey.png";
import surveyMobile from "../img/survey-mobile.jpg";
import quote from "../img/quote.png";
import quoteMobile from "../img/quote-mobile.jpg";
import drum from "../img/drum.png";
import drumMobile from "../img/drum-mobile.jpg";

import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <>
      <section className="portfolio-wrapper" id="portfolio">
        <h1 className="portfolio-header">MY STUFF</h1>

        <section className="portfolio-section">
          <h1>Oh SH!T! is my vinmonopolet still open?!?</h1>

          <a
            className="image-container"
            href="https://leddfoot-test.herokuapp.com/"
          >
            <img
              className="vinmonopolet--img"
              src={vinmonpolet}
              alt="view of vinmopolet page"
            />
            <img
              src={vinmonpoletMobile}
              className="mobile vinmonopolet--img"
              alt="view of mobile vinmopolet page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">
              #TLDR: vanilla JS, express, node, css, mobile first, cors
              headaches
            </h2>
            <p>
              This project was a self imposed vanilla js project. Theres a whole
              lot of rendering code here that could produced more efficiently in
              react. There are also features like dates and paginating that
              could have been done a lot faster with npm i whatever.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="https://leddfoot-test.herokuapp.com/"
            >
              Link to Oh Sh!t is my vinmonopolet still open
            </a>

            <p>
              The code repository for the vinmonopolet project is on this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/Vinmonopolet2.0"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>Easy Cors Fix Documentation Page</h1>

          <a
            target="_blank"
            rel="noreferrer"
            className="image-container"
            href="https://jocular-rolypoly-ccfe60.netlify.app/"
          >
            <img src={docs} alt="view of easy cors fix documentation page" />
            <img
              src={docsMobile}
              className="mobile"
              alt="view of easy cors fix documentation mobile page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">
              #TLDR: html, css, node, express, mobile first, cors headaches
            </h2>
            <p>
              I completed this project for a certification on FreeCodeCamp. It's
              not so complex in itself. However it does offer insight into how I
              explain and document technical processes. This is an actual
              solution for negating CORS if you want to work with an API than
              you do not control.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="https://jocular-rolypoly-ccfe60.netlify.app/"
            >
              Link to the Easy Cors fix Docs
            </a>
            <p>
              The code repository for the documentation project is on this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/docs_fcc"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>Product Landing Page</h1>

          <a className="image-container" href="/landing-page">
            <img
              src={landingPage}
              alt="view of easy cors fix documentation page"
            />
            <img
              src={landingPageMobile}
              className="mobile"
              alt="view of easy cors fix documentation mobile page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">
              #TLDR: html, css, javascript, react, mobile first
            </h2>
            <p>
              This project was created for a certification on FreeCodeCamp. It
              is pretty straightforward product landing page. The company is
              fictional and doesn't really exist. Shows off a nice design and
              solid mobile first styling.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="/landing-page"
            >
              Link to Landing Page
            </a>
            <p>
              The code repository for the product landing page project is on
              this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/landing_page_fcc"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>Product Survey Page</h1>

          <a
            target="_blank"
            rel="noreferrer"
            className="image-container"
            href="/survey"
          >
            <img src={survey} alt="view of survey page" />
            <img
              src={surveyMobile}
              className="mobile"
              alt="view of survey mobile page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">#TLDR: html, css, javascript, mobile first</h2>
            <p>
              This project was created for a certification on FreeCodeCamp. It
              is a survey page that complements the product landing page above.
              Note that there is no functionality. It is more of a visual
              implementation project. Note: ID selectors are used for components
              to satisfy the test requirements.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="/survey"
            >
              Link to Survey Page
            </a>
            <p>
              The code repository for the product survey project is on this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/survey-form-fcc"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>Pomodoro Timer</h1>

          <a
            target="_blank"
            rel="noreferrer"
            className="image-container"
            href="/pomodoro"
          >
            <img src={pomodoro} alt="view of pomodoro page" />
            <img
              src={pomodoroMobile}
              className="mobile"
              alt="view of pomodoro mobile page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">
              #TLDR: html, css, javascript, mobile first, react, react hooks
            </h2>
            <p>
              This is yet another certification requirement for FreeCodeCamp.
              The tests involving timing were a little tricky to satisfy. Just
              note that some of the setinterval hook is not original code and
              comes from{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
              >
                this example
              </a>{" "}
              on the net where Dan Abramov explains how to implement it.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="/pomodoro"
            >
              Link to Pomodoro Timer
            </a>
            <p>
              The code repository for the pomodoro project is on this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/pomodoro_fcc"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>Quote Fetcher</h1>

          <a
            target="_blank"
            rel="noreferrer"
            className="image-container"
            href="/quote"
          >
            <img src={quote} alt="view of quote page" />
            <img
              src={quoteMobile}
              className="mobile"
              alt="view of quote mobile page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">
              #TLDR: javascript, css, html, mobile first, react, react hooks
            </h2>
            <p>
              This is yet another certification requirement for FreeCodeCamp.
              Nothing too complex, just a fetch to an external Api that
              retrieves quotes.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="/quote"
            >
              Link to Quote Fetcher
            </a>
            <p>
              The code repository for the quote maker project is on this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/quote_machine_fcc"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>Drum Machine</h1>

          <a
            target="_blank"
            rel="noreferrer"
            className="image-container"
            href="/drum"
          >
            <img className="drum--img" src={drum} alt="view of drum page" />
            <img
              src={drumMobile}
              className="mobile drum--img"
              alt="view of drum mobile page"
            />
          </a>

          <section className="portfolio__description">
            <h2 className="tldr">
              #TLDR: javascript, css, html, mobile first, react, react hooks
            </h2>
            <p>
              This is FreeCodeCamp project was designed to be a bit of a
              headache to pass all of the user story tests. Take a look at them
              and you will see what I mean. You can click on a drum pad or use
              the corresponding letter on the keyboard to create the sound
              associated with it.
            </p>
            <a
              className="site-link"
              target="_blank"
              rel="noreferrer"
              href="/drum"
            >
              Link to Drum Machine
            </a>
            <p>
              The code repository for the drum project is on this{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/drum_fcc"
              >
                Github Link
              </a>
              .
            </p>
          </section>
        </section>

        <section className="portfolio-section">
          <h1>This Demo Page</h1>

          <section className={["portfolio__description", "this-demo"].join(" ")}>
            <p>
              The code repository for this page is found on{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Leddfoot/v2_demo_thomas_godwin"
              >
                Github Link.
              </a>
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default PortfolioSection;
