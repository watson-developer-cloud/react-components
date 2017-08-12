/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import colors from './Colors';

function createClassNames(size, user) {
  return classNames(
    'icon',
    user,
    { icon_large: size === 'large' },
    { icon_small: size === 'small' }
  );
}

/* eslint-disable react/prop-types, func-names */
const types = {
  plus(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <g>
        <polygon
          points="8.6,4 7.4,4 7.4,7.4 4,7.4 4,8.6 7.4,8.6 7.4,12 8.6,12 8.6,8.6 12,8.6 12,7.4 8.6,7.4"
        />
        <path
          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,14.9c-3.8,0-6.9-3.1-6.9-6.9S4.2,1.1,8,1.1s6.9,3.1,6.9,6.9 S11.8,14.9,8,14.9z"
        />
      </g>

    </svg>);
  },
  back(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4.9 9.1 24 24"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M7.1,9.1c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S13.7,9.1,7.1,9.1z M7.1,31.4 c-5.7,0-10.3-4.6-10.3-10.3S1.4,10.8,7.1,10.8s10.3,4.6,10.3,10.3S12.8,31.4,7.1,31.4z"
      />
      <circle cx="7.1" cy="21.1" r="12" fill="none" />
      <polygon
        points="7.5,16.6 6.3,15.4 0.5,21.1 6.3,26.8 7.5,25.6 3.8,22 13.8,22 13.8,20.2 3.8,20.2 "
      />

    </svg>);
  },
  check(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 9.1"
      fill={fill || colors.green_50}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <polygon className="checkbox" points="4.2,6.5 1.3,3.6 0,4.8 4.2,9.1 12,1.3 10.7,0 " />

    </svg>);
  },
  'error-o': function (props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill={fill || colors.red_50}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
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

    </svg>);
  },
  error(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill={fill || colors.red_50}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        className="path1"
        d="M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM554.667 725.333h-85.333v-85.333h85.333v85.333zM554.667 426.667l-25.6 153.6h-34.133l-25.6-153.6v-170.667h85.333v170.667z"
      />

    </svg>);
  },
  warning(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill={fill || colors.yellow_20}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <g>
        <path d="M42.667 938.667l469.333-810.667 469.333 810.667z" />
        <path fill="#000" className="text" d="M469.333 725.333h85.333v85.333h-85.333v-85.333z" />
        <path fill="#000" className="text" d="M469.333 469.333h85.333v170.667h-85.333v-170.667z" />
      </g>

    </svg>);
  },
  info(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill={fill || colors.blue_50}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <g>
        <path
          className="path1"
          d="M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM482.133 311.467c8.533-8.533 17.067-12.8 29.867-12.8s21.333 4.267 29.867 12.8 12.8 17.067 12.8 29.867-4.267 21.333-12.8 29.867-17.067 12.8-29.867 12.8-21.333-4.267-29.867-12.8-12.8-17.067-12.8-29.867 4.267-21.333 12.8-29.867zM597.333 725.333h-170.667v-42.667h42.667v-170.667h-42.667v-42.667h128v213.333h42.667v42.667z"
        />
      </g>

    </svg>);
  },
  close(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <circle fill="none" className="st0" cx="11.9" cy="12" r="10" />
      <polygon
        points="15.2,7.6 11.9,10.9 8.5,7.6 7.4,8.7 10.8,12 7.4,15.4 8.5,16.5 11.9,13.1 15.2,16.5 16.3,15.4 13,12 16.3,8.7 "
      />
      <path
        d="M11.9,1C5.8,1,0.9,6,0.9,12s4.9,11,11,11s11-5,11-11S17.9,1,11.9,1z M11.9,21.5c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S17.1,21.5,11.9,21.5z"
      />

    </svg>);
  },
  success(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill={fill || colors.green_50}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM426.667 699.733l-157.867-157.867 59.733-59.733 98.133 98.133 268.8-238.933 55.467 64-324.267 294.4z"
      />

    </svg>);
  },
  'success-o': function (props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill={fill || colors.green_50}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M512 69.818c242.036 0 442.182 200.145 442.182 442.182s-200.145 442.182-442.182 442.182-442.182-200.145-442.182-442.182 200.145-442.182 442.182-442.182zM512 0c-283.927 0-512 228.073-512 512s228.073 512 512 512 512-228.073 512-512-228.073-512-512-512z"
      />
      <path
        d="M698.182 297.891l-32.582 37.236-232.727 246.691-74.473-69.818-32.582-32.582-69.818 69.818 176.873 176.873 32.582-37.236 269.964-283.927 32.582-37.236-69.818-69.818z"
      />
    </svg>);
  },
  up(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M4,1h16v3H4V1z M4.5,13.5L6,15l5-5v13h2V10l5,5l1.5-1.5L12,6L4.5,13.5z"
      />

    </svg>);
  },
  link(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M14.9,1.1C14.2,0.4,13.2,0,12.1,0c-1.1,0-2,0.4-2.8,1.1L7.7,2.8C7,3.5,6.5,4.5,6.5,5.6 c0,0.4,0.1,0.8,0.2,1.2C6.4,6.6,6,6.5,5.6,6.5c-1.1,0-2,0.4-2.8,1.1L1.1,9.4C0.4,10.1,0,11,0,12.1c0,1.1,0.4,2.1,1.1,2.8 C1.8,15.6,2.8,16,3.9,16c1.1,0,2-0.4,2.8-1.1l1.7-1.7c0.7-0.7,1.1-1.7,1.1-2.8c0-0.4-0.1-0.8-0.2-1.2c0.4,0.1,0.8,0.2,1.2,0.2 c1.1,0,2-0.4,2.8-1.1l1.7-1.7C15.6,5.9,16,5,16,3.9C16,2.8,15.6,1.8,14.9,1.1z M7.3,12.2l-1.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7 c-0.7,0-1.3-0.3-1.8-0.7c-0.4-0.4-0.7-1.1-0.7-1.8c0-0.7,0.3-1.3,0.7-1.7l1.7-1.7C4.3,8.3,4.9,8,5.6,8C6,8,6.3,8.1,6.7,8.3l-2.1,2.1 l1,1l2.1-2.1C7.9,9.7,8,10,8,10.4C8,11.1,7.7,11.7,7.3,12.2z M13.8,5.6l-1.7,1.7C11.7,7.7,11.1,8,10.4,8C10,8,9.6,7.9,9.3,7.7 l2.1-2.1l-1-1L8.3,6.7C8.1,6.4,8,6,8,5.6c0-0.7,0.3-1.3,0.7-1.7l1.7-1.7c0.5-0.5,1.1-0.7,1.7-0.7c0.7,0,1.3,0.3,1.7,0.7 s0.7,1.1,0.7,1.7C14.5,4.5,14.3,5.2,13.8,5.6z"
      />
    </svg>);
  },
  loader(props) {
    const { fill, size, className, ...otherProps } = props;
    return (
      <div className="loader-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="25 25 50 50"
          fill={fill || colors.purple_50}
          width="16"
          height="16"
          {...otherProps}
          className={`loader ${createClassNames(size, className)}`}
        >
          <circle cx="50" cy="50" r="20" className="loader--path" />
        </svg>
      </div>);
  },
  reset(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M19,5C12.4,5,7,10.4,7,17v6.6l-4.3-4.3l-1.4,1.4L8,27.4l6.7-6.7l-1.4-1.4L9,23.6V17c0-5.5,4.5-10,10-10s10,4.5,10,10 c0,2.7-1,5.2-2.9,7.1l1.4,1.4c2.3-2.3,3.5-5.3,3.5-8.5C31,10.4,25.6,5,19,5z"
      />

    </svg>);
  },
  right(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.6 37.8"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M21.6,19.1L2.9,37.8L0,34.9l15.8-15.8L0,2.9L2.9,0L21.6,19.1z"
      />

    </svg>);
  },
  ibm(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69.9 28.4"
      fill={fill || colors.gray_100}
      width="69.9"
      height="28.4"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M43.4 7.6v1.9h10.1c-.2-.7-.3-1.1-.6-1.9M66.1 9.5V7.6h-9.5L56 9.5M54.1 11.4h-5s.5 1.5.6 1.9h5c.1-.1-.5-1.6-.6-1.9M59.8 13.2l.6-1.8h-5l-.6 1.8M51 17h7.5l.6-1.9h-8.8c.3.7.4 1.1.7 1.9M43.4 18.9h5.7v1.9h-5.7zM60.4 18.9h5.7v1.9h-5.7zM43.4 15.1h5.7V17h-5.7zM60.4 15.1h5.7V17h-5.7zM43.4 11.4h5.7v1.9h-5.7zM60.4 11.4h5.7v1.9h-5.7zM39.7 22.7h9.4v1.9h-9.4zM39.7 26.5h9.4v1.9h-9.4zM18.9 18.9h5.7v1.9h-5.7zM18.9 7.6h5.7v1.9h-5.7zM3.8 18.9h5.7v1.9H3.8zM3.8 15.1h5.7V17H3.8zM3.8 11.4h5.7v1.9H3.8zM3.8 7.6h5.7v1.9H3.8zM0 22.7h13.2v1.9H0zM0 26.5h13.2v1.9H0zM0 0h13.2v1.9H0zM0 3.8h13.2v1.9H0zM39.7 0v1.9H51c-.3-.8-.4-1.2-.6-1.9M39.7 3.8v1.9h12.6c-.3-.9-.3-1-.6-1.9M69.9 0H59.2l-.7 1.9h11.4M69.9 5.7V3.8h-12l-.6 1.9M60.4 22.7h9.4v1.9h-9.4zM60.4 26.5h9.4v1.9h-9.4zM54.8 28.4l.6-1.9h-1.3c.1.4.7 1.9.7 1.9M53.5 24.6H56l.6-1.9h-3.8c.3.9.5 1.3.7 1.9M52.2 20.8h5l.6-1.9h-6.3c.4 1 .4 1 .7 1.9M35.2 15.1H18.9V17h17.9c-.5-.7-1-1.3-1.6-1.9M30.2 20.8h7.5c0-.7-.1-1.3-.2-1.9h-7.3M15.1 24.6h21.6c.3-.6.6-1.2.8-1.9H15.1M15.1 28.4h15.1c1.9 0 3.7-.7 5-1.9H15.1M18.9 13.2h16.3c.6-.5 1.1-1.2 1.5-1.9H18.9M30.2 9.5h7.3c.2-.6.2-1.2.2-1.9h-7.5M15.1 0v1.9h20.1C33.9.7 32.1 0 30.2 0M15.1 5.7h22.4c-.2-.7-.4-1.3-.8-1.9H15.1"
      />

    </svg>);
  },
  'link-out': function (props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill={fill || colors.gray_100}
      width="69.9"
      height="28.4"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <polygon points="46.2,32.2 46.2,50.1 13.9,50.1 13.9,17.8 32.7,17.8 25.9,24 20.1,24 20.1,43.9 40,43.9 40,38 " />
      <polygon
        points="56.2,9 56.2,15.7 56.2,15.7 56.2,25.9 49.5,25.9 49.5,20.1 30.5,37.6 26,32.6 44.4,15.7 39.4,15.7 39.4,9 "
      />

    </svg>);
  },
  play(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill || colors.gray_100}
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M15.6,2.1c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S23.3,2.1,15.6,2.1z M15.6,28.1 c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S22.2,28.1,15.6,28.1z"
      />
      <polygon points="10.6,22.1 22.6,16.1 10.6,10.1" />

    </svg>);
  },
  stop(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill || colors.gray_100}
      width="16"
      height="16"
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <rect x="10" y="10" width="12" height="12" />
      <path
        d="M15.6,2.1c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S23.3,2.1,15.6,2.1z M15.6,28.1 c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S22.2,28.1,15.6,28.1z"
      />

    </svg>);
  },
  upload(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill || colors.gray_100}
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <polygon points="15.2,5.1 15.2,21.7 17.2,21.7 17.2,5.1 23.5,11.4 24.9,10 16.2,1.3 7.5,10 8.9,11.4" />
      <polygon
        points="29.2,18.7 29.2,26.7 3.2,26.7 3.2,18.7 1.2,18.7 1.2,26.7 1.2,30.7 3.2,30.7 29.2,30.7 31.2,30.7 31.2,26.7 31.2,18.7"
      />

    </svg>);
  },
  microphone(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill || colors.gray_100}
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M16,23.1c3.9,0,7-3.1,7-7v-2v-1v-2v-1v-2c0-3.9-3.1-7-7-7s-7,3.1-7,7v2v1v2v1v2C9,20,12.1,23.1,16,23.1z M13,14.1h-2v-1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2v-1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c0-2.8,2.2-5,5-5s5,2.2,5,5h-2 c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0,2.8-2.2,5-5,5s-5-2.2-5-5h2 c0.6,0,1-0.4,1-1S13.6,14.1,13,14.1z"
      />
      <path
        d="M26,16.1h-2c0,4.4-3.6,8-8,8s-8-3.6-8-8H6c0,5.2,4,9.4,9,9.9v3.1h-3v2h3h2h3v-2h-3V26 C22,25.5,26,21.3,26,16.1z"
      />

    </svg>);
  },
  search(props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill || colors.gray_100}
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z M12,21c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S17,21,12,21z M21,24 l3-3l7,7l-3,3L21,24z M21,20c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S20.4,20,21,20z"
      />

    </svg>);
  },
  'thumbs-down': function (props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 147.6 159.6"
      fill={fill || colors.gray_100}
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M138.7,69.4c1.4-1,2.8-1.9,4.1-2.9c1.7-1.3,3.1-3,4-5c0.4-0.8,0.6-1.7,0.6-2.5c0.1-1.3,0.1-2.6,0-4 c-0.2-2-0.9-3.9-2.3-5.5c-0.6-0.6-1-1.5-1.7-2c-1.4-1.1-2.9-2-4.4-3c-0.4-0.2-0.8-0.4-1.3-0.7c0.6-0.6,1.2-1,1.6-1.5 c1.1-1.4,2-2.8,2.6-4.5c0.6-1.7,0.8-3.3,0.9-5.1c0.2-2.3-0.7-4.3-1.7-6.3c-1.1-2.2-3.1-3.4-5.4-4c-1-0.3-1.9-0.8-2.9-1.2 c-0.4-0.2-0.9-0.3-1.6-0.5c0.2-0.4,0.4-1,0.6-1.4c0.3-0.5,0.7-1,0.9-1.5c0.5-1.9,1.4-3.7,1.2-5.9c-0.1-1.8-0.5-3.4-1.4-4.9 c-0.4-0.7-0.6-1.7-1.2-2.2c-1.5-1.3-3-2.5-5-2.9c-1.4-0.3-2.8-0.9-4.2-1.4c-0.1,0-0.2,0-0.4-0.1c-2.3-0.2-4.6-0.4-6.9-0.5 c-1.3-0.1-2.6-0.1-4,0c-2.5,0.1-5,0-7.4,0.6c-2.4,0.6-5,0.8-7.2,2.2C96.1,3,95.7,3,95.3,3c-3.5,0.2-7,0.2-10.5,0.5 c-1.7,0.1-3.4,0.7-5.1,1c-0.3,0.1-0.6,0-1,0.1c-2.2,0.1-4.3,0.5-6.4,1.4c-0.7,0.3-1.6,0.3-2.3,0.6c-1.5,0.5-3,1.1-4.4,1.6 c-1.2,0.4-2.3,0.8-3.5,1.3c-1.2,0.6-2.4,1.2-3.6,1.8c-1.8,1-3.6,2.2-5.3,3.2c-0.2,0.1-0.3,0.3-0.4,0.4c-1.1,0.9-2.1,1.9-3.2,2.7 c-0.5,0.3-1.3,0.2-1.9,0.2c-0.5,0-1-0.3-1.5-0.4c-1.6-0.3-3.2-0.6-4.9-0.9c-0.5-0.1-1,0-1.4-0.1c-1.2-0.3-2.3-0.6-3.5-1 c-0.2-0.1-0.5-0.1-0.7-0.1c-1.5-0.3-2.9-0.6-4.4-0.9c-1.2-0.2-2.4-0.3-3.5-0.6c-1.3-0.3-2.6-0.7-3.9-0.8c-2-0.2-3.8-1-6-0.3 c-3.8,1.2-6.8,3.5-9.3,6.5c-1.7,2-3.1,4.2-4.4,6.4c-0.6,1.1-0.7,2.5-1.1,3.7c-0.3,1.1-0.7,2.2-1.1,3.3c-0.3,0.9-0.7,1.8-0.9,2.7 c-0.3,1.4-0.3,2.8-0.5,4.2c-1,5.5-0.3,11-0.4,16.5c0,1.9,0.6,3.7,0.8,5.6C1.1,62.9,0.9,64,1.1,65c0.2,1.2,0.6,2.4,0.8,3.5 c0.2,1,0.3,2.1,0.6,3.1c0.5,1.6,1.2,3.2,1.8,4.9c0.4,1,0.7,2,1.2,2.8c0.8,1.4,1.8,2.8,2.8,4.2c0.3,0.4,0.5,0.9,0.9,1.3 c1.1,1.1,2.2,2.3,3.8,2.6c1.2,0.3,2.6,0.7,3.8,0.5c2.4-0.5,4.9-0.4,7.3-0.5c1.6-0.1,3.3-0.3,4.9-0.4c2.7-0.2,5.3-0.3,8-0.5 c0.6,0,1.2-0.4,1.9-0.5c0.3,0,0.7,0.2,1,0.5c1.3,1.4,2.6,2.9,3.9,4.4c1.5,1.7,3.1,3.5,4.7,5.1c0.5,0.5,1.2,0.8,1.7,1.3 c1.6,1.7,3.3,3.2,4.6,5.1c1.3,1.9,2.8,3.6,4.2,5.4c1.7,2.3,2.7,4.9,4.1,7.3c0.8,1.4,1.1,3.2,1.6,4.8c1,3.1,0.3,6.3,0.4,9.4 c0,1.1-0.6,2.2-0.9,3.4c-0.2,0.9-0.4,1.9-0.5,2.8c-0.2,1.3-0.2,2.5-0.5,3.8c-0.4,1.8-1.1,3.6-1.4,5.4c-0.3,2-0.6,4.1-0.5,6.1 c0.1,1.2,1.1,2.4,1.6,3.6c0.5,1.2,1.4,2,2.5,2.5c1.2,0.6,2.4,1.1,3.6,1.5c0.6,0.2,1.3,0.3,1.9,0.5c1.9,0.9,3.9,0.4,5.8,0.4 c1.3-0.1,2.5-0.8,3.7-1.3c1.5-0.6,3.2-1.1,4.5-2.1c2-1.5,4.1-3,5.5-5.2c0.8-1.2,1.9-2.3,2.6-3.7c0.9-1.8,1.9-3.6,2.3-5.6 c0.3-1.4,0.9-2.7,1.4-4.1c0-0.1,0-0.2,0.1-0.4c0.2-1.8,0.5-3.6,0.5-5.4c0-2.2-0.2-4.4-0.5-6.6c-0.3-2.2-0.8-4.5-1.5-6.6 c-0.8-2.4-1.4-4.8-1.4-7.3c0-0.6-0.6-1.3-0.4-1.9c0.7-1.9,0.1-4,1.4-5.7c0.8-1,1.7-1.9,2.7-2.6c0.8-0.7,1.8-1.2,2.8-1.6 c1.5-0.7,3.1-1.2,4.6-1.8c1.4-0.6,2.9-1.1,4.3-1.7c1.2-0.4,2.4-1,3.7-0.9c2.3,0.1,4.6-0.1,7,0.1c1.9,0.1,3.9,0.8,5.7,0.5 c2.6-0.4,5.2-0.3,7.7-0.6c2.7-0.3,5.4-1,7.7-2.5c1.2-0.8,2.2-2,3.1-3.1c0.8-1,1.3-2.2,1.8-3.3c0.4-0.9,0.5-1.8,0.8-2.7 c0.1-0.5,0.3-0.9,0.4-1.4c0.1-0.4,0.2-0.9,0.1-1.3c-0.6-2.1-1-4.2-2.2-6c-1.4-2.2-3.5-3.6-5.6-5.1C139.1,69.4,138.9,69.4,138.7,69.4 z"
      />
    </svg>);
  },
  'thumbs-up': function (props) {
    const { fill, size, className, ...otherProps } = props;
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 147.6 159.6"
      fill={fill || colors.gray_100}
      {...otherProps}
      className={createClassNames(size, className)}
    >
      <path
        d="M138.7,90.2c1.4,1,2.8,1.9,4.1,2.9c1.7,1.3,3.1,3,4,5c0.4,0.8,0.6,1.7,0.6,2.5c0.1,1.3,0.1,2.6,0,4 c-0.2,2-0.9,3.9-2.3,5.5c-0.6,0.6-1,1.5-1.7,2c-1.4,1.1-2.9,2-4.4,3c-0.4,0.2-0.8,0.4-1.3,0.7c0.6,0.6,1.2,1,1.6,1.5 c1.1,1.4,2,2.8,2.6,4.5c0.6,1.7,0.8,3.3,0.9,5.1c0.2,2.3-0.7,4.3-1.7,6.3c-1.1,2.2-3.1,3.4-5.4,4c-1,0.3-1.9,0.8-2.9,1.2 c-0.4,0.2-0.9,0.3-1.6,0.5c0.2,0.4,0.4,1,0.6,1.4c0.3,0.5,0.7,1,0.9,1.5c0.5,1.9,1.4,3.7,1.2,5.9c-0.1,1.8-0.5,3.4-1.4,4.9 c-0.4,0.7-0.6,1.7-1.2,2.2c-1.5,1.3-3,2.5-5,2.9c-1.4,0.3-2.8,0.9-4.2,1.4c-0.1,0-0.2,0-0.4,0.1c-2.3,0.2-4.6,0.4-6.9,0.5 c-1.3,0.1-2.6,0.1-4,0c-2.5-0.1-5,0-7.4-0.6c-2.4-0.6-5-0.8-7.2-2.2c-0.3-0.2-0.8-0.1-1.2-0.1c-3.5-0.2-7-0.2-10.5-0.5 c-1.7-0.1-3.4-0.7-5.1-1c-0.3-0.1-0.6,0-1-0.1c-2.2-0.1-4.3-0.5-6.4-1.4c-0.7-0.3-1.6-0.3-2.3-0.6c-1.5-0.5-3-1.1-4.4-1.6 c-1.2-0.4-2.3-0.8-3.5-1.3c-1.2-0.6-2.4-1.2-3.6-1.8c-1.8-1-3.6-2.2-5.3-3.2c-0.2-0.1-0.3-0.3-0.4-0.4c-1.1-0.9-2.1-1.9-3.2-2.7 c-0.5-0.3-1.3-0.2-1.9-0.2c-0.5,0-1,0.3-1.5,0.4c-1.6,0.3-3.2,0.6-4.9,0.9c-0.5,0.1-1,0-1.4,0.1c-1.2,0.3-2.3,0.6-3.5,1 c-0.2,0.1-0.5,0.1-0.7,0.1c-1.5,0.3-2.9,0.6-4.4,0.9c-1.2,0.2-2.4,0.3-3.5,0.6c-1.3,0.3-2.6,0.7-3.9,0.8c-2,0.2-3.8,1-6,0.3 c-3.8-1.2-6.8-3.5-9.3-6.5c-1.7-2-3.1-4.2-4.4-6.4c-0.6-1.1-0.7-2.5-1.1-3.7c-0.3-1.1-0.7-2.2-1.1-3.3c-0.3-0.9-0.7-1.8-0.9-2.7 c-0.3-1.4-0.3-2.8-0.5-4.2c-1-5.5-0.3-11-0.4-16.5c0-1.9,0.6-3.7,0.8-5.6c0.1-1.1-0.1-2.2,0.1-3.2c0.2-1.2,0.6-2.4,0.8-3.5 c0.2-1,0.3-2.1,0.6-3.1c0.5-1.6,1.2-3.2,1.8-4.9c0.4-1,0.7-2,1.2-2.8c0.8-1.4,1.8-2.8,2.8-4.2c0.3-0.4,0.5-0.9,0.9-1.3 c1.1-1.1,2.2-2.3,3.8-2.6c1.2-0.3,2.6-0.7,3.8-0.5c2.4,0.5,4.9,0.4,7.3,0.5c1.6,0.1,3.3,0.3,4.9,0.4c2.7,0.2,5.3,0.3,8,0.5 c0.6,0,1.2,0.4,1.9,0.5c0.3,0,0.7-0.2,1-0.5c1.3-1.4,2.6-2.9,3.9-4.4c1.5-1.7,3.1-3.5,4.7-5.1c0.5-0.5,1.2-0.8,1.7-1.3 c1.6-1.7,3.3-3.2,4.6-5.1c1.3-1.9,2.8-3.6,4.2-5.4c1.7-2.3,2.7-4.9,4.1-7.3c0.8-1.4,1.1-3.2,1.6-4.8c1-3.1,0.3-6.3,0.4-9.4 c0-1.1-0.6-2.2-0.9-3.4c-0.2-0.9-0.4-1.9-0.5-2.8c-0.2-1.3-0.2-2.5-0.5-3.8c-0.4-1.8-1.1-3.6-1.4-5.4c-0.3-2-0.6-4.1-0.5-6.1 c0.1-1.2,1.1-2.4,1.6-3.6c0.5-1.2,1.4-2,2.5-2.5c1.2-0.6,2.4-1.1,3.6-1.5c0.6-0.2,1.3-0.3,1.9-0.5c1.9-0.9,3.9-0.4,5.8-0.4 C77.7,0.3,79,1,80.2,1.5c1.5,0.6,3.2,1.1,4.5,2.1c2,1.5,4.1,3,5.5,5.2c0.8,1.2,1.9,2.3,2.6,3.7c0.9,1.8,1.9,3.6,2.3,5.6 c0.3,1.4,0.9,2.7,1.4,4.1c0,0.1,0,0.2,0.1,0.4c0.2,1.8,0.5,3.6,0.5,5.4c0,2.2-0.2,4.4-0.5,6.6c-0.3,2.2-0.8,4.5-1.5,6.6 c-0.8,2.4-1.4,4.8-1.4,7.3c0,0.6-0.6,1.3-0.4,1.9c0.7,1.9,0.1,4,1.4,5.7c0.8,1,1.7,1.9,2.7,2.6c0.8,0.7,1.8,1.2,2.8,1.6 c1.5,0.7,3.1,1.2,4.6,1.8c1.4,0.6,2.9,1.1,4.3,1.7c1.2,0.4,2.4,1,3.7,0.9c2.3-0.1,4.6,0.1,7-0.1c1.9-0.1,3.9-0.8,5.7-0.5 c2.6,0.4,5.2,0.3,7.7,0.6c2.7,0.3,5.4,1,7.7,2.5c1.2,0.8,2.2,2,3.1,3.1c0.8,1,1.3,2.2,1.8,3.3c0.4,0.9,0.5,1.8,0.8,2.7 c0.1,0.5,0.3,0.9,0.4,1.4c0.1,0.4,0.2,0.9,0.1,1.3c-0.6,2.1-1,4.2-2.2,6c-1.4,2.2-3.5,3.6-5.6,5.1C139.1,90.2,138.9,90.2,138.7,90.2 z"
      />
    </svg>);
  },
};
/* eslint-enable react/prop-types, func-names */

export const IconTypes = Object.keys(types);

export const Icon = (props) => {
  const { type, ...otherProps } = props;
  const Type = types[type];

  return <span><Type {...otherProps} /></span>;
};

Icon.propTypes = {
  type: PropTypes.oneOf(IconTypes).isRequired,
  fill: PropTypes.string,
  className: PropTypes.string,
  // style is inline css style objects
  style: PropTypes.object,  //eslint-disable-line
  size: PropTypes.oneOf([
    'small',
    'regular',
    'large',
  ]),
};

Icon.defaultProps = {
  className: 'icon',
  size: 'regular',
};
