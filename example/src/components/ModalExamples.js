import React from 'react';
import Modal from '../../../src/components/Modal';
// import Code from '../../../src/components/Code';

export default function ButtonsGroupExamples() {
  return (
    <section className="_full-width-row" id="Modal">
      <div className="_container _container_large">
        <h2 className="base--h2">Modal</h2>
        <div className="row">
          <Modal>
            hello world
          </Modal>
        </div>
      </div>
    </section>
  );
}
