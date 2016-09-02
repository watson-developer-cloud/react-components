const React = require('react');

const Header = require('./Header');
// const Footer = require('./Footer');
const Jumbotron = require('./Jumbotron');
const App = require('./App');


module.exports = function Index() {
  return (
    <div>
      <Header />
      <Jumbotron
        serviceName="Similarity Search"
        repository="https://github.ibm.com/watson-developer-cloud/similarity-search-nodejs"
        docLink="https://www.ibm.com/watson/developercloud/doc/visual-recognition/"
        apiReferenceLink="https://www.ibm.com/watson/developercloud/visual-recognition/api/v3"
        version="Beta"
        serviceIcon="/images/service-icon.png"
        description="Visual Recognition uses deep learning algorithms to analyze
          images for scenes, objects, faces, text, and other subjects."
      />
      <App />
    </div>
  );
};
