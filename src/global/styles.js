import {
  Platform,
} from 'react-native';

const colors = {
  primary: '#4aa7f1',
  secondary: '#d6dae7',
  textPrimary: '#5d5f5e',
  textSecondary: '#4aa7f1',
  textLight: 'white',
  lightBackground: '#ebf1f8',
  backgroundColor: Platform.OS === 'ios' ? 'white' : '#ebf1f8',
  cardColor: Platform.OS === 'ios' ? 'white' : '#ebf1f8',
};

const shadow = {

  shadowOffset: { width: 10, height: 10 },
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  shadowOpacity: 0.1,
  shadowRadius: 5, 
  
};


const font = {
  larger: Platform.OS === 'ios' ? 30 : 25,
  large: Platform.OS === 'ios' ? 20 : 16,
  regular: Platform.OS === 'ios' ? 18 : 14,
  small: 12,
  family: Platform.OS == 'ios' ? 'ChalkboardSE-Regular' : 'Roboto',
};

const container = {
  flex: 1,
  paddingHorizontal: 10,
  paddingVertical: 10,
};
const noPadding = {
  paddingHorizontal: 0,
  paddingVertical: 0,
};

const center = {
  alignItems: 'center',
  justifyContent: 'center',
};

const borderBottom = {
  borderBottomColor: colors.secondary,
  borderBottomWidth: 2,
};

const layout = {
  container, center, noPadding, borderBottom,
};

const transparent = {
  backgroundColor: 'transparent',
  borderWidth: 1,
};

const filled = {
  backgroundColor: colors.darker,
};

const button = {
  transparent, filled,
};

export {
  layout, colors, font, button, shadow,
};
