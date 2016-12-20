/* eslint max-len: 0 */

import React from 'react';
import Jumbotron from '../../../src/components/Jumbotron';
import Code from '../../../src/components/Code';

export default function JumbotronExamples() {
  return (
    <section id="Jumbotron">
      <h2 className="base--h2">Jumbotron</h2>
      <div className="row">
        <div>
          <Jumbotron
            serviceName="Demo title"
            repository="https://github.com/watson-developer-cloud/react-components"
            documentation="https://www.ibm.com/watson/developercloud/doc/visual-recognition/"
            apiReference="https://www.ibm.com/watson/developercloud/visual-recognition/api/v3"
            startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/visual-recognition/"
            version="Beta"
            serviceIcon="images/service-icon.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div>
          <Code type="jsx">
{`<Jumbotron
  serviceName="Demo title"
  repository="https://github.com/watson-developer-cloud/react-components"
  documentation="https://www.ibm.com/watson/developercloud/doc/visual-recognition/"
  apiReference="https://www.ibm.com/watson/developercloud/visual-recognition/api/v3"
  startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/visual-recognition/"
  version="Beta"
  serviceIcon="images/service-icon.svg"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`}</Code>
        </div>
      </div>
    </section>
  );
}
