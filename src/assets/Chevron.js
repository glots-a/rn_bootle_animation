import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../constans/colors';

export const ChevronRight = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      stroke={colors.mint_green}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m7.5 15 5-5-5-5"
    />
  </Svg>
);
