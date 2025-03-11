import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const FilterIcon = ({
  height = 20,
  width = 20,
  color = '#1d1d1b',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" {...props}>
    <Path
      stroke={color}
      fill={color}
      d="M44 81a2 2 0 0 1-2-2V53.828L21.758 33.586A5.96 5.96 0 0 1 20 29.343V25c0-2.206 1.794-4 4-4h52c2.206 0 4 1.794 4 4v4.343c0 1.603-.624 3.11-1.758 4.243L58 53.828V73a2 2 0 0 1-1.105 1.789l-12 6A2.004 2.004 0 0 1 44 81zM24 25v4.343c0 .534.208 1.037.586 1.415l20.828 20.828A2 2 0 0 1 46 53v22.764l8-4V53a2 2 0 0 1 .586-1.414l20.828-20.828c.378-.378.586-.881.586-1.415V25H24z"
    />
  </Svg>
);
