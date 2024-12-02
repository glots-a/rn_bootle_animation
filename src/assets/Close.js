import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CloseSvg = () => (
  <Svg fill="none" width={24} height={24} viewBox="0 0 24 24">
    <Path
      stroke="#000000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.5 5L5.5 15M15.5 15L5.5 5"
    />
  </Svg>
);
