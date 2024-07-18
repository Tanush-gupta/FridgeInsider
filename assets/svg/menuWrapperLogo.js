import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
const SVGComponent = (props) => (
      <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <G clipPath="url(#clip0_6_12259)">
                  <Path
                        d="M3 9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3H5C3.89543 3 3 3.89543 3 5V9ZM3 19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13H5C3.89543 13 3 13.8954 3 15V19ZM13 19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H15C13.8954 13 13 13.8954 13 15V19ZM15 3C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3H15Z"
                        fill="white"
                  />
            </G>
            <Defs>
                  <ClipPath id="clip0_6_12259">
                        <Rect width={24} height={24} fill="white" />
                  </ClipPath>
            </Defs>
      </Svg>
);
export default SVGComponent;
