import React from 'react';

import GettingStarted from './internal-components/GettingStarted';
import LeadSpace from './internal-components/LeadSpace';
import Nav from './internal-components/Nav';

import IconExamples from './components/IconExamples';
import HeaderExamples from './components/HeaderExamples';
import FooterExamples from './components/FooterExamples';
import JumbotronExamples from './components/JumbotronExamples';
import TabsExamples from './components/TabsExamples';

export default function App() {
  return (
    <div>
      <Nav />
      <LeadSpace />
      <GettingStarted />
      <IconExamples />
      <HeaderExamples />
      <FooterExamples />
      <JumbotronExamples />
      <TabsExamples />
    </div>
  );
}
