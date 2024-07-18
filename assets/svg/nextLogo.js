import * as React from 'react';
import Svg, { G, Circle, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
      <Svg
            width={103}
            height={103}
            viewBox="0 0 103 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <G filter="url(#filter0_d_1_114)">
                  <Circle cx={51.5} cy={41.5} r={25.5} fill="#52A2E7" />
            </G>
            <Path
                  d="M44 41H58"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
            <Path
                  d="M51 34L58 41L51 48"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
            <Defs />
      </Svg>
);
export default SVGComponent;
