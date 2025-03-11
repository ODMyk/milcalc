import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export const SearchIcon = ({
  height = 20,
  width = 20,
  color = '#1d1d1b',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 30 30" {...props}>
    <Circle
      cx={13}
      cy={13}
      r={8}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 19 6 6"
    />
  </Svg>
);
