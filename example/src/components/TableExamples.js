import React from 'react';
import Table from '../../../src/components/Table';
import Code from '../../../src/components/Code';

export default function TableExamples() {
  return (
    <section id="TableExamples">
      <h2 className="base--h2">Table</h2>
      <div className="row">
      <table className="base--table">
        <thead className="base--thead">
          <tr className="base--tr">
            <td className="base--td">First Name</td>
            <td className="base--td">Last Name</td>
            <td className="base--td">Role</td>
            <td className="base--td">Gender</td>
          </tr>
        </thead>
        <tbody className="base--tbody">
          <tr className="base--tr">
            <td className="base--td">Westley</td>
            <td className="base--td"></td>
            <td className="base--td">The Man in Black</td>
            <td className="base--td">Male</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Princess</td>
            <td className="base--td">Buttercup</td>
            <td className="base--td">The Princess Bride</td>
            <td className="base--td">Female</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">Male</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">Male</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">Male</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">Male</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">Male</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">Male</td>
          </tr>
          
        </tbody>
      </table>
      <div>
      <Code type="jsx">
      {`<table className="base--table">
        <thead className="base--thead">
          <tr className="base--tr">
            <td className="base--td">First Name</td>
            <td className="base--td">Last Name</td>
            <td className="base--td">Role</td>
            <td className="base--td">Gender</td>
          </tr>
        </thead>
        <tbody className="base--tbody">
          <tr className="base--tr">
            <td className="base--td">Westley</td>
            <td className="base--td">--</td>
            <td className="base--td">The Man in Black</td>
            <td className="base--td">-Male-</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Princess</td>
            <td className="base--td">Buttercup</td>
            <td className="base--td">The Princess Bride</td>
            <td className="base--td">-Female-</td>
          </tr>
          <tr className="base--tr">
            <td className="base--td">Prince</td>
            <td className="base--td">Humperdinck</td>
            <td className="base--td">The Obnoxious Prince</td>
            <td className="base--td">-Male-</td>
          </tr>
        </tbody>
      </table>`}
          </Code>
        </div>
      </div>
    </section>
  );
}
