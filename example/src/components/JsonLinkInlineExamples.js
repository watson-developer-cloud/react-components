import React from 'react';
import JsonLinkInline from '../../../src/components/JsonLinkInline';
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

export default class JsonLinkInlineExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: initialJson,
      showJson: false,
    };
    this.onExit = this.onExit.bind(this);
    this.onShow = this.onShow.bind(this);
  }

  onExit() {
    this.setState({
      showJson: false,
    });
  }

  onShow() {
    this.setState({
      showJson: !this.state.showJson,
    });
  }

  render() {
    return (
      <section id="JsonLinkInline">
        <h2 className="base--h2">JsonLinkInline</h2>
        <div className="row">
          <JsonLinkInline
            json={this.state.json}
            showJson={this.state.showJson}
            onExit={this.onExit}
            onShow={this.onShow}
            description={<p>This is a description for the JsonLinkInline component.</p>}
          />
          <Code type="jsx">
{`<JsonLinkInline
  json={{ some json object or string }}
  showJson={ boolean to toggle json display }
  onExit={ callback function for when exit button is clicked }
  onShow={ callback function for when json link is clicked }
  description={<p>This is a description for the JsonLinkInline component.</p>}
/>`}
          </Code>
        </div>
      </section>
    );
  }
}
