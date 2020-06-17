import * as React from 'react';
import { withTheme } from 'styled-components';
import { ComponentTheme } from '../../theme/index';

type Props = {
  color?: 'primary' | 'secondary' | 'warning' | 'tertiary' | 'danger';
  theme: ComponentTheme;
};

const FileUploadIcon = ({ color, theme }: Props) => (
  <svg
    id="72abf1fc-af5c-4a12-adab-83afeedac95e"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="728"
    height="796.38"
    viewBox="0 0 728 796.38"
  >
    <defs>
      <linearGradient
        id="44dab5fe-2df9-47ba-adb2-140775afca0e"
        x1="506"
        y1="757.81"
        x2="506"
        y2="51.81"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#b3b3b3" stopOpacity="0.25" />
        <stop offset="0.54" stopColor="#b3b3b3" stopOpacity="0.1" />
        <stop offset="1" stopColor="#b3b3b3" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient
        id="b071ddd1-33a6-4512-b8b6-1cee124e019a"
        x1="49.46"
        y1="96.5"
        x2="49.46"
        y2="3.5"
        xlinkHref="#44dab5fe-2df9-47ba-adb2-140775afca0e"
      />
      <linearGradient
        id="d200849e-56d5-45c5-85eb-e9070e3330a6"
        x1="627.87"
        y1="796.38"
        x2="627.87"
        y2="596.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="gray" stopOpacity="0.25" />
        <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
        <stop offset="1" stopColor="gray" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient
        id="39846f9a-c4dd-4a41-91c8-743bb7d77e65"
        x1="627.87"
        y1="746.82"
        x2="627.87"
        y2="645.68"
        xlinkHref="#d200849e-56d5-45c5-85eb-e9070e3330a6"
      />
      <linearGradient
        id="af8f0828-33b7-4bd6-b50f-ae3d37501acf"
        x1="611"
        y1="802.81"
        x2="611"
        y2="96.81"
        xlinkHref="#44dab5fe-2df9-47ba-adb2-140775afca0e"
      />
      <linearGradient
        id="152252ce-949a-4e00-886c-6a46b2444b40"
        x1="154.46"
        y1="141.5"
        x2="154.46"
        y2="48.5"
        xlinkHref="#44dab5fe-2df9-47ba-adb2-140775afca0e"
      />
    </defs>
    <title>add file2</title>
    <path
      d="M650,694.81c0-51.76,51.11-99.48,102.87-99.48,7.93,0,15.62-2,23-.16.1-2.26.16-15.54.16-17.82V51.81H328l-92,94.5v611.5H659C649.9,743.37,650,713.15,650,694.81Z"
      transform="translate(-236 -51.81)"
      fill="url(#44dab5fe-2df9-47ba-adb2-140775afca0e)"
    />
    <path
      d="M642,704.81a117,117,0,0,1,117-117c3.53,0,7,.17,10.48.47V317h-525V745.81H649.39A116.74,116.74,0,0,1,642,704.81Z"
      transform="translate(-236 -51.81)"
      fill="#fcfcfc"
    />
    <polygon points="533.09 269.19 6.91 269.19 6.91 94.5 92 5.5 533.09 5.5 533.09 269.19" fill="#fcfcfc" />
    <rect x="357.59" y="58.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="357.59" y="98.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="357.59" y="138.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect
      x="357.59"
      y="178.59"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="357.59" y="218.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="357.59" y="258.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect
      x="84.72"
      y="343.59"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="84.72" y="387.13" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="84.72" y="365.36" width="372.56" height="10.89" fill="#69f0ae" opacity="0.5" />
    <rect
      x="84.72"
      y="448.82"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="84.72" y="492.37" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="84.72" y="470.59" width="372.56" height="10.89" fill="#e0e0e0" />
    <rect
      x="84.72"
      y="554.06"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="84.72" y="597.6" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="84.72" y="575.83" width="305.41" height="10.89" fill="#e0e0e0" />
    <polygon
      points="310 281 50 281 50 54 59 43 79.75 43 310 43 310 281"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
    />
    <polygon points="4.91 96.5 94 96.5 94 3.5 4.91 96.5" fill="url(#b071ddd1-33a6-4512-b8b6-1cee124e019a)" />
    <polygon points="6.91 94.5 92 94.5 92 5.5 6.91 94.5" fill="#f5f5f5" />
    <g opacity="0.5">
      <circle cx="627.87" cy="696.25" r="100.13" fill="url(#d200849e-56d5-45c5-85eb-e9070e3330a6)" />
    </g>
    <circle cx="627.87" cy="696.25" r="93.72" fill={theme.palette.success.shade4} />
    <g opacity="0.5">
      <polygon
        points="678.44 684.95 639.16 684.95 639.16 645.68 616.58 645.68 616.58 684.95 577.3 684.95 577.3 707.54 616.58 707.54 616.58 746.82 639.16 746.82 639.16 707.54 678.44 707.54 678.44 684.95"
        fill="url(#39846f9a-c4dd-4a41-91c8-743bb7d77e65)"
      />
    </g>
    <rect x="618.27" y="653.26" width="19.2" height="85.97" fill="#fff" />
    <rect
      x="854.27"
      y="705.07"
      width="19.2"
      height="85.97"
      transform="translate(1375.93 -167.62) rotate(90)"
      fill="#fff"
    />
    <path
      d="M755,739.81c0-51.76,51.11-99.48,102.87-99.48,7.93,0,15.62-2,23-.16.1-2.26.16-15.54.16-17.82V96.81H433l-92,94.5v611.5H764C754.9,788.37,755,758.15,755,739.81Z"
      transform="translate(-236 -51.81)"
      fill="url(#af8f0828-33b7-4bd6-b50f-ae3d37501acf)"
    />
    <path
      d="M747,749.81a117,117,0,0,1,117-117c3.53,0,7,.17,10.48.47V362h-525V790.81H754.39A116.74,116.74,0,0,1,747,749.81Z"
      transform="translate(-236 -51.81)"
      fill="#fff"
    />
    <polygon points="638.09 314.19 111.91 314.19 111.91 139.5 197 50.5 638.09 50.5 638.09 314.19" fill="#fff" />
    <rect x="462.59" y="103.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="462.59" y="143.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="462.59" y="183.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect
      x="462.59"
      y="223.59"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="462.59" y="263.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="462.59" y="303.59" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect
      x="189.72"
      y="388.59"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="189.72" y="432.13" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="189.72" y="410.36" width="372.56" height="10.89" fill="#69f0ae" opacity="0.5" />
    <rect
      x="189.72"
      y="493.82"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="189.72" y="537.37" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="189.72" y="515.59" width="372.56" height="10.89" fill="#e0e0e0" />
    <rect
      x="189.72"
      y="599.06"
      width="142.73"
      height="10.89"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
      opacity="0.5"
    />
    <rect x="189.72" y="642.6" width="142.73" height="10.89" fill="#e0e0e0" />
    <rect x="189.72" y="620.83" width="305.41" height="10.89" fill="#e0e0e0" />
    <polygon
      points="415 326 155 326 155 99 164 88 184.75 88 415 88 415 326"
      fill={color ? theme.upload.svgIcon.fill[color] : '#0093B2'}
    />
    <polygon points="109.91 141.5 199 141.5 199 48.5 109.91 141.5" fill="url(#152252ce-949a-4e00-886c-6a46b2444b40)" />
    <polygon points="111.91 139.5 197 139.5 197 50.5 111.91 139.5" fill="#fcfcfc" />
  </svg>
);

export default withTheme(FileUploadIcon);
