const React = require('react');

module.exports = function Header() {
  return (
    <header>
      <div className="wrapper">
        <h1 className="base--h1">
          <a href="http://www.ibm.com/watson/developercloud/">Watson Developer Cloud</a>
        </h1>
        <div className="top-bar--spacer" />
        <nav className="top-bar homepage" role="navigation">
          <div className="top-bar-menu">
            <ul className="main-nav">
              <li className="has-dropdown">
                <a
                  href="#services"
                  className="active"
                  data-dropdown="drop"
                  aria-controls="drop"
                  aria-expanded="false"
                >
                  <span className="arrow-bg">Services</span>
                </a>
                <ul className="full-dropdown-cont">
                  <li
                    id="drop"
                    data-dropdown-content=""
                    className="full-dropdown"
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <div className="full-dropdown-cat language-category">
                      <span className="nav-title language-title">Language</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/alchemy-language.html">AlchemyLanguage</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/conversation.html">Conversation</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/dialog.html">Dialog</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/document-conversion.html">Document Conversion</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/language-translation.html">Language Translation</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/nl-classifier.html">Natural Language Classifier </a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/personality-insights.html">Personality Insights</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/retrieve-rank.html">Retrieve and Rank</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/tone-analyzer.html">Tone Analyzer</a></li>
                      </ul>
                    </div>
                    <div className="full-dropdown-cat ">
                      <span className="nav-title speech-title">Speech</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/speech-to-text.html">Speech to Text</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/text-to-speech.html">Text to Speech</a></li>
                      </ul>
                    </div>
                    <div className="full-dropdown-cat ">
                      <span className="nav-title vision-title">Vision</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/visual-recognition.html">Visual Recognition</a></li>
                      </ul>
                    </div>
                    <div className="full-dropdown-cat ">
                      <span className="nav-title data-insights-title">Data Insights</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/alchemy-data-news.html">AlchemyData News</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/tradeoff-analytics.html">Tradeoff Analytics</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="all-services">
                    <a href="services-catalog.html">View Services Catalog</a>
                  </li>
                </ul>
              </li>
              <li><a href="http://www.ibm.com/watson/developercloud/doc/">Docs</a></li>
              <li><a href="http://www.ibm.com/watson/developercloud/starter-kits.html">Starter Kits</a></li>
              <li><a href="http://developer.ibm.com/watson/">Community</a></li>
            </ul>
            <ul className="mobile-nav">
              <li className="nav-drawer-toggler">Menu</li>
            </ul>
          </div>
        </nav>
        <div className="drawer" tabIndex="0">
          <div className="drawer-container">
            <div className="drawer-title">
              <h3>Menu</h3>
              <a className="close-drawer">
                <img src="images/icons/x.svg" alt="close menu" />
              </a>
            </div>
            <div>
              <ul className="mobile-main-nav">
                <li className="has-dropdown">
                  <a href="services-catalog.html">Services</a>
                  <div className="services-mobile-nav">
                    <div>
                      <span className="nav-title language-title">Language</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/alchemy-language.html">AlchemyLanguage</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/conversation.html">Conversation</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/dialog.html">Dialog</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/document-conversion.html">Document Conversion</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/language-translation.html">Language Translation</a></li>
                      </ul>
                    </div>
                    <div>
                      <ul className="no-title">
                        <li><a href="http://www.ibm.com/watson/developercloud/nl-classifier.html">Natural Language Classifier </a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/personality-insights.html">Personality Insights</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/retrieve-rank.html">Retrieve and Rank</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/tone-analyzer.html">Tone Analyzer</a></li>
                      </ul>
                    </div>
                    <div>
                      <span className="nav-title speech-title">Speech</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/speech-to-text.html">Speech to Text</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/text-to-speech.html">Text to Speech</a></li>
                      </ul>
                    </div>
                    <div>
                      <span className="nav-title vision-title">Vision</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/visual-recognition.html">Visual Recognition</a></li>
                      </ul>
                    </div>
                    <div>
                      <span className="nav-title data-insights-title">Data Insights</span>
                      <ul>
                        <li><a href="http://www.ibm.com/watson/developercloud/alchemy-data-news.html">AlchemyData News</a></li>
                        <li><a href="http://www.ibm.com/watson/developercloud/tradeoff-analytics.html">Tradeoff Analytics</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li><a href="http://www.ibm.com/watson/developercloud/doc/">Docs</a></li>
                <li><a href="http://www.ibm.com/watson/developercloud/starter-kits.html">Starter Kits</a></li>
                <li><a href="http://developer.ibm.com/watson/">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
