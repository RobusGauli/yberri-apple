import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { colors, shadow } from 'global';
import { Input } from 'components';


export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  }

  _onLoginPress = () => {
    const navigate = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'TableScreen' })],
    });
    this.props.navigation.dispatch(navigate);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex: 1,  paddingLeft: 20, paddingRight: 20  }}>
          <View style={{height: '30%', justifyContent: 'center', alignItems: 'center'}} >
          <Image
            source={require('./yberrilogo.png')}
            style={{ marginLeft: 60, marginTop: 100 }}
          />
          </View>
          <Input placeholder={'USERNAME'} iconName='md-person' />
            <View style={{ marginTop: 10 }}/>
            <Input placeholder={'PASSWORD'} iconName='md-lock' />
              <TouchableOpacity style={styles.loginButtonContainer} onPress={this._onLoginPress}>
                <Text style={styles.loginText}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <View style={{alignItems: 'flex-end', marginTop: 15, paddingRight: 10 }}>
              <Text> Forget Password? </Text>
              </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',

  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginButtonContainer: {
    minHeight: Platform.OS === 'ios' ? 55 : 50,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#26C6DA',
    borderRadius: 40,
    marginTop: 20,
    justifyContent: 'center',
    ...shadow,

  },
  loginText: {
    fontSize: 22,
    color: colors.textLight,
    fontWeight: 'bold',
  },
});
