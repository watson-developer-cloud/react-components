import React from 'react';

import GettingStarted from './internal-components/GettingStarted';
import LeadSpace from './internal-components/LeadSpace';
import Nav from './internal-components/Nav';

export default function App() {
  return (
    <div>
      <Nav />
      <LeadSpace />
      <GettingStarted />
    </div>
  );
}
