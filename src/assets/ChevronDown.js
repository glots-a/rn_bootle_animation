import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../constans/colors';

export const ChevronDown = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      stroke={colors.mint_green}
      strokeOpacity="1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 6.75L9 12L3.75 6.75"
    />
  </Svg>
);
