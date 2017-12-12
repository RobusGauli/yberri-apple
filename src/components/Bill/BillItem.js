import React , { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from 'global';

const totalPrice = (quant, unitPrice) => quant * unitPrice;

class BillItem extends React.Component {
  
  constructor() {
    super();
    this.state = {
      quantity: 0,
      totalPrice: 0,
      unitPrice: 0,
    };
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  
  componentWillMount = () => {
    
    const { quantity, unitPrice } = this.props;
    this.setState({
      quantity,
      unitPrice,
      totalPrice: totalPrice(quantity, unitPrice),
    });
  }

  _onPress = (value) => {
    const { onItemPress, name, iconName } = this.props;
    //call the props
    

    switch (value) {
      case 'LEFT':
        if (this.state.quantity > 0) {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          this.setState({
            quantity: this.state.quantity - 1,
            totalPrice: totalPrice(this.state.quantity - 1, this.state.unitPrice),
          });
          onItemPress(this.state.quantity - 1, name);
        }
        
        break;
      case 'RIGHT':
        if (this.state.quantity < 1000) {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          this.setState({
            quantity: this.state.quantity + 1,
            totalPrice: totalPrice(this.state.quantity + 1, this.state.unitPrice),
          });
          onItemPress(this.state.quantity + 1, name);
        }
        break;
      default:
        break;
    }
  }

  render() {
    const {
      name,
    } = this.props;
    const {
      quantity,
      totalPrice,
      unitPrice,
    } = this.state;
    return (
      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 14, fontWeight: '400',  flex:1, }}>{name}</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', flex: 1 }}>{unitPrice}</Text>
        <Text style={{ fontSize: 14, fontWeight: '400' , flex: 1,}}>{totalPrice}</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => this._onPress('LEFT')}>
            <Icon name='arrow-down' size={20} color={this.state.quantity <= 0 ? '#BDBDBD' : colors.primary} />
          </TouchableOpacity>
          <Text style={{ fontSize: 14 }}>
            { quantity }
          </Text>
          <TouchableOpacity style={{paddingLeft: 10}} onPress={() => this._onPress('RIGHT')}>
            <Icon name='arrow-up' size={20} color={colors.primary}/>
          </TouchableOpacity>
        
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    justifyContent: 'space-between',
    paddingLeft: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 1,
    marginBottom: 3,
    borderRadius: 20,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
});

export {
  BillItem,
};
