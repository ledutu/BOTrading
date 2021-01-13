/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../themes';
import { convertTimetoDate } from '../../utils/helpers';
import { Text } from '../Text';

export const Table = ({ data, style }) => {

    const renderItem = ({ item, index }) => {
        let color = item.order === 'sell' ? Colors.color2 : Colors.color1;
        return (
            <View style={[styles.flexRowBetweenMid, styles.mt5, styles.tableItem, styles.borderBottom]}>
                <Text style={{ color, flex: 0.2 }} numberOfLines={1}>{item.symbol}</Text>
                <Text style={{ color, flex: 0.3 }} numberOfLines={1}>{item.user}</Text>
                <Text style={{ color, flex: 0.1 }} numberOfLines={1}>{item.order}</Text>
                <Text style={{ color, flex: 0.1 }} numberOfLines={1}>{item.amount}</Text>
                <Text style={{ color, flex: 0.2 }} numberOfLines={1}>{convertTimetoDate(item.time)}</Text>
            </View>
        )
    }

    return (
        <View style={[style]}>
            <View style={[styles.flexRowBetweenMid, {marginBottom: 10}]}>
                <Text style={{flex: 0.2}} numberOfLines={1}>Coins</Text>
                <Text style={{flex: 0.3}} numberOfLines={1}>Live</Text>
                <Text style={{flex: 0.1}} numberOfLines={1}>Order</Text>
                <Text style={{flex: 0.1}} numberOfLines={1}>Amount</Text>
                <Text style={{flex: 0.2}} numberOfLines={1}>Time</Text>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
};

Table.propTypes = {
    data: PropTypes.array,
};

const styles = StyleSheet.create({
    ...ApplicationStyles,
    tableItem: {
        flex: 1,
        paddingBottom: 5,
        marginBottom: 10
    }
})



