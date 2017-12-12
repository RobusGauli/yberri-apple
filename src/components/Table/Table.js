import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, font, shadow } from 'global';

class Table extends React.Component {

  
  render() {
    const {
      tableName,
      isBusy,
      totalOrders,
      fullFilledOrders,
      aboutTheCustomer,
      tableBusyPeriod,
      orderData,
      removeLastBlock,
      onPress,
    } = this.props;
    return (
      <TouchableOpacity style={[styles.container, { backgroundColor: isBusy ? 'rgba(0, 0, 200, 0.07)' : 'white', ...shadow }]} onPress={onPress && (() => onPress(tableName, { isBusy, totalOrders, fullFilledOrders, aboutTheCustomer, tableBusyPeriod, tableName, orderData }))}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <View style={{ marginLeft: 10, flexDirection: 'row',flex: 1, width: '100%', alignItems: 'center' }}>
            <Text style={styles.busyText}>{isBusy ? 'Busy' : 'Free'}</Text>
            <Text style={styles.aboutCustomerText}>{aboutTheCustomer.toUpperCase()}</Text>
        </View>
          <Icon name={isBusy ? 'lock' : 'unlock-alt'} size={20} style={{ marginRight: 20 }} color={colors.textPrimary}/>
        </View>
        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', width: '100%' , justifyContent: 'space-between', paddingRight: 20 }}>
          <Text style={styles.timeText}>{tableBusyPeriod}</Text>
          <View style={{ paddingRight: 7, paddingLeft: 7, paddingTop: 3, paddingBottom: 3, borderRadius: 20 }}>
            <Text style={styles.tableText}>{tableName}</Text>
          </View>
        </View>
        {!removeLastBlock && 
        <View style={{ marginRight: 10, width: '100%', minHeight: 60, flexDirection: 'row', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: colors.lightBrown }}>
          <MiniBox name='TOTAL ORDERS' value={totalOrders} />
          <MiniBox name='COMPLETED' value={fullFilledOrders} />
          <MiniBox name= 'REMAINING' value={ parseInt(totalOrders, 10) - parseInt(fullFilledOrders, 10) } />
        </View>
        }
      </TouchableOpacity>
    );
  }
}
Table.propTypes = {
  tableName: PropTypes.string.isRequired,
  isBusy: PropTypes.bool.isRequired,
  totalOrders: PropTypes.number.isRequired,
  fullFilledOrders: PropTypes.number.isRequired,
  aboutTheCustomer: PropTypes.string.isRequired,
  tableBusyPeriod: PropTypes.string.isRequired,
  orderData: PropTypes.object,
  onPress: PropTypes.func,
  removeLastBlock: PropTypes.bool,
};

Table.defaultProps = {
  tableName: 'Unknown Table',
  isBusy: false,
  totalOrders: '0',
  fullFilledOrders: '0',
  aboutTheCustomer: 'Unknown Customer',
  tableBusyPeriod: '0 HOURS 0 MINUTE',
  removeLastBlock: false,
};

const MiniBox = ({ name, value }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
      <Text style={{ fontSize: 14, fontWeight: '500', color: colors.textPrimary }}>{name}</Text>
      <View style={{ marginTop: 5 }} />
      <Text style={{ fontWeight: 'bold', color: colors.textPrimary }}>{value}</Text>
    </View>
  );
};

MiniBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    minHeight: 140,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#26C6DA',
    borderRadius: 15,
    margin: 4,
    marginRight: 5,
    marginLeft: 5,
  },
  aboutCustomerText: {
    backgroundColor: colors.primary,
    color: 'white',
    paddingLeft: 5, 
    paddingRight: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  busyText: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },
  timeText: {
    fontSize: font.small,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  tableText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.primary,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export { Table };

