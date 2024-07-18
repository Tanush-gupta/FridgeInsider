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
                  d="M6.8291 17.0806C13.9002 21.3232 19.557 15.6663 18.8499 5.0598C8.24352 4.35269 2.58692 10.0097 6.8291 17.0806ZM6.8291 17.0806C6.82902 17.0805 6.82918 17.0807 6.8291 17.0806ZM6.8291 17.0806L5 18.909M6.8291 17.0806L10.6569 13.2522"
                  stroke="#121212"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
      </Svg>
);
export default SVGComponent;
