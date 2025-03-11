import * as React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const EditIcon = ({
  height = 20,
  width = 20,
  color = '#1d1d1b',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" {...props}>
    <G
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}>
      <Path d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2" />
      <Path
        strokeMiterlimit={10}
        d="M16.04 3.02 8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43c.42-.06 1.01-.36 1.32-.66l7.88-7.88c1.36-1.36 2-2.94 0-4.94-2-2-3.58-1.36-4.94 0Z"
      />
      <Path strokeMiterlimit={10} d="M14.91 4.15a7.144 7.144 0 0 0 4.94 4.94" />
    </G>
  </Svg>
);
