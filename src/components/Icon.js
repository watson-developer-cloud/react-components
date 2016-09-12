/* eslint max-len: 0 */

import React, { PropTypes } from 'react';

import colors from './Colors';

export default class Icon extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf([
      'plus',
      'back',
      'check',
      'error',
      'error-o',
      'success',
      'success-o',
      'warning',
      'info',
      'reset',
      'up',
      'close',
      'loader',
      'link',
    ]).isRequired,
    fill: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.string,
  }

  static defaultProps = {
    className: 'icon',
  }

  getSize() {
    const { size } = this.props;
    return Object.assign({ width: size, height: size }, this.props.style);
  }

  types = {
    plus:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={colors.gray_100}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <g>
          <polygon
            points="8.6,4 7.4,4 7.4,7.4 4,7.4 4,8.6 7.4,8.6 7.4,12 8.6,12 8.6,8.6 12,8.6 12,7.4 8.6,7.4"
          />
          <path
            d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,14.9c-3.8,0-6.9-3.1-6.9-6.9S4.2,1.1,8,1.1s6.9,3.1,6.9,6.9 S11.8,14.9,8,14.9z"
          />
        </g>
      </svg>,
    back:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-4.9 9.1 24 24"
        fill={colors.gray_100}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path
          d="M7.1,9.1c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S13.7,9.1,7.1,9.1z M7.1,31.4 c-5.7,0-10.3-4.6-10.3-10.3S1.4,10.8,7.1,10.8s10.3,4.6,10.3,10.3S12.8,31.4,7.1,31.4z"
        />
        <circle cx="7.1" cy="21.1" r="12" fill="none" />
        <polygon
          points="7.5,16.6 6.3,15.4 0.5,21.1 6.3,26.8 7.5,25.6 3.8,22 13.8,22 13.8,20.2 3.8,20.2 "
        />
      </svg>,
    check:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 9.1"
        fill={colors.green_50}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <polygon className="checkbox" points="4.2,6.5 1.3,3.6 0,4.8 4.2,9.1 12,1.3 10.7,0 " />
      </svg>,
    'error-o':
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={colors.red_50}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path
          className="path1"
          d="M455.68 225.28v117.76l25.6 286.72h56.32l30.72-286.72v-117.76h-112.64z"
        />
        <path
          className="path2"
          d="M568.32 742.4c0 31.105-25.215 56.32-56.32 56.32s-56.32-25.215-56.32-56.32c0-31.105 25.215-56.32 56.32-56.32s56.32 25.215 56.32 56.32z"
        />
        <path
          className="path3"
          d="M512 71.68c240.64 0 440.32 199.68 440.32 440.32s-199.68 440.32-440.32 440.32-440.32-194.56-440.32-440.32 199.68-440.32 440.32-440.32zM512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z"
        />
      </svg>,
    error:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={colors.red_50}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path className="path1" d="M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM554.667 725.333h-85.333v-85.333h85.333v85.333zM554.667 426.667l-25.6 153.6h-34.133l-25.6-153.6v-170.667h85.333v170.667z" />
      </svg>,
    warning:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={colors.yellow_20}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <g>
          <path d="M42.667 938.667l469.333-810.667 469.333 810.667z" />
          <path fill="#000" className="text" d="M469.333 725.333h85.333v85.333h-85.333v-85.333z" />
          <path fill="#000" className="text" d="M469.333 469.333h85.333v170.667h-85.333v-170.667z" />
        </g>
      </svg>,
    info:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={colors.blue_50}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <g>
          <path className="path1" d="M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM482.133 311.467c8.533-8.533 17.067-12.8 29.867-12.8s21.333 4.267 29.867 12.8 12.8 17.067 12.8 29.867-4.267 21.333-12.8 29.867-17.067 12.8-29.867 12.8-21.333-4.267-29.867-12.8-12.8-17.067-12.8-29.867 4.267-21.333 12.8-29.867zM597.333 725.333h-170.667v-42.667h42.667v-170.667h-42.667v-42.667h128v213.333h42.667v42.667z" />
        </g>
      </svg>,
    close:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={colors.gray_100}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <circle fill="none" className="st0" cx="11.9" cy="12" r="10" />
        <polygon fill="#A6276E" points="15.2,7.6 11.9,10.9 8.5,7.6 7.4,8.7 10.8,12 7.4,15.4 8.5,16.5 11.9,13.1 15.2,16.5 16.3,15.4 13,12 16.3,8.7 " />
        <path fill="#A6276E" d="M11.9,1C5.8,1,0.9,6,0.9,12s4.9,11,11,11s11-5,11-11S17.9,1,11.9,1z M11.9,21.5c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S17.1,21.5,11.9,21.5z" />
      </svg>,
    success:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={colors.green_50}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path d="M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM426.667 699.733l-157.867-157.867 59.733-59.733 98.133 98.133 268.8-238.933 55.467 64-324.267 294.4z" />
      </svg>,
    'success-o':
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill={colors.green_50}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path
          d="M512 69.818c242.036 0 442.182 200.145 442.182 442.182s-200.145 442.182-442.182 442.182-442.182-200.145-442.182-442.182 200.145-442.182 442.182-442.182zM512 0c-283.927 0-512 228.073-512 512s228.073 512 512 512 512-228.073 512-512-228.073-512-512-512z"
        />
        <path
          d="M698.182 297.891l-32.582 37.236-232.727 246.691-74.473-69.818-32.582-32.582-69.818 69.818 176.873 176.873 32.582-37.236 269.964-283.927 32.582-37.236-69.818-69.818z"
        />
      </svg>,
    up:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={colors.gray_100}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path
          d="M4,1h16v3H4V1z M4.5,13.5L6,15l5-5v13h2V10l5,5l1.5-1.5L12,6L4.5,13.5z"
        />
      </svg>,
    link:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={colors.gray_100}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path
          d="M14.9,1.1C14.2,0.4,13.2,0,12.1,0c-1.1,0-2,0.4-2.8,1.1L7.7,2.8C7,3.5,6.5,4.5,6.5,5.6 c0,0.4,0.1,0.8,0.2,1.2C6.4,6.6,6,6.5,5.6,6.5c-1.1,0-2,0.4-2.8,1.1L1.1,9.4C0.4,10.1,0,11,0,12.1c0,1.1,0.4,2.1,1.1,2.8 C1.8,15.6,2.8,16,3.9,16c1.1,0,2-0.4,2.8-1.1l1.7-1.7c0.7-0.7,1.1-1.7,1.1-2.8c0-0.4-0.1-0.8-0.2-1.2c0.4,0.1,0.8,0.2,1.2,0.2 c1.1,0,2-0.4,2.8-1.1l1.7-1.7C15.6,5.9,16,5,16,3.9C16,2.8,15.6,1.8,14.9,1.1z M7.3,12.2l-1.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7 c-0.7,0-1.3-0.3-1.8-0.7c-0.4-0.4-0.7-1.1-0.7-1.8c0-0.7,0.3-1.3,0.7-1.7l1.7-1.7C4.3,8.3,4.9,8,5.6,8C6,8,6.3,8.1,6.7,8.3l-2.1,2.1 l1,1l2.1-2.1C7.9,9.7,8,10,8,10.4C8,11.1,7.7,11.7,7.3,12.2z M13.8,5.6l-1.7,1.7C11.7,7.7,11.1,8,10.4,8C10,8,9.6,7.9,9.3,7.7 l2.1-2.1l-1-1L8.3,6.7C8.1,6.4,8,6,8,5.6c0-0.7,0.3-1.3,0.7-1.7l1.7-1.7c0.5-0.5,1.1-0.7,1.7-0.7c0.7,0,1.3,0.3,1.7,0.7 s0.7,1.1,0.7,1.7C14.5,4.5,14.3,5.2,13.8,5.6z"
        />
      </svg>,
    loader:
      <div className="loader-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25 25 50 50"
          fill={colors.purple_50}
          width="1rem"
          height="1rem"
          {...this.props}
          className={`${this.props.className} loader`}
        >
          <circle cx="50" cy="50" r="20" className="loader--path" />
        </svg>
      </div>,
    reset:
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={colors.gray_100}
        width="1rem"
        height="1rem"
        {...this.props}
      >
        <path
          d="M19,5C12.4,5,7,10.4,7,17v6.6l-4.3-4.3l-1.4,1.4L8,27.4l6.7-6.7l-1.4-1.4L9,23.6V17c0-5.5,4.5-10,10-10s10,4.5,10,10 c0,2.7-1,5.2-2.9,7.1l1.4,1.4c2.3-2.3,3.5-5.3,3.5-8.5C31,10.4,25.6,5,19,5z"
        />
      </svg>,
  }

  render() {
    return <span>{this.types[this.props.type]}</span>;
  }
}
