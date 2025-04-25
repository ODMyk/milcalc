import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const UkraineFlagIcon = ({
  height = 55.2,
  width = 38.4,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 55.2 38.4" {...props}>
    <Path
      d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33a3.04 3.04 0 0 1-3.03 3.03H3.03A3.026 3.026 0 0 1 0 35.37V3.03A3.04 3.04 0 0 1 3.03 0z"
      fill="#005bbb"
    />
    <Path
      d="M0 19.2h55.2v16.17a3.04 3.04 0 0 1-3.03 3.03H3.03A3.04 3.04 0 0 1 0 35.37V19.2z"
      fill="#ffd500"
    />
  </Svg>
);
