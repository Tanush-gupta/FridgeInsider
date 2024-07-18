import * as React from "react";
import Svg, { Path } from "react-native-svg";
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
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
      </Svg>
);
export default SVGComponent;
