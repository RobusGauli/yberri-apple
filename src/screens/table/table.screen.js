import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import { navigateTo } from 'utils';
import { Table } from 'components';

const orderData =  {
  Momo: {
    quantity: 4,
    unitPrice: 100,
  },
  Pizza: {
    quantity: 5,
    unitPrice: 200,
  },
  Chowmein: {
    quantity: 10,
    unitPrice: 300,
  },
  ChopSuey: {
    quantity: 10,
    unitPrice: 300,
  },
  MilkCoffee: {
    quantity: 10,
    unitPrice: 300,
  },
  BlackTea: {
    quantity: 10,
    unitPrice: 300,
  },
  CheesePizza: {
    quantity: 10,
    unitPrice: 300,
  },
  Coke: {
    quantity: 10,
    unitPrice: 300,
  },
  Lemonade: {
    quantity: 10,
    unitPrice: 300,
  },
};

const tablesData = {
  Table1: {
    id: 12,
    isBusy: true,
    totalOrders: 20,
    fullFilledOrders: 12,
    waitTimeSinceLastOrder: '3 minutes',
    aboutTheCustomer: 'Couples',
    tableBusyPeriod: '2 HOURS 40 MINUTES',
    orderData, //number of hours table is busy since the customer came in
  },
  Table2: {
    id: 2,
    isBusy: false,
    totalOrders: 4,
    fullFilledOrders: 2,
    waitTimeSinceLastOrder: '0 minute',
    aboutTheCustomer: 'FAMILIY',
    tableBusyPeriod: '1 HOURS 4 MINUTES',
    orderData,
  },
  Table3: {
    id: 3,
    isBusy: false,
    totalOrders: 3,
    fullFilledOrders: 2,
    waitTimeSinceLastOrder: '1 minute',
    aboutTheCustomer: 'REGULAR CUSTOMER',
    tableBusyPeriod: '2 HOURS 30 MINUTES',
    orderData,
  },
  Table4: {
    id: 4,
    isBusy: true,
    totalOrders: 10,
    fullFilledOrders: 0,
    waitTimeSinceLastOrder: '20 minutes',
    aboutTheCustomer: 'FRIENDS',
    tableBusyPeriod: '2 HOURS 44 MINUTES',
    orderData,
  },
  Table5: {
    id: 5,
    isBusy: true,
    totalOrders: 10,
    fullFilledOrders: 0,
    waitTimeSinceLastOrder: '20 minutes',
    aboutTheCustomer: 'Family GATHERING',
    tableBusyPeriod: '2 HOURS 2 MINUTES',
    orderData,
  },
  Table6: {
    id: 5,
    isBusy: true,
    totalOrders: 10,
    fullFilledOrders: 0,
    waitTimeSinceLastOrder: '20 minutes',
    aboutTheCustomer: 'SINGLE',
    tableBusyPeriod: '0 HOURS 3 MINUTES',
    orderData,
  },
  Table7: {
    id: 5,
    isBusy: true,
    totalOrders: 10,
    fullFilledOrders: 0,
    waitTimeSinceLastOrder: '20 minutes',
    aboutTheCustomer: 'Family',
    tableBusyPeriod: '2 hours',
    orderData,
  },
  Table8: {
    id: 5,
    isBusy: true,
    totalOrders: 10,
    fullFilledOrders: 0,
    waitTimeSinceLastOrder: '20 minutes',
    aboutTheCustomer: 'Family',
    tableBusyPeriod: '2 hours',
    orderData,
  },
  
};

class TableScreen extends Component {
  static navigationOprions = {
    title: 'Tables',
  }

  _onTableClick = (_id, data) => {
    navigateTo(this, 'BillScreen', data);
  }

  render() {
    const tablesView = Object.entries(tablesData).map((val, index) => {
      const tableData = val[1];
      const tableName = val[0];
      return (<Table
                tableName={tableName}
                isBusy={tableData.isBusy}
                totalOrders={tableData.totalOrders}
                fullFilledOrders={tableData.fullFilledOrders}
                aboutTheCustomer={tableData.aboutTheCustomer}
                tableBusyPeriod={tableData.tableBusyPeriod}
                key={index}
                orderData={tableData.orderData}
                onPress={this._onTableClick}
              />);
    });
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {tablesView}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

export { TableScreen };
