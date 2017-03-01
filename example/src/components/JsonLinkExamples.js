import React from 'react';
import JsonLink from '../../../src/components/JsonLink';
import Code from '../../../src/components/Code';

const initialJson = {
  image_id: '6be7a2',
  image_file: '38531138BG_12_F.JPG',
  score: 0.69140625,
  created: '2016-09-25T06:22:37.885Z',
  metadata: {
    additional_image_link: 'http://cdn.yoox.biz/38/38531138BG_12_R.JPG',
    age_group: 'Adult',
    brand: 'STELLA MCCARTNEY',
    category: 'WOMAN / Shirts / Blouses',
    gender: 'Female',
    image_link: 'http://cdn.yoox.biz/38/38531138BG_12_F.JPG',
    item_group_id: '38531138',
    link: 'http://www.yoox.com/US/38531138/item?tp=24509&tskay=3FD17CD7&dept=women&cod10=38531138BG',
    material: '59% Rayon, 41% Acetate',
    product_code: 'us-38531138BG',
    product_name: 'STELLA MCCARTNEY Blouse',
    product_type: 'shirts',
    sizes: '4-6',
  },
};

export default React.createClass({
  getInitialState() {
    return {
      json: initialJson,
    };
  },

  render() {
    return (
      <section id="JsonLink">
        <h2 className="base--h2">JsonLink</h2>
        <div className="row">
          <div className="block-example">
            <JsonLink
              json={this.state.json}
            />
            <p className="base--p">You can edit the JSON below. When you click on the JSON link, this JSON code below will be displayed in a new tab.</p>
            <pre
              className="base--pre"
              style={{ whiteSpace: 'pre', marginTop: '1rem' }}
              contentEditable
              onInput={(e) => {
                this.setState({
                  json: e.target.textContent,
                });
              }}
            >
{`${JSON.stringify(initialJson, 0, 1)}`}
            </pre>
          </div>
          <div className="block-code">
            <Code type="jsx">
{'<JsonLink json={{ a JSON object or string }} />'}
            </Code>
          </div>
        </div>
      </section>
    );
  },
});
