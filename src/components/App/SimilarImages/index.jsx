const React = require('react');

const Alert = require('../../Icons/Alert');
const Loading = require('../../Icons/Loading');
const SimilarImage = require('./Image');

function SimilarImages(prop) {
  return (
    <div className="similar-images">
      {(prop.images || prop.loading || prop.error) ?
        (
        <h3 className="base--h3 similar-images--title">Top 100 Similar Images
          <span className="similar-images--sub-title">
            (1.5 million image corpus provided by TBD)
          </span>
        </h3>
        ) : null
      }

      {(prop.images && prop.images.length > 0) ?
        <div>
          <div className="similar-images--results-container">
            {prop.images.map((image) => <SimilarImage image={image} />)}
          </div>
          <div className="similar-images--courtesy-message">
            Images courtesy of IBM Watson partner
            <a
              href="http://www.ynap.com"
              className="base--a similar-images--courtesy-message-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              YNAP
            </a>
          </div>
        </div>
      : null}

      {(prop.loading) ?
        <div className="similar-images--loading">
          <div className="loader-container loader-container_small">
            <Loading />
          </div>
        </div>
        : null
      }

      {prop.error ?
        (
        <div>
          <Alert />
          <p className="base--p service-error--message">{prop.error}</p>
        </div>
        ) : (null)
      }
    </div>
  );
}

module.exports = SimilarImages;
