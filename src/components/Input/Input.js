import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { font, colors, shadow } from 'global';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = props => {
  const {
    iconName,
    ...attributes
  } = props;

  return (
    <View style={{ height: 60, borderRadius: 40, backgroundColor: colors.cardColor, alignItems: 'center', flexDirection: 'row', paddingLeft: 20, paddingRight: 20, ...shadow }}>
      <Icon name={iconName} size={30} color={colors.primary}/>
      <TextInput
        style={{ fontSize: font.large, paddingLeft: 20, color: colors.primary, flex: 1 }}
        placeholderTextColor='rgba(0, 12, 200, 0.2)'
        {...attributes}
      />
    </View>
  );
};

Input.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export {
  Input,
};
