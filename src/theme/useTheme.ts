import {themeSelector} from '@store/modules/AppCommon/selectors';
import {useSelector} from 'react-redux';

import {CoreColorPlate} from './colors/CoreColorPlate';

export const Fonts = {
  Regular: 'InstrumentSans-Regular',
  Default: 'InstrumentSans',
};

export const useTheme = () => {
  const theme = useSelector(themeSelector);
  return {Colors: CoreColorPlate[theme], Fonts};
};
