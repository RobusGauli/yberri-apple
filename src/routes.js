import {
  LoginScreen,
  TableScreen,
} from 'screens';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


const componentToScreenForTable = componentToScreen({
  title: 'Tables',
});

export const Yberri = toStackNavigator([LoginScreen, [TableScreen, componentToScreenForTable]])(componentToScreen);
