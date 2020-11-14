/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from "react-native";
import styles from './Stock.style';
import { ECharts } from "react-native-echarts-wrapper";
import { Btn, Card, Table, Text } from "../../components";
import { CircleBtn } from '../../components/buttons/CircleBtn';
import { Colors, Metrics } from '../../themes';
import { SquareBtn } from '../../components/buttons/SquareBtn';
const { width, height } = Dimensions.get("window");


export default class ScreenContainer extends Component {
    render() {
        const { amount, timeCountDown, isOrder } = this.state;
        return (
            <View style={{}}>
                <View style={styles.chartStyle}>
                    <ECharts
                        option={{}}
                        ref={this.onRef}
                        additionalCode={this.additionalCode}
                        onData={this.onData}
                    // width={width }
                    />
                </View>

                <View style={styles.circleButtonView}>
                    <CircleBtn
                        number={'2'}
                        width={Metrics.iconMedium}
                        backgroundColor={Colors.yellow}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        onPress={() => this.handleChangeAmount('2')}
                    />
                    <CircleBtn
                        number={'5'}
                        width={Metrics.iconMedium}
                        backgroundColor={Colors.yellow}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        onPress={() => this.handleChangeAmount('5')}
                    />
                    <CircleBtn
                        number={'10'}
                        width={Metrics.iconMedium}
                        backgroundColor={Colors.yellow}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        onPress={() => this.handleChangeAmount('10')}
                    />
                    <CircleBtn
                        number={'100'}
                        width={Metrics.iconMedium}
                        backgroundColor={Colors.yellow}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        onPress={() => this.handleChangeAmount('100')}
                    />
                    <CircleBtn
                        number={'500'}
                        width={Metrics.iconMedium}
                        backgroundColor={Colors.yellow}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        onPress={() => this.handleChangeAmount('500')}
                    />
                    <CircleBtn
                        number={'All'}
                        width={Metrics.iconMedium}
                        backgroundColor={Colors.yellow}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        onPress={() => this.handleChangeAmount('all')}
                    />
                </View>

                <View style={[styles.flexRowAroundMid, styles.mt10]}>
                    <View style={styles.flexRowMid}>
                        <SquareBtn
                            title={'/2'}
                            onPress={() => { }}
                            width={Metrics.iconSmall}
                            backgroundColor={Colors.greyButton}
                            color={Colors.white}
                        />
                        <SquareBtn
                            title={'/3'}
                            onPress={() => { }}
                            width={Metrics.iconSmall}
                            backgroundColor={Colors.greyButton}
                            color={Colors.white}
                        />
                        <SquareBtn
                            title={'-2'}
                            onPress={() => { }}
                            width={Metrics.iconSmall}
                            backgroundColor={Colors.greyButton}
                            color={Colors.white}
                        />
                    </View>
                    <Text size={'xxl'}>{amount}</Text>
                    <View style={styles.flexRowMid}>
                        <SquareBtn
                            title={'+1'}
                            onPress={() => { }}
                            width={Metrics.iconSmall}
                            backgroundColor={Colors.greyButton}
                            color={Colors.white}
                        />
                        <SquareBtn
                            title={'x2'}
                            onPress={() => { }}
                            width={Metrics.iconSmall}
                            backgroundColor={Colors.greyButton}
                            color={Colors.white}
                        />
                        <SquareBtn
                            title={'x3'}
                            onPress={() => { }}
                            width={Metrics.iconSmall}
                            backgroundColor={Colors.greyButton}
                            color={Colors.white}
                        />
                    </View>
                </View>

                <View style={[styles.flexRowAroundMid, styles.mt15]}>
                    <Btn
                        style={{ width: width / 2 - 70 }}
                        backgroundColor={!isOrder? Colors.disabled: Colors.color1}
                        onPress={this.handleBuy}
                        disabled={!isOrder}
                    >BUY</Btn>
                    <Btn
                        style={{ width: width / 2 - 70 }}
                        backgroundColor={!isOrder? Colors.disabled: Colors.color2}
                        onPress={this.handleSell}
                        disabled={!isOrder}
                    >SELL</Btn>
                    <CircleBtn
                        number={timeCountDown + ""}
                        width={Metrics.iconMedium}
                        backgroundColor={isOrder ? Colors.color1 : Colors.color2}
                        border
                        borderColor={Colors.white}
                        style={styles.ml5}
                        color={Colors.white}
                        textStyle={{ fontSize: 18, fontWeight: '700' }}
                    />
                </View>


            </View>
        );
    }
}
