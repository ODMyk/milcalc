import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const SortIcon = ({
  height = 20,
  width = 20,
  color = '#1d1d1b',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 256 256" {...props}>
    <Path fill="none" d="M0 0h256v256H0z" />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M64 128h128M24 80h208M104 176h48"
    />
  </Svg>
);
