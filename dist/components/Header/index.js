"use strict";

var React = require('react');

module.exports = function Header() {
  return React.createElement(
    "header",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "h1",
        { className: "base--h1" },
        React.createElement(
          "a",
          { href: "http://www.ibm.com/watson/developercloud/" },
          "Watson Developer Cloud"
        )
      ),
      React.createElement("div", { className: "top-bar--spacer" }),
      React.createElement(
        "nav",
        { className: "top-bar homepage", role: "navigation" },
        React.createElement(
          "div",
          { className: "top-bar-menu" },
          React.createElement(
            "ul",
            { className: "main-nav" },
            React.createElement(
              "li",
              { className: "has-dropdown" },
              React.createElement(
                "a",
                {
                  href: "#services",
                  className: "active",
                  "data-dropdown": "drop",
                  "aria-controls": "drop",
                  "aria-expanded": "false"
                },
                React.createElement(
                  "span",
                  { className: "arrow-bg" },
                  "Services"
                )
              ),
              React.createElement(
                "ul",
                { className: "full-dropdown-cont" },
                React.createElement(
                  "li",
                  {
                    id: "drop",
                    "data-dropdown-content": "",
                    className: "full-dropdown",
                    "aria-hidden": "true",
                    tabIndex: "-1"
                  },
                  React.createElement(
                    "div",
                    { className: "full-dropdown-cat language-category" },
                    React.createElement(
                      "span",
                      { className: "nav-title language-title" },
                      "Language"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/alchemy-language.html" },
                          "AlchemyLanguage"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/conversation.html" },
                          "Conversation"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/dialog.html" },
                          "Dialog"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/document-conversion.html" },
                          "Document Conversion"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/language-translation.html" },
                          "Language Translation"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/nl-classifier.html" },
                          "Natural Language Classifier "
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/personality-insights.html" },
                          "Personality Insights"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/retrieve-rank.html" },
                          "Retrieve and Rank"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/tone-analyzer.html" },
                          "Tone Analyzer"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "full-dropdown-cat " },
                    React.createElement(
                      "span",
                      { className: "nav-title speech-title" },
                      "Speech"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/speech-to-text.html" },
                          "Speech to Text"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/text-to-speech.html" },
                          "Text to Speech"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "full-dropdown-cat " },
                    React.createElement(
                      "span",
                      { className: "nav-title vision-title" },
                      "Vision"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/visual-recognition.html" },
                          "Visual Recognition"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "full-dropdown-cat " },
                    React.createElement(
                      "span",
                      { className: "nav-title data-insights-title" },
                      "Data Insights"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/alchemy-data-news.html" },
                          "AlchemyData News"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/tradeoff-analytics.html" },
                          "Tradeoff Analytics"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  { className: "all-services" },
                  React.createElement(
                    "a",
                    { href: "services-catalog.html" },
                    "View Services Catalog"
                  )
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "http://www.ibm.com/watson/developercloud/doc/" },
                "Docs"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "http://www.ibm.com/watson/developercloud/starter-kits.html" },
                "Starter Kits"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "http://developer.ibm.com/watson/" },
                "Community"
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "mobile-nav" },
            React.createElement(
              "li",
              { className: "nav-drawer-toggler" },
              "Menu"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "drawer", tabIndex: "0" },
        React.createElement(
          "div",
          { className: "drawer-container" },
          React.createElement(
            "div",
            { className: "drawer-title" },
            React.createElement(
              "h3",
              null,
              "Menu"
            ),
            React.createElement(
              "a",
              { className: "close-drawer" },
              React.createElement("img", { src: "images/icons/x.svg", alt: "close menu" })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "ul",
              { className: "mobile-main-nav" },
              React.createElement(
                "li",
                { className: "has-dropdown" },
                React.createElement(
                  "a",
                  { href: "services-catalog.html" },
                  "Services"
                ),
                React.createElement(
                  "div",
                  { className: "services-mobile-nav" },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "span",
                      { className: "nav-title language-title" },
                      "Language"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/alchemy-language.html" },
                          "AlchemyLanguage"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/conversation.html" },
                          "Conversation"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/dialog.html" },
                          "Dialog"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/document-conversion.html" },
                          "Document Conversion"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/language-translation.html" },
                          "Language Translation"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "ul",
                      { className: "no-title" },
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/nl-classifier.html" },
                          "Natural Language Classifier "
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/personality-insights.html" },
                          "Personality Insights"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/retrieve-rank.html" },
                          "Retrieve and Rank"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/tone-analyzer.html" },
                          "Tone Analyzer"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "span",
                      { className: "nav-title speech-title" },
                      "Speech"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/speech-to-text.html" },
                          "Speech to Text"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/text-to-speech.html" },
                          "Text to Speech"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "span",
                      { className: "nav-title vision-title" },
                      "Vision"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/visual-recognition.html" },
                          "Visual Recognition"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "span",
                      { className: "nav-title data-insights-title" },
                      "Data Insights"
                    ),
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/alchemy-data-news.html" },
                          "AlchemyData News"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "http://www.ibm.com/watson/developercloud/tradeoff-analytics.html" },
                          "Tradeoff Analytics"
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "http://www.ibm.com/watson/developercloud/doc/" },
                  "Docs"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "http://www.ibm.com/watson/developercloud/starter-kits.html" },
                  "Starter Kits"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "http://developer.ibm.com/watson/" },
                  "Community"
                )
              )
            )
          )
        )
      )
    )
  );
};
//# sourceMappingURL=index.js.map
