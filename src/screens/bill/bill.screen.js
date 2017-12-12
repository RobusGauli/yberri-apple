import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity,
} from 'react-native';
import {
  colors, layout, font,
} from 'global';
import { Table, BillItem } from 'components';
import { Card } from 'yberri';

class BillScreen extends Component {

  constructor() {
    super();
    this.state = {
      tableData: {},
    }
  }

  componentWillMount = () => {
    const { params } = this.props.navigation.state;
    
    this.setState({ tableData: params });
  }

  onItemPress = (quantity, name) => {
    //alert(quantity.toString() + name);
  }

  render() {
    const {
      tableData,
    } = this.state;

    const billItemViews = tableData.orderData && Object.entries(tableData.orderData).map((val, index) => {
      const [ itemName, itemData ] = val;
      return (
        <BillItem name={itemName} quantity={itemData.quantity} unitPrice={itemData.unitPrice} key={index} onItemPress={this.onItemPress}/>
      );
    });

    return (
      <View style={{flex: 1}}>
      <ScrollView >
        <View style={{ marginTop: 10 }}/>
        <BillTitle tableName={tableData.tableName} />
        {billItemViews}
        <Card noAnimation style={styles.vatBillContainer}>
          <View style={styles.vatBillItem}>
            <Text style={styles.leftText}> Total Price </Text>
            <Text style={styles.rightText}> Rs.1000 </Text>
          </View>
          <View style={{borderWidth: 0.1, height: 1, width: '93%'}}/>
          <View style={styles.vatBillItem}>
            <Text style={styles.leftText}> Vat(%) </Text>
            <Text style={styles.rightText}> Rs.10 </Text>
          </View>
          <View style={{borderWidth: 0.1, height: 1, width: '93%'}}/>
          <View style={styles.vatBillItem}>
            <Text style={styles.leftText}> Total Price </Text>
            <Text style={styles.rightText}> Rs.1000 </Text>
          </View>
        </Card>

        <Card noAnimation style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => null}>
            <Text> Confirm Bill </Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
      </View>
    );
  }
}


const BillTitle = ({ tableName, date }) => {
  return (
    
    <Card noAnimation style={styles.billTitleContainer}>
      <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>Items</Text>
      <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>UnitPrice(NRs.)</Text>
      <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>Price(NRs.)</Text>
      <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>Quantity</Text>
    </Card>
  );
};

BillTitle.defaultProps = {
  tableName: 'Table Unknown',
  date: 'Monday, December 12',
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBackground,
    flex: 1,
  },
  billTitleContainer: {
    backgroundColor: colors.primary,
    height: 30,
    justifyContent: 'space-between',
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    paddingLeft: 10,
    paddingRight: 10,
  } ,
  vatBillContainer: {
    backgroundColor: colors.lightBackground,
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    height: 100,
    marginTop: 20,
    
  },
  vatBillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 5,
    marginTop: 5,
    
  },
  leftText: {
    fontWeight: '600',
  },
  rightText: {
    fontWeight: '600',
  },
  buttonContainer: {
    backgroundColor: 'red'
  }
});

export {
  BillScreen,
};
