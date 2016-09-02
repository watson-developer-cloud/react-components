const React = require('react');
const Input = require('./Input');
const Up = require('../Icons/Up');
const SimilarImages = require('./SimilarImages');

const App = React.createClass({
  getInitialState() {
    return { data: null, error: null };
  },
  onClassify() {},
  render() {
    return (
      <section className="_full-width-row home">
        <div className="_container _container_xx-large">
          <div className="_full-width-row--aside" />
          <div className="_full-width-row--main">
            <Input />
            <SimilarImages />
          </div>
        </div>
        <div className="similar-images--back-to-top">
          <Up />
        </div>
      </section>
    );
  },
});

module.exports = App;
