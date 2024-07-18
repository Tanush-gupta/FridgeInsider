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
                  opacity={0.4}
                  d="M10.4279 16H3.57206C2.70436 16 2 16.6721 2 17.5C2 18.3268 2.70436 19 3.57206 19H10.4279C11.2956 19 12 18.3268 12 17.5C12 16.6721 11.2956 16 10.4279 16Z"
                  fill="white"
            />
            <Path
                  opacity={0.4}
                  d="M22 6.49945C22 5.67232 21.2956 5 20.4289 5H13.5722C12.7044 5 12 5.67232 12 6.49945C12 7.32768 12.7044 8 13.5722 8H20.4289C21.2956 8 22 7.32768 22 6.49945Z"
                  fill="white"
            />
            <Path
                  d="M9 6.49943C9 8.43289 7.43376 10 5.5 10C3.56737 10 2 8.43289 2 6.49943C2 4.56711 3.56737 3 5.5 3C7.43376 3 9 4.56711 9 6.49943Z"
                  fill="white"
            />
            <Path
                  d="M22 17.5006C22 19.4329 20.4338 21 18.5 21C16.5674 21 15 19.4329 15 17.5006C15 15.5671 16.5674 14 18.5 14C20.4338 14 22 15.5671 22 17.5006Z"
                  fill="white"
            />
      </Svg>
);
export default SVGComponent;
