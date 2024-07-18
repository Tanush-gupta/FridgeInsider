import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SVGComponent = (props) => (
      <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <Path
                  d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  fill="#52a2e7"
            />
            <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.50586 8.00604L11.4929 7.99506ZM7.99384 4.50702L8.00482 11.494Z"
                  fill="white"
            />
            <Path
                  d="M4.50586 8.00604L11.4929 7.99506M7.99384 4.50702L8.00482 11.494"
                  stroke="white"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
      </Svg>
);
export default SVGComponent;
