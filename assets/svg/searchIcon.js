import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SVGComponent = (props) => (
      <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <Path
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
                  stroke="#33363F"
                  strokeWidth={2.6}
            />
            <Path
                  d="M21 21L17 17"
                  stroke="#33363F"
                  strokeWidth={2.6}
                  strokeLinecap="round"
            />
      </Svg>
);
export default SVGComponent;
