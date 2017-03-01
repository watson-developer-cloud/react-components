import React from 'react';

import GettingStarted from './internal-components/GettingStarted';
import LeadSpace from './internal-components/LeadSpace';
import Nav from './internal-components/Nav';
import ToC from './internal-components/ToC';

import IconExamples from './components/IconExamples';
import HeaderExamples from './components/HeaderExamples';
import FooterExamples from './components/FooterExamples';
import JumbotronExamples from './components/JumbotronExamples';
import TabsExamples from './components/TabsExamples';
import CodeExamples from './components/CodeExamples';
import RadioGroupExamples from './components/RadioGroupExamples';
import ImagePickerExamples from './components/ImagePickerExamples';
import ButtonsGroupExamples from './components/ButtonsGroupExamples';
import AlertExamples from './components/AlertExamples';
import ArrowBoxExamples from './components/ArrowBoxExamples';
import ColorsExample from './components/ColorsExample';
import ModalExamples from './components/ModalExamples';
import TextInputExamples from './components/TextInputExamples';
import JsonLinkExamples from './components/JsonLinkExamples';
import JsonLinkInlineExamples from './components/JsonLinkInlineExamples';
import InputWithButtonExamples from './components/InputWithButtonExamples';
import BarExamples from './components/BarExamples';

export default function App() {
  return (
    <div>
      <Nav />
      <LeadSpace />
      <div className="_container _container_large">
        <div className="content--session-container">
          <ToC>
            <GettingStarted />
            <IconExamples />
            <HeaderExamples />
            <FooterExamples />
            <JumbotronExamples />
            <TabsExamples />
            <TextInputExamples />
            <RadioGroupExamples />
            <ButtonsGroupExamples />
            <CodeExamples />
            <ImagePickerExamples />
            <AlertExamples />
            <ModalExamples />
            <ArrowBoxExamples />
            <ColorsExample />
            <JsonLinkExamples />
            <JsonLinkInlineExamples />
            <InputWithButtonExamples />
            <BarExamples />
          </ToC>
        </div>
      </div>
    </div>
  );
}
