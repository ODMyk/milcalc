import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const AddIcon = ({
  height = 20,
  width = 20,
  color = '#1d1d1b',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12h16m-8-8v16"
    />
  </Svg>
);
