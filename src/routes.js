import {
  LoginScreen,
  TableScreen,
  BillScreen,
} from 'screens';
import {
  toStackNavigator,
  componentToScreen,
} from 'utils';


const componentToScreenForTable = componentToScreen({
  title: 'Tables',
});

const componentToScreenForBillScreen = componentToScreen({
  title: 'Bill',
});

export const Yberri = toStackNavigator([
  LoginScreen, 
  [TableScreen, componentToScreenForTable],
  [BillScreen, componentToScreenForBillScreen],
])(componentToScreen);
