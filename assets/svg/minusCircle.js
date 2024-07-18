import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SVGComponent = (props) => (
      <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <Path
                  d="M10.1555 17.0001H23.8444ZM17 32.4001C8.49479 32.4001 1.59998 25.5053 1.59998 17.0001C1.59998 8.49492 8.49479 1.6001 17 1.6001C25.5052 1.6001 32.4 8.49492 32.4 17.0001C32.4 25.5053 25.5052 32.4001 17 32.4001Z"
                  fill="#3E94DF"
            />
            <Path
                  d="M10.1555 17.0001H23.8444M17 32.4001C8.49479 32.4001 1.59998 25.5053 1.59998 17.0001C1.59998 8.49492 8.49479 1.6001 17 1.6001C25.5052 1.6001 32.4 8.49492 32.4 17.0001C32.4 25.5053 25.5052 32.4001 17 32.4001Z"
                  stroke="white"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
      </Svg>
);
export default SVGComponent;
