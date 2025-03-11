import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const TickIcon = ({
  height = 20,
  width = 20,
  color = '#1d1d1b',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <Path
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 7 9.429 17 6 13"
    />
  </Svg>
);
